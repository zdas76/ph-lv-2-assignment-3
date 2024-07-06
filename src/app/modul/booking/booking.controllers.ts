import httpStatus from "http-status";
import sendResponse from "../../Utiles/sendResponst";
import catchAsync from "../../middleware/catchAsync";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBooking(req.body, req.user.id);

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
    message: "All bookings retrieved successfully",
    data: result,
  });
});

const getMyBooking = catchAsync(async (req, res) => {
  const id = req.user.id;
  console.log(id);

  const result = await BookingService.getAllMyBooking(id);

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
