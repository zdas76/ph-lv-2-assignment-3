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
exports.SlotServices = void 0;
const slot_model_1 = require("./slot.model");
// const getAllSlotsFromBD = async (query: Record<string, unknown>) => {
//   const result = await Slots.find({
//     $or: [{ date: query.date }, { serviceId: query.serviceId }],
//   }).populate("serviceId");
//   return result;
// };
const getAllSlotsFromBD = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    let condition = {};
    if (payLoad.serviceId) {
        condition = { service: payLoad.serviceId, date: payLoad.date, isBooked: "available" };
    }
    const result = yield slot_model_1.Slots.find(condition).populate("service");
    return result;
});
const getSlotsDateByIdFromBD = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date();
    const result = yield slot_model_1.Slots.find({ service: serviceId, date: { $gte: date } });
    return result;
});
const deleteSlotsFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_model_1.Slots.findByIdAndDelete(id);
    return result;
});
exports.SlotServices = {
    getAllSlotsFromBD,
    deleteSlotsFormDB,
    getSlotsDateByIdFromBD
};
