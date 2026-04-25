import { Schema, model } from "mongoose";
import { IBooking } from "./booking.interface";

const BookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  email: String,
  service: String,
  time: String,
  message: String,
  status: { type: String, default: "pending" }
});

export const Booking = model<IBooking>("Booking", BookingSchema);