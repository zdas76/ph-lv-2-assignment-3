"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modul/auth/auth.route");
const service_routes_1 = require("../modul/payment/service/service.routes");
const slot_routes_1 = require("../modul/slot/slot.routes");
const booking_routes_1 = require("../modul/booking/booking.routes");
const mybooking_route_1 = require("../modul/booking/mybooking.route");
const user_route_1 = require("../modul/user/user.route");
const payment_route_1 = require("../modul/payment/payment.route");
const review_route_1 = require("../modul/Review/review.route");
const router = express_1.default.Router();
const modulRoutes = [
    { path: "/auth/", route: auth_route_1.AuthRouter },
    { path: "/users/", route: user_route_1.UserRouter },
    { path: "/services/", route: service_routes_1.ServiceRoutes },
    { path: "/slots/", route: slot_routes_1.SlotsRoute },
    { path: "/bookings/", route: booking_routes_1.BookignRoutes },
    { path: "/my-bookings/", route: mybooking_route_1.MyBookignRoutes },
    { path: "/payment/", route: payment_route_1.PaymentRoute },
    { path: "/reviews/", route: review_route_1.ReviewsRouter },
];
modulRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
