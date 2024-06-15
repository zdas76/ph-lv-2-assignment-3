import express from "express";
import validationRequest from "../../middleware/validationRequest";
import { BookingValidation } from "./booking.validation";
import { BookingController } from "./booking.controllers";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../user/user.constants";

const route = express.Router();

route.post(
  "/",
  auth(USER_ROLE.user),
  validationRequest(BookingValidation.createBookignValidation),
  BookingController.createBooking
);

route.get("/my-bookings", auth(USER_ROLE.user), BookingController.getMyBooking);

route.get("/", auth(USER_ROLE.admin), BookingController.getAllBooking);

export const BookignRoutes = route;
