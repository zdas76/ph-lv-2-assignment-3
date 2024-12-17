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
exports.UserControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../middleware/catchAsync"));
const sendResponst_1 = __importDefault(require("../../Utiles/sendResponst"));
const user_service_1 = require("./user.service");
const getAllUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getAllUserFromBD();
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Users retrived successfully",
        data: result,
    });
}));
const getLgoinUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.user;
    const result = yield user_service_1.UserService.getOneUserFromDB(id);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User retrived successfuly",
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.deleteUserFromDB(id);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User delete successfuly",
        data: result,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.UserService.updateUsertoDB(id, req.body);
    (0, sendResponst_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User delete successfuly",
        data: result,
    });
}));
exports.UserControllers = {
    getAllUser,
    deleteUser,
    updateUser,
    getLgoinUser,
};
