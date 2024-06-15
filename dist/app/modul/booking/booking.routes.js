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
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const route = express_1.default.Router();
route.post("/", (0, auth_1.default)(user_constants_1.USER_ROLE.user), (0, validationRequest_1.default)(booking_validation_1.BookingValidation.createBookignValidation), booking_controllers_1.BookingController.createBooking);
route.get("/my-bookings", (0, auth_1.default)(user_constants_1.USER_ROLE.user), booking_controllers_1.BookingController.getMyBooking);
route.get("/", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), booking_controllers_1.BookingController.getAllBooking);
exports.BookignRoutes = route;
