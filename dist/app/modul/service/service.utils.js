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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTimeSlots = void 0;
const generateTimeSlots = (startTime, endTime, slotDuration) => __awaiter(void 0, void 0, void 0, function* () {
    if (!startTime || !endTime || slotDuration <= 0) {
        throw new Error("Invalid input parameters");
    }
    const slots = [];
    let start = new Date(`1970-01-01T${startTime}:00`);
    let end = new Date(`1970-01-01T${endTime}:00`);
    while (start < end) {
        let endSlot = new Date(start.getTime() + slotDuration * 60000);
        let startTimeFormate = start.toTimeString().slice(0, 5);
        let endTimeFormate = endSlot.toTimeString().slice(0, 5);
        slots.push({ startTime: startTimeFormate, endTime: endTimeFormate });
        start = endSlot;
    }
    return slots;
});
exports.generateTimeSlots = generateTimeSlots;
