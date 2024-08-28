"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slots = void 0;
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    service: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "Service" },
    date: { type: Date, reqquired: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: {
        type: String,
        enum: ["available", "booked", "canceled"],
        default: "available",
    },
}, {
    timestamps: true,
});
slotSchema.pre("find", function (next) {
    this.find({ isBooked: { $ne: "booked" } });
    next();
});
exports.Slots = (0, mongoose_1.model)("Slots", slotSchema);
