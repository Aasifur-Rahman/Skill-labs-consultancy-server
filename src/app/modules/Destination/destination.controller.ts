// destination.controller.ts

import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { DestinationService } from "./destination.service";

const createDestination = catchAsync(async (req, res) => {
  const body = { ...req.body };

  // parse topInstitutes if form-data
  if (
    body.topInstitutes &&
    typeof body.topInstitutes === "string"
  ) {
    try {
      body.topInstitutes = JSON.parse(body.topInstitutes);
    } catch (error) {
      body.topInstitutes = [];
    }
  }

  const payload = {
    ...body,
    ...(req.file && { imageUrl: req.file.path }),
  };

  const destination =
    await DestinationService.createDestination(payload);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Destination created successfully",
    data: destination,
  });
});

const getAllDestinations = catchAsync(async (req, res) => {
  const destinations =
    await DestinationService.getAllDestinations(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Destinations fetched successfully",
    data: destinations,
  });
});

const getSingleDestination = catchAsync(async (req, res) => {
  const destination =
    await DestinationService.getSingleDestination(
      req.params.id as string
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Destination fetched successfully",
    data: destination,
  });
});

const updateDestination = catchAsync(async (req, res) => {
  const body = { ...req.body };

  if (
    body.topInstitutes &&
    typeof body.topInstitutes === "string"
  ) {
    try {
      body.topInstitutes = JSON.parse(body.topInstitutes);
    } catch (error) {
      body.topInstitutes = [];
    }
  }

  const payload = {
    ...body,
    ...(req.file && { imageUrl: req.file.path }),
  };

  const destination =
    await DestinationService.updateDestination(
      req.params.id as string,
      payload
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Destination updated successfully",
    data: destination,
  });
});

const deleteDestination = catchAsync(async (req, res) => {
  const destination =
    await DestinationService.deleteDestination(
      req.params.id as string
    );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Destination deleted successfully",
    data: destination,
  });
});

export const DestinationController = {
  createDestination,
  getAllDestinations,
  getSingleDestination,
  updateDestination,
  deleteDestination,
};