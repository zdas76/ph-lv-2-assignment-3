import express from "express";
import { AuthControllers } from "./auth.controller";
import validationRequest from "../../middleware/validationRequest";
import { AuthValidattion } from "./auth.validation";
import { UserValidattion } from "../user/user.validation";

const routes = express.Router();

routes.post(
  "/login",
  validationRequest(AuthValidattion.loginUserValidationSchema),
  AuthControllers.loginUser
);

routes.post(
  "/signup",
  validationRequest(UserValidattion.createUserValidationSchema),
  AuthControllers.createUser
);

export const AuthRouter = routes;
