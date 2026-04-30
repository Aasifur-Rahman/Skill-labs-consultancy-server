import { ICountry } from "./country.interface";
import { Country } from "./country.model";


const createCountry = async (payload: ICountry) => {
  return await Country.create(payload);
};

const getAllCountries = async (query: any) => {
  const filter: any = {};

  if (query.name) {
    filter.name = { $regex: query.name, $options: "i" };
  }

  return await Country.find(filter);
};

const getSingleCountry = async (id: string) => {
  return await Country.findById(id);
};

const updateCountry = async (id: string, payload: Partial<ICountry>) => {
  return await Country.findByIdAndUpdate(id, payload, { new: true });
};

const deleteCountry = async (id: string) => {
  return await Country.findByIdAndDelete(id);
};

export const CountryService = {
  createCountry,
  getAllCountries,
  getSingleCountry,
  updateCountry,
  deleteCountry
};