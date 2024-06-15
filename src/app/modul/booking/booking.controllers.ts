import httpStatus from "http-status";
import sendResponse from "../../Utiles/sendResponst";
import catchAsync from "../../middleware/catchAsync";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  console.log(req.user);
  const result = await BookingService.createBooking(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});

const getAllBooking = catchAsync(async (req, res) => {
  console.log("first", req.user);
  const result = await BookingService.getAllBooking();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

const getMyBooking = catchAsync(async (req, res) => {
  const result = await BookingService.getAllBooking();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBooking,
  getMyBooking,
};
