import { z } from "zod";

export const createBookingValidationRules = z.object({
  name: z
    .string({ error: "Name must be string" })
    .min(2, { message: "Name is too short. Minimum 2 characters required" })
    .max(50, { message: "Name is too long. Maximum 50 characters allowed" }),

  email: z
    .string({ error: "Email must be string" })
    .email({ message: "Invalid email address format" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(100, { message: "Email cannot exceed 100 characters" }),

  service: z
    .string({ error: "Service must be string" })
    .min(2, { message: "Service name is too short" })
    .max(100, { message: "Service name is too long" }),

  time: z
    .string({ error: "Time must be string" })
    .min(3, { message: "Time is required" }),

  message: z
    .string({ error: "Message must be string" })
    .max(500, { message: "Message cannot exceed 500 characters" })
    .optional(),
});

export const updateBookingValidationRules = z.object({
  status: z
    .string({ error: "Status must be string" })
    .min(3, { message: "Status is too short" })
    .max(30, { message: "Status is too long" }),
});

export const BookingValidationRules = {
  createBookingValidationRules,
  updateBookingValidationRules,
};