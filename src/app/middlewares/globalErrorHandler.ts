/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

import { TErrrorSourses } from '../interfaces/error';
import { handleCastError } from '../helpers/handleCaseError';
import { handleDuplicateError } from '../helpers/handleDuplicateError';
import { handleZodError } from '../helpers/handleZodError';
import { handleValidationError } from '../helpers/handleValidationError';
import { AppError } from '../errorHelpers/AppError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const globalErrorHandler = (err: any, req: Request, res: Response,next:NextFunction) => {
  // if (envConfig.NODE_ENV === 'development') {
  //   console.log('🔥 Global Error Caught:', err);
  // }

  let statusCode = 500;
  let message = 'Something went wrong';
  let errorSources: TErrrorSourses[] = [];

  if (err.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  } else if (err.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSource;
  } else if (err.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSourses;
  } else if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error: err ,
    stack: err.stack,
  });
};

export default globalErrorHandler;