import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BookingRoutes } from "../modules/Booking/booking.route";
import { ServiceRoutes } from "../modules/Service/service.route";
export const router = Router();
const moduleRoutes =[
    {
        path: "/user",
         route: UserRoutes,
    },
    {
        path: "/auth",
        route:AuthRoutes,
    },
    {
        path: "/booking",
        route:BookingRoutes,
    },
    {
        path: "/service",
        route:ServiceRoutes,
    }

]

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});