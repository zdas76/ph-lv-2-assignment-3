import httpStatus from "http-status";
import AppError from "../error/AppError";
import catchAsync from "./catchAsync";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modul/user/user.interfact";

const auth = (...reqiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    jwt.verify(token, config.access_secret as string, function (err, decoded) {
      if (err) {
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
      }

      const role = (decoded as JwtPayload).role;

      if (reqiredRoles && !reqiredRoles.includes(role)) {
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
      }
      req.user = decoded as JwtPayload;

      next();
    });
  });
};

export default auth;
