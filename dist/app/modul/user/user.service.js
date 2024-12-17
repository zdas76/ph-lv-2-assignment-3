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
exports.UserService = void 0;
const user_model_1 = require("./user.model");
const getAllUserFromBD = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const deleteUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findByIdAndDelete({ _id: id });
    return result;
});
const getOneUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findById(id);
    return result;
});
const updateUsertoDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    let newRole;
    if ((payLoad === null || payLoad === void 0 ? void 0 : payLoad.role) === "admin") {
        newRole = "user";
    }
    else {
        newRole = "admin";
    }
    const result = yield user_model_1.User.findByIdAndUpdate({ _id: id }, { role: newRole }, { new: true });
    return result;
});
exports.UserService = {
    getAllUserFromBD,
    getOneUserFromDB,
    updateUsertoDB,
    deleteUserFromDB,
};
