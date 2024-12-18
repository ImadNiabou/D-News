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
      type: Boolean,
      default: false,
    },
    hot: {},
    popular: {
      type: Boolean,
      default: false,
    },
    featured: {},
    trending: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const postItem =
  mongoose.models.PostItem || mongoose.model("PostItem", postItemSchema);

export default postItem;
