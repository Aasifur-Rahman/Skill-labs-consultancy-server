import { Schema, model } from "mongoose";
import { ICountry } from "./country.interface";

const countrySchema = new Schema<ICountry>(
  {
    name: { type: String, required: true },
    image: { type: String },
    institutes: [{ type: String }],
    fees: { type: String },
    deadline: { type: String }
  },
  { timestamps: true }
);

export const Country = model<ICountry>("Country", countrySchema);