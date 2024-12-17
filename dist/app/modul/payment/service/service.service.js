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
exports.ServiceofService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../../error/AppError"));
const service_model_1 = require("./service.model");
const slot_model_1 = require("../../slot/slot.model");
const service_utils_1 = require("./service.utils");
// import { sendImageToCloudinary } from "../../Utiles/imagetoCloudinary";
const createServiceInToDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const isExsistService = yield service_model_1.Service.findOne({ name: payLoad.name });
    if (isExsistService) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "This name already used");
    }
    const result = yield service_model_1.Service.create(payLoad);
    return result;
});
const getAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.find();
    return result;
});
const getOneServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findOne({ _id: id });
    return result;
});
const updateServiceToDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExists = yield service_model_1.Service.findOne({ _id: id });
    if (!isServiceExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Not found any product");
    }
    const result = yield service_model_1.Service.findOneAndUpdate({ _id: id }, payLoad, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteServiceToDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExists = yield service_model_1.Service.findOne({ _id: id });
    if (!isServiceExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service Not found");
    }
    const result = yield service_model_1.Service.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
const createSlotInToDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const isExsistService = yield service_model_1.Service.findOne({
        _id: payLoad.service,
        date: payLoad.date,
    });
    if (isExsistService) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `This slot are created of date`);
    }
    const slotDuration = 60;
    const slots = yield (0, service_utils_1.generateTimeSlots)(payLoad.startTime, payLoad.endTime, slotDuration);
    const data = slots.map((slot) => new Object({
        service: payLoad.service,
        date: payLoad.date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        isBooked: payLoad.isBooked,
    }));
    const result = yield slot_model_1.Slots.create(data);
    return result;
});
exports.ServiceofService = {
    createServiceInToDB,
    getAllServiceFromDB,
    getOneServiceFromDB,
    updateServiceToDB,
    deleteServiceToDB,
    createSlotInToDB,
};
