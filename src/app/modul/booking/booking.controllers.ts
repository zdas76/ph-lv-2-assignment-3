import httpStatus from "http-status";
import sendResponse from "../../Utiles/sendResponst";
import catchAsync from "../../middleware/catchAsync";
import { BookingService } from "./booking.service";
import { Request, Response } from "express";
import { TAuthUser } from "../auth/auth.interfact";

const createBooking = catchAsync(async (req: Request & {user?:TAuthUser | unknown}, res:Response) => {
  
  const result = await BookingService.createBooking(req.body, req.user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingService.getAllBooking();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: result,
  });
});

const getMyBooking = catchAsync(async (req: Request & {user?:TAuthUser | unknown}, res:Response) => {
  const {id} = req.user! ;

  const result = await BookingService.getMyBooking(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User bookings retrieved successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBooking,
  getMyBooking,
};
