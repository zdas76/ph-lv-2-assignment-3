import express from "express";
import { AotuControllers } from "./auth.controller";

const routes = express.Router();

routes.post("/signup", AotuControllers.createUser);

export const AuthRouter = routes;
