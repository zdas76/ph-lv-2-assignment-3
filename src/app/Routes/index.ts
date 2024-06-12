import express from "express";
import { AuthRouter } from "../modul/auth/auth.route";

const router = express.Router();

const modulRoutes = [{ path: "/auth/", route: AuthRouter }];

modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
