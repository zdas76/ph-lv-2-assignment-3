"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const auth_validation_1 = require("./auth.validation");
const user_validation_1 = require("../user/user.validation");
const routes = express_1.default.Router();
routes.post("/login", (0, validationRequest_1.default)(auth_validation_1.AuthValidattion.loginUserValidationSchema), auth_controller_1.AuthControllers.loginUser);
routes.post("/signup", (0, validationRequest_1.default)(user_validation_1.UserValidattion.createUserValidationSchema), auth_controller_1.AuthControllers.createUser);
exports.AuthRouter = routes;
