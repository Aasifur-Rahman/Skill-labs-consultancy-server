import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema = new Schema<IBooking>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    serviceType: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected', 'completed'],
      default: 'pending',
    },
    consultantId: { type: Schema.Types.ObjectId, ref: 'Consultation' },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<IBooking>("Booking", BookingSchema);