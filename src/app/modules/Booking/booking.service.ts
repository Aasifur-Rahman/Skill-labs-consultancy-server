import { AppError } from "../../errorHelpers/AppError";
import { IBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBooking =async(payload:Partial<IBooking>,userId:string)=>{
    const booking = await Booking.create({
        ...payload,
        user:userId
    })

    return booking;
}

const getAllBookings =async()=>{
    const bookings = await Booking.find({});

    if(!bookings.length){
        throw new AppError(404,"No booking found");
    }

    return bookings;
}

const updateStatus =async(bookingId:string,status:string)=>{
    const booking = await Booking.findById(bookingId);

    if(!booking){
        throw new AppError(404,"Booking not found");
    }
    return Booking.findByIdAndUpdate(bookingId,{ status },{ new:true });
}


const removeBooking =async(bookingId:string)=>{
    const booking = await Booking.findByIdAndDelete(bookingId);

    if(!booking){
        throw new AppError(404,"Booking not found");
    }

    return booking;
}

export const BookingService = {
    createBooking,
    getAllBookings,
    updateStatus,
    removeBooking
}