import mongoose, { Schema } from "mongoose";

const ApplicationSchema = new Schema(
  {
    // Personal Information
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required."],
      trim: true,
    },

    // Job & Resume Information
    jobTitle: {
      type: String,
      required: [true, "Job title is required."],
      trim: true,
    },
    resumeLink: {
      type: String,
      required: [true, "A link to your resume is required."],
      trim: true,
    },
    description: {
      type: String,
      trim: true, // Optional field
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields
    timestamps: true,
  }
);

// Check if the model is already defined before defining it
export const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
