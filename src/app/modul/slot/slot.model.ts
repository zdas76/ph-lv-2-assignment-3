import { Schema, Types, model } from "mongoose";
import { TSlot } from "./slot.interface";

const slotSchema = new Schema<TSlot>(
  {
    service: { type: Schema.Types.ObjectId, required: true, ref: "Service" },
    date: { type: Date, reqquired: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: {
      type: String,
      enum: ["available", "booked", "canceled"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export const Slots = model("Slots", slotSchema);
