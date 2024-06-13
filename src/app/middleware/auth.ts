import catchAsync from "./catchAsync";
import { NextFunction, Request, Response } from "express";

const auth = () => {
  return catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {}
  );
};

export default auth;
