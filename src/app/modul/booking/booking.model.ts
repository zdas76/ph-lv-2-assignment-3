import { Schema, Types } from "mongoose";
import { TBookign } from "./booking.interfact";
import { vehicleType } from "./booking.constant";

const bookingSchema = new Schema<TBookign>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: [true, "Customer id is required"],
      unique: true,
      ref: "User",
    },
    service: {
      type: Schema.Types.ObjectId,
      required: [true, "Service id is requried"],
      ref: "Service",
      unique: true,
    },
    slot: {
      type: Schema.Types.ObjectId,
      required: [true, "Slot is required"],
      unique: true,
      ref: "Slot",
    },
    vehicleType: {
      type: String,
      enum: vehicleType,
      required: [true, "Vehicle type is required"],
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Date, required: true },
    registrationPlate: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
