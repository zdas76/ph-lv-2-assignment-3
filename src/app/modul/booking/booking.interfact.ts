import { Types } from "mongoose";

export type TBookign = {
  customer: Types.ObjectId;
  service: [{ serviceId: Types.ObjectId; slotId: Types.ObjectId }];
  vehicleType:
    | "car"
    | "SUV"
    | "van"
    | "motorcycle"
    | "bus"
    | "electricVehicle"
    | "hybridVehicle"
    | "bicycle"
    | "tractor";
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  total: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  paymentStatus: 'Pending' | 'Paid' | 'Failed';
  transactionId: string;
};
