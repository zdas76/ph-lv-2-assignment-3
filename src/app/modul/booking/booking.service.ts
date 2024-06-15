import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { Slots } from "../slot/slot.model";
import { TBookign } from "./booking.interfact";
import { Booking } from "./booking.model";
import { Service } from "../service/service.model";
import mongoose from "mongoose";

const createBooking = async (payload: TBookign) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const checkService = await Service.findById(payload.serviceId);
    if (!checkService) {
      throw new AppError(httpStatus.NOT_FOUND, `Service is not found`);
    }
    const sloteStatus = await Slots.findById(payload.slotId);

    if (sloteStatus?.isBooked === "booked") {
      throw new AppError(
        httpStatus.NOT_ACCEPTABLE,
        `${checkService.name} is not avaible at this time. Please chose others`
      );
    }

    const updateSlotStatus = await Slots.findOneAndUpdate(
      { _id: payload.slotId },
      { isBooked: "booked" },
      { session, new: true }
    );

    if (!updateSlotStatus) {
      throw new AppError(httpStatus.NOT_FOUND, "Failed to creat booking!");
    }

    const newBooking = await Booking.create([payload], { session });
    if (!newBooking) {
      throw new AppError(httpStatus.NOT_FOUND, "Failed to creat booking!");
    }

    await session.commitTransaction();
    await session.endSession();

    return newBooking;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const getAllBooking = async () => {
  const result = await Booking.find()
    .populate("customer")
    .populate("serviceId")
    .populate("slotId");

  return result;
};

export const BookingService = {
  createBooking,
  getAllBooking,
};
