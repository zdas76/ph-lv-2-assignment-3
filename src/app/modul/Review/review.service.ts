
import { TAuthUser } from "../auth/auth.interfact";
import { Reviews } from "./review.modal";

const crateReviewsToDB = async (
  feedback: string,
  rating: number,
  user: TAuthUser
) => {

const data = {
    user: user.id,
    feedback,
    rating,
  };
  const result = await Reviews.create(data);

  return result;
};

const getAllReviews = async () => {
  const reviews = (await Reviews.find().populate('user').sort({ createdAt: -1 }));
  const totalReviews = await Reviews.countDocuments();
  const averageRating = await Reviews.aggregate([
    { $group: { _id: null, average: { $avg: "$rating" } } },
  ]);
  return {
    reviews,
    totalReviews,
    averageRating
  }
};

export const ReviewsService = {
  crateReviewsToDB,
  getAllReviews,
};
