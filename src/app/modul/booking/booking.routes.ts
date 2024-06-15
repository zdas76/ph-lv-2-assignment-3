import express from "express";
import validationRequest from "../../middleware/validationRequest";
import { BookingValidation } from "./booking.validation";
import { BookingController } from "./booking.controllers";

const route = express.Router();

route.post(
  "/",
  validationRequest(BookingValidation.createBookignValidation),
  BookingController.createBooking
);

route.get("/my-bookings", BookingController.getMyBooking);

route.get("/", BookingController.getAllBooking);

export const BookignRoutes = route;
