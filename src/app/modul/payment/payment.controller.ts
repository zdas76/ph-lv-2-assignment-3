import { Request, Response } from "express"
import { paymentService } from "./payment.service"

const confirmationController = async (req:Request, res: Response) => {
const {transactionId, status } = req.query
    const result = await paymentService.confirmationsService(transactionId as string, status as string)

    res.redirect('http://localhost:5173/');
    
    res.send(result)
}


export const paymentController = {
    confirmationController
}