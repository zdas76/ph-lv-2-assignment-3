"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyBookignRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controllers_1 = require("./booking.controllers");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const route = express_1.default.Router();
route.get("/", (0, auth_1.default)(user_constants_1.USER_ROLE.user), booking_controllers_1.BookingController.getMyBooking);
exports.MyBookignRoutes = route;
