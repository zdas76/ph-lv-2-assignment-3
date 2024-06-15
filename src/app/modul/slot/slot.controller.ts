import httpStatus from "http-status";
import catchAsync from "../../middleware/catchAsync";
import { SlotServices } from "./slot.service";
import sendResponse from "../../Utiles/sendResponst";

const gerAllSlots = catchAsync(async (req, res) => {
  const result = await SlotServices.getAllSlotsFromBD();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

export const SlorControllers = {
  gerAllSlots,
};
