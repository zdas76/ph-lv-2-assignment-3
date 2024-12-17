import { Schema, model } from "mongoose";
import { TService } from "./service.interface";

const ServiceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: [true, "Service name is required"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Service description is required"],
    },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    images: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ServiceSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

ServiceSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Service = model("Service", ServiceSchema);
