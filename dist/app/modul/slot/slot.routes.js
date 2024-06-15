"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsRoute = void 0;
const express_1 = __importDefault(require("express"));
const slot_controller_1 = require("./slot.controller");
const route = express_1.default.Router();
route.get("/availability", slot_controller_1.SlorControllers.gerAllSlots);
exports.SlotsRoute = route;
