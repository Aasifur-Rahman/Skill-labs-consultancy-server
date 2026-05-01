import { z } from 'zod';

const createTestimonialValidationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    role: z.string().min(1, 'Role is required'),
    text: z.string().min(10, 'Review text must be at least 10 characters'),
    rating: z.number().min(1).max(5),
});

const updateTestimonialStatusValidationSchema = z.object({
    status: z.enum(['pending', 'approved', 'rejected']),
});

export const TestimonialValidations = {
  createTestimonialValidationSchema,
  updateTestimonialStatusValidationSchema
};
