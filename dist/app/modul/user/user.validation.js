"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidattion = void 0;
const zod_1 = require("zod");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string(),
        password: zod_1.z.string(),
        phone: zod_1.z.string(),
        address: zod_1.z.string(),
    }),
});
exports.UserValidattion = {
    createUserValidationSchema,
};
