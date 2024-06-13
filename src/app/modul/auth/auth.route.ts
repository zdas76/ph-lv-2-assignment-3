import express from "express";
import { AotuControllers } from "./auth.controller";
import validationRequest from "../../middleware/validationRequest";
import { AuthValidattion } from "./auth.validation";
import { UserValidattion } from "../user/user.validation";

const routes = express.Router();

routes.post(
  "/login",
  validationRequest(AuthValidattion.loginUserValidationSchema),
  AotuControllers.loginUser
);

routes.post(
  "/signup",
  validationRequest(UserValidattion.createUserValidationSchema),
  AotuControllers.createUser
);

export const AuthRouter = routes;
