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
        image: zod_1.z.string().optional(),
    }),
});
const updateServiceValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        image: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.ServiceValidation = {
    createServiceValidation,
    updateServiceValidation,
};
