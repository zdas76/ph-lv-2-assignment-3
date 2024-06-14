import httpStatus from "http-status";
import sendResponse from "../../Utiles/sendResponst";
import catchAsync from "../../middleware/catchAsync";
import { ServiceofService } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const result = await ServiceofService.createServiceInToDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

const getAllService = catchAsync(async (req, res) => {
  const result = await ServiceofService.getAllServiceFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});

const getOneService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceofService.getOneServiceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service is retrieved successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ServiceofService.updateServiceToDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service is updated successfully",
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ServiceofService.deleteServiceToDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service is deleted successfully",
    data: result,
  });
});

export const ServiceControllers = {
  createService,
  getAllService,
  getOneService,
  updateService,
  deleteService,
};
