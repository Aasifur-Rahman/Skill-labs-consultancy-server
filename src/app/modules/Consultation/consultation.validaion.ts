import { z } from 'zod';

const createConsultationValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    serviceType: z.string().min(1, 'Service type is required'),
    time: z.string().min(1, 'Time is required'),
  }),
});

export const ConsultationValidations = {
  createConsultationValidationSchema,
};
