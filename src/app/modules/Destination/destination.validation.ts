

import { z } from "zod";

const topInstituteSchema = z.object({
  name: z
    .string({
      error: "Institute name must be a string",
    })
    .min(2, {
      message: "Institute name is too short",
    }),

  estimatedFees: z
    .string({
      error: "Estimated fees must be a string",
    })
    .min(1, {
      message: "Estimated fees is required",
    }),
});

export const createDestinationValidationRules = z.object({
  country: z
    .string({
      error: "Country must be a string",
    })
    .min(2, {
      message: "Country name is too short",
    }),

  description: z
    .string({
      error: "Description must be a string",
    })
    .min(10, {
      message: "Description is too short",
    }),

  imageUrl: z
    .string({
      error: "Image URL must be a string",
    })
    .optional(),

  processingTime: z
    .string({
      error: "Processing time must be a string",
    })
    .min(2),

  livingCost: z
    .string({
      error: "Living cost must be a string",
    })
    .min(2),

  topInstitutes: z
    .array(topInstituteSchema)
    .optional(),
});

export const updateDestinationValidationRules = z.object({
  body: z.object({
    country: z
      .string({
        error: "Country must be a string",
      })
      .optional(),

    description: z
      .string({
        error: "Description must be a string",
      })
      .optional(),

    imageUrl: z
      .string({
        error: "Image URL must be a string",
      })
      .optional(),

    processingTime: z
      .string({
        error: "Processing time must be a string",
      })
      .optional(),

    livingCost: z
      .string({
        error: "Living cost must be a string",
      })
      .optional(),

    topInstitutes: z
      .array(topInstituteSchema)
      .optional(),
  }),
});

export const DestinationValidationRules = {
  createDestinationValidationRules,
  updateDestinationValidationRules,
};