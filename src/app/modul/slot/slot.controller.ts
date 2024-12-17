import httpStatus from "http-status";
import catchAsync from "../../middleware/catchAsync";
import { SlotServices } from "./slot.service";
import sendResponse from "../../Utiles/sendResponst";

const gerAllSlots = catchAsync(async (req, res) => {
  
const serviceId = req.query.serviceId as string;
const date = req.query.date as string;

  const result = await SlotServices.getAllSlotsFromBD({serviceId, date});

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

const gerSlotsDateById = catchAsync(async (req, res) => {
  
const serviceId = req.query.serviceId as string;

  const result = await SlotServices.getSlotsDateByIdFromBD(serviceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});


const deleteSlot = catchAsync(async (req, res) => {
const id = req.params.id

  const result = await SlotServices.deleteSlotsFormDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots deleted successfully",
    data: result,
  });
});

export const SlorControllers = {
  gerAllSlots,
  deleteSlot,
  gerSlotsDateById
};
