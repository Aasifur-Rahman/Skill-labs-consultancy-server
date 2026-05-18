import { Types } from "mongoose";

export interface IBooking {
  user?: Types.ObjectId;
  name?: string;
  email?: string;
  service: string;
  time: string;
  message?: string;
  status: "pending" | "approved" | "rejected";
}