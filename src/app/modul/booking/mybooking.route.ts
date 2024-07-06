import express from "express";
import { BookingController } from "./booking.controllers";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constants";

const route = express.Router();

route.get("/", auth(USER_ROLE.user), BookingController.getMyBooking);

export const MyBookignRoutes = route;
