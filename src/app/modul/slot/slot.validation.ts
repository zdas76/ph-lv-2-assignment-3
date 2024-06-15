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
  body: z
    .object({
      serviceId: z.string(),
      date: z.string().date(),
      startTime: timeStringSchema,
      endTime: timeStringSchema,
    })
    .refine(
      (body) => {
        const start = new Date(`1970-01-01T${body.startTime}:00`);
        const end = new Date(`1970-01-01T${body.endTime}:00`);

        return end > start;
      },
      {
        message: "Start time should be before End time !  ",
      }
    ),
});

export const slotSchemaValidation = {
  slotSchemaZodValidation,
};
