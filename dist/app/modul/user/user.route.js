"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("./user.constants");
const router = express_1.default.Router();
router.get("/", user_controller_1.UserControllers.getAllUser);
router.get("/me", (0, auth_1.default)(user_constants_1.USER_ROLE.admin, user_constants_1.USER_ROLE.user), user_controller_1.UserControllers.getLgoinUser);
router.delete("/:id", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), user_controller_1.UserControllers.deleteUser);
router.put("/:id", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), user_controller_1.UserControllers.updateUser);
exports.UserRouter = router;
