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
exports.AuthService = void 0;
const user_model_1 = require("./../user/user.model");
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUserInToDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExists = yield user_model_1.User.findOne({ email: payLoad === null || payLoad === void 0 ? void 0 : payLoad.email });
    if (isUserExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This email already used");
    }
    payLoad.password = yield bcrypt_1.default.hash(payLoad.password, Number(config_1.default.saltRounds));
    const result = yield user_model_1.User.create(payLoad);
    return result;
});
const loginUser = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email: payLoad === null || payLoad === void 0 ? void 0 : payLoad.email });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This User is Not Found");
    }
    const match = yield bcrypt_1.default.compare(payLoad.password, user.password);
    if (!match) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "User Not Found");
    }
    const jwtPayload = {
        name: user.name,
        email: user.email,
        role: user.role,
        id: user.id,
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.access_secret, {
        expiresIn: "30m",
    });
    return {
        token: `Bearer ${token}`,
        user,
    };
});
exports.AuthService = {
    createUserInToDB,
    loginUser,
};
