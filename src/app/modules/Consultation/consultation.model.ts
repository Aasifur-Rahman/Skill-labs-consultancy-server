import { Schema, model } from 'mongoose';
import { IConsultationRequest } from './consultation.interface';

const consultationSchema = new Schema<IConsultationRequest>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    serviceType: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

export const Consultation = model<IConsultationRequest>('Consultation', consultationSchema);
