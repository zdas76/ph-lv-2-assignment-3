import { z } from "zod";
import { IsBooked } from "./slot.constant";

const timeStringSchema = z.string().refine(
  (time) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
    return regex.test(time);
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  }
);

const slotSchemaZodValidation = z.object({
  body: z.object({
    service: z.string(),
    date: z.date(),
    startTime: timeStringSchema,
    endTime: timeStringSchema,
    isBooked: z.array(z.enum({ ...IsBooked } as [string, ...string[]])),
  }),
});

export const slotSchemaValidation = {
  slotSchemaZodValidation,
};
