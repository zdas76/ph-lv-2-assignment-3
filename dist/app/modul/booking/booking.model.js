"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const booking_constant_1 = require("./booking.constant");
const bookingSchema = new mongoose_1.Schema({
    customer: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Customer id is required"],
        unique: true,
        ref: "User",
    },
    serviceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Service id is requried"],
        ref: "Service",
        unique: true,
    },
    slotId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "Slot is required"],
        unique: true,
        ref: "Slot",
    },
    vehicleType: {
        type: String,
        enum: booking_constant_1.vehicleType,
        required: [true, "Vehicle type is required"],
    },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});
exports.Booking = (0, mongoose_1.model)("Booking", bookingSchema);
