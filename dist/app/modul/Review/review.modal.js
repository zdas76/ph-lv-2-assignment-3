"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviews = void 0;
const mongoose_1 = require("mongoose");
const reviewchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
}, {
    timestamps: true,
});
exports.Reviews = (0, mongoose_1.model)("Reviews", reviewchema);
