import express from "express";
import { AuthRouter } from "../modul/auth/auth.route";
import { ServiceRoutes } from "../modul/payment/service/service.routes";
import { SlotsRoute } from "../modul/slot/slot.routes";
import { BookignRoutes } from "../modul/booking/booking.routes";
import { MyBookignRoutes } from "../modul/booking/mybooking.route";
import { UserRouter } from "../modul/user/user.route";
import { PaymentRoute } from "../modul/payment/payment.route";
import { ReviewsRouter } from "../modul/Review/review.route";

const router = express.Router();

const modulRoutes = [
  { path: "/auth/", route: AuthRouter },
  { path: "/users/", route: UserRouter },
  { path: "/services/", route: ServiceRoutes },
  { path: "/slots/", route: SlotsRoute },
  { path: "/bookings/", route: BookignRoutes },
  { path: "/my-bookings/", route: MyBookignRoutes },
  { path: "/payment/", route: PaymentRoute },
  { path: "/reviews/", route: ReviewsRouter },
];

modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
