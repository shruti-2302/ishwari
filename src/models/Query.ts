import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    inquiryType: {
      type: String,
      enum: ["general", "support", "partnership", "career"],
      default: "general",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite upon hot reload in development
export const Query =
  mongoose.models.Query || mongoose.model("Query", ContactSchema);
