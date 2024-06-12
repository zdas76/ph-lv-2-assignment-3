import { string, z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["admin", "user"]),
    address: z.string(),
  }),
});

export const UserValidattion = {
  createUserValidationSchema,
};
