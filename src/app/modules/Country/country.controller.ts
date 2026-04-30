import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { CountryService } from "./country.services";

const createCountry = catchAsync(async (req, res) => {
  const body = { ...req.body };
  
  if (body.institutes && typeof body.institutes === "string") {
     try {
    body.institutes = JSON.parse(body.institutes);
  } catch (e) {
    body.institutes = [body.institutes];
  };
  }

  const payload = {
    ...body,
    ...(req.file && { image: req.file.path }),
  };

  console.log(payload);

  const country = await CountryService.createCountry(payload);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Country created successfully",
    data: country,
  });
});
const getAllCountries = catchAsync(async (req, res) => {
    console.log(req.query)
    const countries = await CountryService.getAllCountries(req.query);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Countries fetched successfully",
        data: countries,
    });
})

const getSingleCountry = catchAsync(async (req, res) => {
    const country = await CountryService.getSingleCountry(req.params.id as string);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Country fetched successfully",
        data: country,
    });
})

const updateCountry = catchAsync(async (req, res) => {
    const payload ={
        ...req.body,
        image: req.file?.path
    } 
    const country = await CountryService.updateCountry(req.params.id as string, payload);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Country updated successfully",
        data: country,
    });
})

const deleteCountry = catchAsync(async (req, res) => {
    const country = await CountryService.deleteCountry(req.params.id as string);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Country deleted successfully",
        data: country,
    });
})

export const CountryController = {
    createCountry,
    getAllCountries,
    getSingleCountry,
    updateCountry,
    deleteCountry
}