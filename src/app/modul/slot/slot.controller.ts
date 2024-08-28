import httpStatus from "http-status";
import catchAsync from "../../middleware/catchAsync";
import { SlotServices } from "./slot.service";
import sendResponse from "../../Utiles/sendResponst";

const gerAllSlots = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await SlotServices.getAllSlotsFromBD(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

export const SlorControllers = {
  gerAllSlots,
};
