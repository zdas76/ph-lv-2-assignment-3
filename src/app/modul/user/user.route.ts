import express from "express";
import { UserControllers } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "./user.constants";

const router = express.Router();

router.get("/", UserControllers.getAllUser);

router.get("/me", auth(USER_ROLE.admin, USER_ROLE.user), UserControllers.getLgoinUser);

router.delete("/:id", auth(USER_ROLE.admin), UserControllers.deleteUser);

router.put("/:id", auth(USER_ROLE.admin), UserControllers.updateUser);

export const UserRouter = router;
