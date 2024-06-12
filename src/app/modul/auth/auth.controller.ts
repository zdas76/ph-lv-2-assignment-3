import httpStatus from "http-status";
import sendResponse from "../../Utiles/sendResponst";
import catchAsync from "../../middleware/catchAsync";
import { AuthService } from "./auth.service";

const createUser = catchAsync(async (req, res) => {
  const result = await AuthService.createUserInToDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User create succesfully",
    data: result,
  });
});

export const AotuControllers = {
  createUser,
};
