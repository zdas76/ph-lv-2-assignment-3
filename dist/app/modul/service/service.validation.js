"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const createServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "Service name is required" }),
        description: zod_1.z.string(),
        price: zod_1.z.number(),
        duration: zod_1.z.number(),
    }),
});
const updateServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        price: zod_1.z.number().optional(),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.ServiceValidation = {
    createServiceValidation,
    updateServiceValidation,
};
