import httpStatus from "http-status";
import sendResponse from "../../Utiles/sendResponst";
import catchAsync from "../../middleware/catchAsync";
import { AuthService } from "./auth.service";

const createUser = catchAsync(async (req, res) => {
  const result = await AuthService.createUserInToDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User registered successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await AuthService.loginUser(req.body);

  // const newData = data;

  res.status(httpStatus.OK).json({
    success: true,
    message: "User logged in successfully",
    token: result.token,
    data: result.user,
  });
});

export const AuthControllers = {
  createUser,
  loginUser,
};
