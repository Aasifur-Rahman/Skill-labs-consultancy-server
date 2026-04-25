/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { TErrorSources } from '../interfaces/error.type';

export const handleValidationError = (
  error: mongoose.Error.ValidationError,
) => {
  const errorSources: TErrorSources[] = [];
  const errors = Object.values(error.errors);
  errors.forEach((errorObject: any) =>
    errorSources.push({
      path: errorObject.path,
      message: errorObject.message,
    }),
  );
  return {
    statusCode: 400,
    message: 'Validation Error',
    errorSources,
  };
};