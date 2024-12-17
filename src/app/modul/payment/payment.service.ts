
import { Booking } from "../booking/booking.model";
import { vefigyPayment } from "./payment.Utils";

const confirmationsService = async (transactionId: string, status:string) => {

  const verifyResponst = await vefigyPayment(transactionId);
  console.log(verifyResponst)

  let result;
  let message = "";

  if (verifyResponst && verifyResponst.pay_status === "success") {

    result = await Booking.findOneAndUpdate(
        {
          transactionId,
        },
        {
          paymentStatus: "Paid",
        }
      );

      message="Successfully Paid"
  }else {
    message= "Payment Failed"
  }

  return `<h1>Payment ${status}</h1>`;
  };

export const paymentService = {
  confirmationsService,
};
