import { Request, Response } from "express";
import catchAsync from "../../middleware/catchAsync"
import sendResponse from "../../Utiles/sendResponst";
import httpStatus from "http-status";
import { ReviewsService } from "./review.service";
import { TAuthUser } from "../auth/auth.interfact";


const createReviews = catchAsync(async(req:Request & {user?:TAuthUser | unknown}, res:Response)=> {
    
    const { feedback, rating } = req.body;
    const user= req.user;
    

    const result  = await ReviewsService.crateReviewsToDB(feedback, rating, user as TAuthUser)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reviews created successfully",
        data: result,
      });

})

const getAllReviews = catchAsync(async(req:Request, res:Response)=> {
    
    const result  = await ReviewsService.getAllReviews()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Reviews retrived successfully",
        data: result,
      });

})


export const ReviewsControllers = {
    createReviews,
    getAllReviews
}