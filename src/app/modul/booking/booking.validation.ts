import { z } from "zod";
import { vehicleType } from "./booking.constant";

const createBookignValidation = z.object({
  body: z.object({
    customer: z.string(),
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.string(z.enum([...vehicleType] as [string, ...string[]])),
    vehicleBrand: z.string(),
    vehicleModel: z.string(),
    manufacturingYear: z.number(),
    registrationPlate: z.string(),
  }),
});

export const BookingValidation = {
  createBookignValidation,
};
