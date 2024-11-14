import mongoose from "mongoose";

const postItemSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    title: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      default: null,
    },
    avatar: {
      type: String,
      default: null,
    },
    author: {
      type: String,
      default: null,
    },
    top: {
      type: boolean,
      default: false,
    },
    trending: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const postItem =
  mongoose.models.PostItem || mongoose.model("PostItem", postItemSchema);

export default postItem;
