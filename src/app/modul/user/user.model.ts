import { Schema, model } from "mongoose";
import { TUser } from "./user.interfact";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [5, "Name required minimum 5 characters"],
    },
    email: { type: String, required: [true, "Emain Required"], unique: true },
    password: {
      type: String,
      required: [true, "Password Required"],
    },
    phone: { type: String, required: [true, "Phone number is required"] },
    role: { type: String, enum: ["admin", "user"], default: "user", select: 0 },
    address: {
      type: String,
      minlength: [10, "Address required minimum 50 characters"],
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },

    timestamps: true,
  }
);

export const User = model("User", userSchema);
