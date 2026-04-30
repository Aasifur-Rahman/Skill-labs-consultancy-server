import { z } from "zod";

export const createCountryValidationRules = z.object({
    name: z
      .string({ error: "Country name must be a string" })
      .min(2, { message: "Country name is too short (min 2 characters)" })
      .max(100, { message: "Country name is too long (max 100 characters)" }),

    image: z
      .string({ error: "Image must be a string (URL)" })
      .url({ message: "Image must be a valid URL" })
      .optional(),

    institutes: z
      .array(
        z
          .string({ error: "Institute name must be a string" })
          .min(2, { message: "Institute name is too short" })
          .max(100, { message: "Institute name is too long" })
      )
      .optional(),

    fees: z
      .string({ error: "Fees must be a string" })
      .min(1, { message: "Fees cannot be empty" })
      .max(50, { message: "Fees is too long" })
      .optional(),

    deadline: z
      .string({ error: "Deadline must be a string" })
      .min(3, { message: "Deadline is required" })
      .max(50, { message: "Deadline is too long" })
      .optional(),
  });

export const updateCountryValidationRules = z.object({
  body: z.object({
    name: z
      .string({ error: "Country name must be a string" })
      .min(2, { message: "Country name is too short" })
      .max(100, { message: "Country name is too long" })
      .optional(),

    image: z
      .string({ error: "Image must be a string (URL)" })
      .url({ message: "Image must be a valid URL" })
      .optional(),

    institutes: z
      .array(
        z.string({ error: "Institute must be a string" })
      )
      .optional(),

    fees: z
      .string({ error: "Fees must be a string" })
      .optional(),

    deadline: z
      .string({ error: "Deadline must be a string" })
      .optional(),
  }),
});

export const CountryValidationRules = {
  createCountryValidationRules,
  updateCountryValidationRules,
};