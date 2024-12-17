"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsRoute = void 0;
const express_1 = __importDefault(require("express"));
const slot_controller_1 = require("./slot.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const route = express_1.default.Router();
// route.get("/availability", SlorControllers.gerAllSlots);
route.get("/", slot_controller_1.SlorControllers.gerAllSlots);
route.get("/lots-by-date", slot_controller_1.SlorControllers.gerSlotsDateById);
route.delete("/:id", (0, auth_1.default)(user_constants_1.USER_ROLE.admin), slot_controller_1.SlorControllers.deleteSlot);
exports.SlotsRoute = route;
