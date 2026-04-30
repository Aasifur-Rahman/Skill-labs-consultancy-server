import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { BookingRoutes } from "../modules/Booking/booking.route";
import { ServiceRoutes } from "../modules/Service/service.route";
import { CountryRoutes } from "../modules/Country/country.route";
import { ConsultationRoutes } from "../modules/Consultation/consultation.route";
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
    },
    {
        path: "/country",
        route: CountryRoutes,
    },
    {
        path: "/consultation",
        route: ConsultationRoutes,
    }

]

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});