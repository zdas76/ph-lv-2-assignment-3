"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const service_validation_1 = require("./service.validation");
const service_controllers_1 = require("./service.controllers");
const slot_validation_1 = require("../slot/slot.validation");
const routes = express_1.default.Router();
routes.post("/", (0, validationRequest_1.default)(service_validation_1.ServiceValidation.createServiceValidation), service_controllers_1.ServiceControllers.createService);
routes.post("/slots", (0, validationRequest_1.default)(slot_validation_1.slotSchemaValidation.slotSchemaZodValidation), service_controllers_1.ServiceControllers.createSlots);
routes.get("/", service_controllers_1.ServiceControllers.getAllService);
routes.get("/:id", service_controllers_1.ServiceControllers.getOneService);
routes.put("/:id", (0, validationRequest_1.default)(service_validation_1.ServiceValidation.updateServiceValidation), service_controllers_1.ServiceControllers.updateService);
routes.delete("/:id", service_controllers_1.ServiceControllers.deleteService);
exports.ServiceRoutes = routes;
