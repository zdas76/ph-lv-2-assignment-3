"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [5, "Name required minimum 5 characters"],
    },
    email: { type: String, required: [true, "Emain Required"] },
    password: { type: String, required: [true, "Password Required"] },
    phone: { type: String, required: [true, "Phone number is required"] },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    address: {
        type: String,
        minlength: [10, "Address required minimum 50 characters"],
    },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)("User", userSchema);
