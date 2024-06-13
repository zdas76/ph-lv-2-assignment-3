import { z } from "zod";
import { vehicleType } from "./booking.constant";

const bookignValidation = z.object({
  body: z.object({
    customer: z.string(),
    service: z.string(),
    slot: z.string(),
    vehicleType: z.array(z.enum([...vehicleType] as [string, ...string[]])),
  }),
  vehicleBrand: z.string(),
  vehicleModel: z.string(),
  manufacturingYear: z.date(),
  registrationPlate: z.string(),
});
