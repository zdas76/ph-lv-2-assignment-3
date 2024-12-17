import { Schema, model } from "mongoose";

export interface IReview extends Document {
  user: Schema.Types.ObjectId;
  feedback: string;
  rating: number;
  createdAt: Date;
}

const reviewchema = new Schema<IReview>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);

export const Reviews = model("Reviews", reviewchema);

