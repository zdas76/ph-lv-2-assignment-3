import express from "express";
import validationRequest from "../../middleware/validationRequest";
import { ServiceValidation } from "./service.validation";
import { ServiceControllers } from "./service.controllers";
import { slotSchemaValidation } from "../slot/slot.validation";

const routes = express.Router();

routes.post(
  "/",
  validationRequest(ServiceValidation.createServiceValidation),
  ServiceControllers.createService
);

routes.post(
  "/slots",
  validationRequest(slotSchemaValidation.slotSchemaZodValidation),
  ServiceControllers.createSlots
);

routes.get("/", ServiceControllers.getAllService);

routes.get("/:id", ServiceControllers.getOneService);

routes.put(
  "/:id",
  validationRequest(ServiceValidation.updateServiceValidation),
  ServiceControllers.updateService
);

routes.delete("/:id", ServiceControllers.deleteService);

export const ServiceRoutes = routes;
