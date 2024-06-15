import express from "express";
import { SlorControllers } from "./slot.controller";

const route = express.Router();

route.get("/availability", SlorControllers.gerAllSlots);

export const SlotsRoute = route;
