import { z } from "zod";
import { vehicleType } from "./booking.constant";

const createBookignValidation = z.object({
  body: z.object({
    service: z.array(
      z.object({
        serviceId: z.string(),
        slotId: z.string(),
      })
    ),
    vehicleType: z.string(z.enum([...vehicleType] as [string, ...string[]])),
    vehicleBrand: z.string(),
    vehicleModel: z.string(),
    manufacturingYear: z.number(),
    registrationPlate: z.string(),
    total: z.number()
  }),
});

export const BookingValidation = {
  createBookignValidation,
};
