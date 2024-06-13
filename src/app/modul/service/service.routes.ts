import express from "express";
import validationRequest from "../../middleware/validationRequest";
import { ServiceValidation } from "./service.validation";
import { ServiceControllers } from "./service.controllers";

const routes = express.Router();

routes.post(
  "/",
  validationRequest(ServiceValidation.createServiceValidation),
  ServiceControllers.createService
);

routes.get("/", ServiceControllers.getAllService);

routes.get("/:id", ServiceControllers.getOneService);

routes.put(
  "/:id",
  validationRequest(ServiceValidation.updateServiceValidation),
  ServiceControllers.updateService
);

export const ServiceRoutes = routes;
