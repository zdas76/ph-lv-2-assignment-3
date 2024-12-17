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
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentService = void 0;
const booking_model_1 = require("../booking/booking.model");
const payment_Utils_1 = require("./payment.Utils");
const confirmationsService = (transactionId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyResponst = yield (0, payment_Utils_1.vefigyPayment)(transactionId);
    console.log(verifyResponst);
    let result;
    let message = "";
    if (verifyResponst && verifyResponst.pay_status === "success") {
        result = yield booking_model_1.Booking.findOneAndUpdate({
            transactionId,
        }, {
            paymentStatus: "Paid",
        });
        message = "Successfully Paid";
    }
    else {
        message = "Payment Failed";
    }
    return `<h1>Payment ${status}</h1>`;
});
exports.paymentService = {
    confirmationsService,
};
