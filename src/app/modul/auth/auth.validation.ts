import { z } from "zod";

const loginUserValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string({ required_error: "Password is required" }),
  }),
});

export const AuthValidattion = {
  loginUserValidationSchema,
};
