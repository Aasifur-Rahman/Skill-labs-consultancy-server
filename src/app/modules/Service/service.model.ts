import { model, Schema } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>({
  title: { type: String, required: true },
  category: { type: String, required: true, enum: ["student", "worker"] },
  description: { type: String, required: true },
});

export const Service = model<IService>("Service", serviceSchema);