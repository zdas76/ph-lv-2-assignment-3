/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import config from "../../config";



export const initiatePayment = async (payLoad: any) => {
  const response = await axios.post(config.PAYMENT_URL!, {
    store_id: config.STORE_ID,
    signature_key: config.SIGNATURE_KEY,
    tran_id: payLoad.transactionId,
    // success_url: `http://localhost:5000/api/v1/payment/confirmation?transactionId=${payLoad.transactionId}&status=success`,
    // fail_url: `http://localhost:5000/api/v1/payment/confirmation?status=failed`,
    success_url: `https://assignment-3backend.vercel.app/api/v1/payment/confirmation?transactionId=${payLoad.transactionId}&status=success`,
    fail_url: `https://assignment-3backend.vercel.app/api/v1/payment/confirmation?status=failed`,
    cancel_url: "http://localhost:5173",
    amount: payLoad.totalPrice,
    currency: "BDT",
    desc: "Merchant Registration Payment",
    cus_name: payLoad.customerName,
    cus_email: payLoad.customerEmail,
    cus_add1: payLoad.customerAddress,
    cus_add2: "Mohakhali DOHS",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1206",
    cus_country: "Bangladesh",
    cus_phone: payLoad.customerPhone,
    type: "json",
  });

  console.log(response);
  return response.data;
};

export const vefigyPayment = async (transactionId:string) => {
  const response = await axios.get(config.PAYMENT_VERIFY_RUL!, {
    params: {
      store_id: config.STORE_ID,
      signature_key: config.SIGNATURE_KEY,
      type: "json",
      request_id: transactionId
    },
  });
  return response.data
};
