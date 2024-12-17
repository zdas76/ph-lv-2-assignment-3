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
exports.SlorControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../middleware/catchAsync"));
const slot_service_1 = require("./slot.service");
const sendResponst_1 = __importDefault(require("../../Utiles/sendResponst"));
const gerAllSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.query.serviceId;
    const date = req.query.date;
    const result = yield slot_service_1.SlotServices.getAllSlotsFromBD({ serviceId, date });
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Available slots retrieved successfully",
        data: result,
    });
}));
const gerSlotsDateById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceId = req.query.serviceId;
    const result = yield slot_service_1.SlotServices.getSlotsDateByIdFromBD(serviceId);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Available slots retrieved successfully",
        data: result,
    });
}));
const deleteSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield slot_service_1.SlotServices.deleteSlotsFormDB(id);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slots deleted successfully",
        data: result,
    });
}));
exports.SlorControllers = {
    gerAllSlots,
    deleteSlot,
    gerSlotsDateById
};
