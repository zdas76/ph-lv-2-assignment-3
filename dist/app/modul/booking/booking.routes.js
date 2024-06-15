"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookignRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const booking_validation_1 = require("./booking.validation");
const booking_controllers_1 = require("./booking.controllers");
const route = express_1.default.Router();
route.post("/", (0, validationRequest_1.default)(booking_validation_1.BookingValidation.createBookignValidation), booking_controllers_1.BookingController.createBooking);
exports.BookignRoutes = route;
