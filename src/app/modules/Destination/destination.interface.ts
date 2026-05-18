export interface IDestination {
  country: string;
  description: string;
  imageUrl: string;
  processingTime: string;
  livingCost: string;
  topInstitutes: { name: string; estimatedFees: string }[];
  isDeleted: boolean;
}
