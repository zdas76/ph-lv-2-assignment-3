import express from "express";
import { AuthRouter } from "../modul/auth/auth.route";
import { ServiceRoutes } from "../modul/service/service.routes";
import { SlotsRoute } from "../modul/slot/slot.routes";
import { BookignRoutes } from "../modul/booking/booking.routes";

const router = express.Router();

const modulRoutes = [
  { path: "/auth/", route: AuthRouter },
  { path: "/services/", route: ServiceRoutes },
  { path: "/slots/", route: SlotsRoute },
  { path: "/bookings/", route: BookignRoutes },
];

modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
