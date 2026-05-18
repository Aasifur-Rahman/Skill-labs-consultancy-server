// destination.service.ts

import { IDestination } from "./destination.interface";
import { Destination } from "./destination.model";


const createDestination = async (payload: IDestination) => {
  return await Destination.create(payload);
};

const getAllDestinations = async (query: any) => {
  const filter: any = {
    isDeleted: false,
  };

  if (query.country) {
    filter.country = {
      $regex: query.country,
      $options: "i",
    };
  }

  return await Destination.find(filter);
};

const getSingleDestination = async (id: string) => {
  return await Destination.findById(id);
};

const updateDestination = async (
  id: string,
  payload: Partial<IDestination>
) => {
  return await Destination.findByIdAndUpdate(id, payload, {
    new: true,
  });
};

const deleteDestination = async (id: string) => {
  return await Destination.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const DestinationService = {
  createDestination,
  getAllDestinations,
  getSingleDestination,
  updateDestination,
  deleteDestination,
};