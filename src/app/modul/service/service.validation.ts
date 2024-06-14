import { z } from "zod";

const createServiceValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Service name is required" }),
    description: z.string(),
    price: z.number(),
    duration: z.number(),
  }),
});

const updateServiceValidation = z.object({
  body: z.object({
    price: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ServiceValidation = {
  createServiceValidation,
  updateServiceValidation,
};
