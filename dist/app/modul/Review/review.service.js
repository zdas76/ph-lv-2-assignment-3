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
exports.ReviewsService = void 0;
const review_modal_1 = require("./review.modal");
const crateReviewsToDB = (feedback, rating, user) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        user: user.id,
        feedback,
        rating,
    };
    const result = yield review_modal_1.Reviews.create(data);
    return result;
});
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = (yield review_modal_1.Reviews.find().populate('user').sort({ createdAt: -1 }));
    const totalReviews = yield review_modal_1.Reviews.countDocuments();
    const averageRating = yield review_modal_1.Reviews.aggregate([
        { $group: { _id: null, average: { $avg: "$rating" } } },
    ]);
    return {
        reviews,
        totalReviews,
        averageRating
    };
});
exports.ReviewsService = {
    crateReviewsToDB,
    getAllReviews,
};
