import { model, Schema } from 'mongoose';
import { IDestination } from './destination.interface';



const destinationSchema = new Schema<IDestination>(
  {
    country: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    processingTime: { type: String, required: true },
    livingCost: { type: String, required: true },
    topInstitutes: [
      {
        name: { type: String, required: true },
        estimatedFees: { type: String, required: true },
      },
    ],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Destination = model<IDestination>('Destination', destinationSchema);
