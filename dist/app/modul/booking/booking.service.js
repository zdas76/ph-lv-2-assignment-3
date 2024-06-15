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
const service_model_1 = require("../service/service.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createBooking = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const checkService = yield service_model_1.Service.findById(payload.serviceId);
    if (!checkService) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, `Service is not found`);
    }
    const sloteStatus = yield slot_model_1.Slots.findById(payload.slotId);
    if ((sloteStatus === null || sloteStatus === void 0 ? void 0 : sloteStatus.isBooked) === "booked") {
        throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, `${checkService.name} is not avaible at this time. Please chose others`);
    }
    const session = yield mongoose_1.default.startSession();
    try {
    }
    catch (error) { }
    //   const result = await Booking.create(payload);
    //   return result;
});
exports.BookingService = {
    createBooking,
};
