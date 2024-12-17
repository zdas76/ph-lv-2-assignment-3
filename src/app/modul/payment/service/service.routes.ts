import express from "express";
import validationRequest from "../../../middleware/validationRequest";
import { ServiceValidation } from "./service.validation";
import { ServiceControllers } from "./service.controllers";
import { slotSchemaValidation } from "../../slot/slot.validation";
import auth from "../../../middleware/auth";
import { USER_ROLE } from "../../user/user.constants";

const routes = express.Router();

routes.post(
  "/",
  auth(USER_ROLE.admin),
  validationRequest(ServiceValidation.createServiceValidation),
  ServiceControllers.createService
);

routes.post(
  "/slots",
  auth(USER_ROLE.admin),
  validationRequest(slotSchemaValidation.slotSchemaZodValidation),
  ServiceControllers.createSlots
);

routes.get("/", ServiceControllers.getAllService);


routes.get("/:id", ServiceControllers.getOneService);

routes.put(
  "/:id",
  auth(USER_ROLE.admin),
  validationRequest(ServiceValidation.updateServiceValidation),
  ServiceControllers.updateService
);

routes.delete("/:id", auth(USER_ROLE.admin), ServiceControllers.deleteService);

export const ServiceRoutes = routes;
