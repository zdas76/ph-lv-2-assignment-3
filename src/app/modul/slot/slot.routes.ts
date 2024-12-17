import express from "express";
import { SlorControllers } from "./slot.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constants";

const route = express.Router();

// route.get("/availability", SlorControllers.gerAllSlots);

route.get("/", SlorControllers.gerAllSlots);
route.get("/lots-by-date", SlorControllers.gerSlotsDateById);
route.delete("/:id",  auth(USER_ROLE.admin), SlorControllers.deleteSlot);

export const SlotsRoute = route;
