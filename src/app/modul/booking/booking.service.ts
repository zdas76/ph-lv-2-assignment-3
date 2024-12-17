import { Slots } from './../slot/slot.model';
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TBookign } from "./booking.interfact";
import { Booking } from "./booking.model";
import mongoose from "mongoose";
import { User } from '../user/user.model';
import { initiatePayment } from '../payment/payment.Utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createBooking = async (payload: TBookign, customerId: any) => {

  const user = await User.findById(customerId);
  
    if(!user){
      throw new AppError(httpStatus.NOT_FOUND, "User not found!");
    }

  const session = await mongoose.startSession();

try {
    session.startTransaction();

    const serviceIds = payload?.service?.map(sId =>  sId.serviceId);

    const slotIds = payload?.service?.map(slId =>  slId.slotId);
   
    const checkSlotes = await Slots.find({
      _id: { $in: slotIds },
      service: {$in: serviceIds}
    });
     
        
    checkSlotes.map(slot => {
      if(slot.isBooked !== "available"){
        throw new AppError(
              httpStatus.NOT_ACCEPTABLE,
              ` slot is not avaible at this time. Please chose others`
            );
      }
    })
      
const updateSlotStatus = await Slots.updateMany(
      { _id: slotIds},
      { isBooked: "booked" },
      { session, new: true }
    );

    if (!updateSlotStatus) {
      throw new AppError(httpStatus.NOT_FOUND, "Failed to creat booking!");
    }
    
    
    const transactionId = `TXN-${Date.now()}`;
    payload.customer = customerId;
    payload.transactionId = transactionId;

    
    const newBooking = await Booking.create([payload], { session });

    if (!newBooking) {
      throw new AppError(httpStatus.NOT_FOUND, "Failed to creat booking!");
    }

   const paymentData = {
      transactionId,
      totalPrice: payload.total,
      customerName : user.name,
      customerEmail : user.email,
      customerPhone: user.phone,
      customerAddress: user.address
  }

  const paymentSession = await initiatePayment(paymentData)
   

    await session.commitTransaction();
    await session.endSession();

    return paymentSession;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: undefined | any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const getAllBooking = async () => {
  const result = await Booking.find().sort({createdAt: 'desc'}).populate("customer")
   
  return result;
};

const getMyBooking = async (id: string) => {
  console.log(id)
  const result = await Booking.find({ customer: id })
    .populate("customer")
    // .populate("serviceId")
    // .populate("slotId");

  return result;
};

export const BookingService = {
  createBooking,
  getAllBooking,
  getMyBooking,
};
