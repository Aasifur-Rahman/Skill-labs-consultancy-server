import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { Service } from "./service.model";
import { ServicesService } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const service = await ServicesService.createService(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service created successfully",
    data: service,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const services = await ServicesService.getAllServices();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Services fetched successfully",
    data: services,
  });
});

const getServiceById = catchAsync(async (req, res) => {
  const service = await ServicesService.getServiceById(req.params.id as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service fetched successfully",
    data: service,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getServiceById,
};