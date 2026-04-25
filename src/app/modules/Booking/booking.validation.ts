import { z } from "zod";

const createBookingValidationRules = z.object({
  name: z.string(),
  email: z.string(), 
  service: z.string(),
  time: z.string(),
  message: z.string().optional(),
});

const updateBookingValidationRules = z.object({
  status: z.string(),
});

export const BookingValidationRules = {
  createBookingValidationRules,
  updateBookingValidationRules,
};