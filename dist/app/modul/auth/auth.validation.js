"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidattion = void 0;
const zod_1 = require("zod");
const loginUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string(),
        password: zod_1.z.string({ required_error: "Password is required" }),
    }),
});
exports.AuthValidattion = {
    loginUserValidationSchema,
};
