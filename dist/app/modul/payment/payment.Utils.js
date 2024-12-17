"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vefigyPayment = exports.initiatePayment = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../../config"));
const initiatePayment = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(config_1.default.PAYMENT_URL, {
        store_id: config_1.default.STORE_ID,
        signature_key: config_1.default.SIGNATURE_KEY,
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
});
exports.initiatePayment = initiatePayment;
const vefigyPayment = (transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(config_1.default.PAYMENT_VERIFY_RUL, {
        params: {
            store_id: config_1.default.STORE_ID,
            signature_key: config_1.default.SIGNATURE_KEY,
            type: "json",
            request_id: transactionId
        },
    });
    return response.data;
});
exports.vefigyPayment = vefigyPayment;
