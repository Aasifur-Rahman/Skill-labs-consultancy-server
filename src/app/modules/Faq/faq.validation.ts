import z from "zod";

const createFaqValidationSchema = z.object({

    question: z.string().min(1, "Question is required"),
    answer: z.string().min(1, "Answer is required"),
});

const updateFaqValidationSchema = z.object({
    question: z.string().optional(),
    answer: z.string().optional(),
    order: z.number().optional(),
});


export const FaqValidationRules = {
  createFaqValidationSchema,
  updateFaqValidationSchema,
};