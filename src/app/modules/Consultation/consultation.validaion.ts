import { z } from 'zod';

const createConsultationValidationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone number is required'),
    serviceType: z.string().min(1, 'Service type is required'),
    time: z.string().min(1, 'Time is required'),
});

export const ConsultationValidations = {
  createConsultationValidationSchema,
};
