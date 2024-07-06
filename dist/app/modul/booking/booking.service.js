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
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const slot_model_1 = require("../slot/slot.model");
const booking_model_1 = require("./booking.model");
const service_model_1 = require("../service/service.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createBooking = (payload, customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const checkService = yield service_model_1.Service.findById(payload.serviceId);
        if (!checkService) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, `Service is not found`);
        }
        const sloteStatus = yield slot_model_1.Slots.findById(payload.slotId);
        if ((sloteStatus === null || sloteStatus === void 0 ? void 0 : sloteStatus.isBooked) === "booked") {
            throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, `${checkService.name} is not avaible at this time. Please chose others`);
        }
        const updateSlotStatus = yield slot_model_1.Slots.findOneAndUpdate({ _id: payload.slotId }, { isBooked: "booked" }, { session, new: true });
        if (!updateSlotStatus) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Failed to creat booking!");
        }
        payload.customer = customerId;
        // const data = (payload. payload.customer: customerId)
        const newBooking = yield booking_model_1.Booking.create([payload], { session });
        if (!newBooking) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Failed to creat booking!");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newBooking;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(error);
    }
});
const getAllBooking = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find()
        .populate("customer")
        .populate("serviceId")
        .populate("slotId");
    return result;
});
const getAllMyBooking = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.find({ customer: id })
        .populate("customer")
        .populate("serviceId")
        .populate("slotId");
    return result;
});
exports.BookingService = {
    createBooking,
    getAllBooking,
    getAllMyBooking,
};
