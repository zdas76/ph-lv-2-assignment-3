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
exports.ServiceControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponst_1 = __importDefault(require("../../../Utiles/sendResponst"));
const catchAsync_1 = __importDefault(require("../../../middleware/catchAsync"));
const service_service_1 = require("./service.service");
// Create Service
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceofService.createServiceInToDB(req.body);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service created successfully",
        data: result,
    });
}));
// Create Slots
const createSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceofService.createSlotInToDB(req.body);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slots created successfully",
        data: result,
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceofService.getAllServiceFromDB();
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service retrieved successfully",
        data: result,
    });
}));
const getOneService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.ServiceofService.getOneServiceFromDB(id);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service is retrieved successfully",
        data: result,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.ServiceofService.updateServiceToDB(id, req.body);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service is updated successfully",
        data: result,
    });
}));
const deleteService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.ServiceofService.deleteServiceToDB(id);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service is deleted successfully",
        data: result,
    });
}));
exports.ServiceControllers = {
    createService,
    createSlots,
    getAllService,
    getOneService,
    updateService,
    deleteService,
};
