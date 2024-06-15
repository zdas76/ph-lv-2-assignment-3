"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Routes_1 = __importDefault(require("./app/Routes"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
// import cookieParser from "cookie-parser";
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cookieParser());
app.use((0, cors_1.default)());
app.use("/api/", Routes_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to Car Wash Booking System");
});
app.use(globalErrorHandler_1.default);
// Not Found
app.use(notFound_1.default);
exports.default = app;
