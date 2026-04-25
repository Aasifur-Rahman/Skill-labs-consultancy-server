import { Router } from "express";
import { BookingController } from "./booking.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { BookingValidationRules } from "./booking.validation";
import { z } from "zod";

const router =Router()

router.post("/",validateRequest(BookingValidationRules.createBookingValidationRules),BookingController.createBooking);
router.get("/",BookingController.getAllBookings);
router.patch("/status/:id",validateRequest(BookingValidationRules.updateBookingValidationRules),BookingController.updateStatus);
router.delete("/:id",BookingController.removeBooking);

export const BookingRoutes = router;