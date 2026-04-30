import httpStatus from 'http-status-codes';
import { ConsultationServices } from './consultation.service';
import { sendResponse } from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createConsultation = catchAsync(async (req:Request, res:Response) => {
  const result = await ConsultationServices.createConsultation(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Consultation request submitted successfully',
    data: result,
  });
});

const getAllConsultations = catchAsync(async (req, res) => {
  const result = await ConsultationServices.getAllConsultations();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Consultation requests retrieved successfully',
    data: result,
  });
});

export const ConsultationControllers = {
  createConsultation,
  getAllConsultations,
};
