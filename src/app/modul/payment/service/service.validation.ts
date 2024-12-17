import { z } from "zod";

const createServiceValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Service name is required" }),
    description: z.string(),
    price: z.number(),
    duration: z.number(),
    images: z.string().optional(),
  }),
});

const updateServiceValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    image: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const ServiceValidation = {
  createServiceValidation,
  updateServiceValidation,
};
