const mongoose = require("mongoose");

const adviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [100, "Title cannot be more than 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minLength: [10, "Content must be at least 10 characters long"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // Assuming "User" model exists
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Advice", adviceSchema);
