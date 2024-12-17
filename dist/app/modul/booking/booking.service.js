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
exports.BookingService = void 0;
const slot_model_1 = require("./../slot/slot.model");
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const booking_model_1 = require("./booking.model");
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("../user/user.model");
const payment_Utils_1 = require("../payment/payment.Utils");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createBooking = (payload, customerId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const user = yield user_model_1.User.findById(customerId);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found!");
    }
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const serviceIds = (_a = payload === null || payload === void 0 ? void 0 : payload.service) === null || _a === void 0 ? void 0 : _a.map(sId => sId.serviceId);
        const slotIds = (_b = payload === null || payload === void 0 ? void 0 : payload.service) === null || _b === void 0 ? void 0 : _b.map(slId => slId.slotId);
        const checkSlotes = yield slot_model_1.Slots.find({
            _id: { $in: slotIds },
            service: { $in: serviceIds }
        });
        checkSlotes.map(slot => {
            if (slot.isBooked !== "available") {
                throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, ` slot is not avaible at this time. Please chose others`);
            }
        });
        const updateSlotStatus = yield slot_model_1.Slots.updateMany({ _id: slotIds }, { isBooked: "booked" }, { session, new: true });
        if (!updateSlotStatus) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Failed to creat booking!");
        }
        const transactionId = `TXN-${Date.now()}`;
        payload.customer = customerId;
        payload.transactionId = transactionId;
        const newBooking = yield booking_model_1.Booking.create([payload], { session });
        if (!newBooking) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Failed to creat booking!");
        }
        const paymentData = {
            transactionId,
            totalPrice: payload.total,
            customerName: user.name,
            customerEmail: user.email,
            customerPhone: user.phone,
            customerAddress: user.address
        };
        const paymentSession = yield (0, payment_Utils_1.initiatePayment)(paymentData);
        yield session.commitTransaction();
        yield session.endSession();
        return paymentSession;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const getAllBooking = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find().sort({ createdAt: 'desc' }).populate("customer");
    return result;
});
const getMyBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield booking_model_1.Booking.find({ customer: id })
        .populate("customer");
    // .populate("serviceId")
    // .populate("slotId");
    return result;
});
exports.BookingService = {
    createBooking,
    getAllBooking,
    getMyBooking,
};
