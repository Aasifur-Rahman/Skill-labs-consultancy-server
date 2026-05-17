import { model, Schema } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>({
  title: { type: String, required: true },
  audience: { type: String, required: true, enum: ["student", "worker"] },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const Service = model<IService>("Service", serviceSchema);