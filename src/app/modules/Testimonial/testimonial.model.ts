import { Schema, model } from 'mongoose';
import { ITestimonial } from './testimonial.interface';

const testimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
  },
  { timestamps: true }
);

export const Testimonial = model<ITestimonial>('Testimonial', testimonialSchema);
