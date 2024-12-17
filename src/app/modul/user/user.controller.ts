import httpStatus from "http-status";
import catchAsync from "../../middleware/catchAsync";
import sendResponse from "../../Utiles/sendResponst";
import { UserService } from "./user.service";
import { Request, Response } from "express";
import { TAuthUser } from "../auth/auth.interfact";

const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUserFromBD();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrived successfully",
    data: result,
  });
});

const getLgoinUser = catchAsync(
  async (req: Request & { user?: TAuthUser | unknown }, res: Response) => {

      const { id } = req.user!;

    const result = await UserService.getOneUserFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrived successfuly",
      data: result,
    });
  }
);

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.deleteUserFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User delete successfuly",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserService.updateUsertoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User delete successfuly",
    data: result,
  });
});

export const UserControllers = {
  getAllUser,
  deleteUser,
  updateUser,
  getLgoinUser,
};
