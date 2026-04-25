import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BookingService } from "./booking.service";

const createBooking = catchAsync(async (req:Request, res:Response) => {
    const booking = await BookingService.createBooking(req.body, "69ec74c6a8085dcee9aa6694");
    console.log(booking);
    
     sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Booking created successfully",
        data: booking,
      });
});

const getAllBookings = catchAsync(async (req:Request, res:Response) => {
    const bookings = await BookingService.getAllBookings();
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Bookings fetched successfully",
        data: bookings,
      });
});

const updateStatus = catchAsync(async (req:Request, res:Response) => {
    const booking = await BookingService.updateStatus(req.params.id as string, req.body.status);
    console.log(booking);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Booking status updated successfully",
        data: booking,
      });
});

const removeBooking = catchAsync(async (req:Request, res:Response) => {
    const booking = await BookingService.removeBooking(req.params.id as string);
    
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Booking removed successfully",
        data: booking,
      });
});


export const BookingController = {
    createBooking,
    getAllBookings,
    updateStatus,
    removeBooking
}