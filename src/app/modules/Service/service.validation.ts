import z from "zod";

const createServiceZodSchema = z.object({
  title: z
    .string({ error: "Title must be string" })
    .min(2, { message: "Title is too short" })
    .max(50, { message: "Title is too long" }),
  category: z
    .string({ error: "Category must be string" })
    .min(2, { message: "Category is too short" })
    .max(50, { message: "Category is too long" }),
  description: z
    .string({ error: "Description must be string" })
    .min(2, { message: "Description is too short" })
    .max(50, { message: "Description is too long" }),
});

export const ServiceValidationRules = {
  createServiceZodSchema,
};