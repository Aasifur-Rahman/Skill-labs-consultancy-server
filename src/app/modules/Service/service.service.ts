import { IService } from "./service.interface";
import { Service } from "./service.model";

const createService = async (payload: IService) => {
  const service = await Service.create(payload);

  return service;
};

const getAllServices = async () => {
  const services = await Service.find({});

  return services;
};

const getServiceById = async (id: string) => {
  const service = await Service.findById(id);

  return service;
};

export const ServiceService = {
  createService,
  getAllServices,
  getServiceById,
};