import { Schema, model } from 'mongoose';
import { IConsultationRequest } from './consultation.interface';

const consultationSchema = new Schema<IConsultationRequest>(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    specialties: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Consultation = model<IConsultationRequest>('Consultation', consultationSchema);
