import { User } from "./../user/user.model";
import { TUser } from "../user/user.interfact";
import { TLoginUser } from "./auth.interfact";
import AppError from "../../error/AppError";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import config from "../../config";
import jwt from "jsonwebtoken";

const createUserInToDB = async (payLoad: TUser) => {
  const isUserExists = await User.findOne({ email: payLoad?.email });
  if (isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "This email already used");
  }
  payLoad.password = await bcrypt.hash(
    payLoad.password,
    Number(config.saltRounds)
  );

  const result = await User.create(payLoad);

  return result;
};
const loginUser = async (payLoad: TLoginUser) => {
  const user = await User.findOne({ email: payLoad?.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This User is Not Found");
  }

  const match = await bcrypt.compare(payLoad.password, user.password);

  if (!match) {
    throw new AppError(httpStatus.UNAUTHORIZED, "User Not Found");
  }

  const jwtPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
    id: user.id,
  };
  const token = jwt.sign(jwtPayload, config.access_secret as string, {
    expiresIn: "3d",
  });

  return {
    token,
    user,
  };
};

export const AuthService = {
  createUserInToDB,
  loginUser,
};
