import { Schema, model, models } from "mongoose";

// Define the schema for the HR Service
const HRServiceSchema = new Schema(
  {
    icon: {
      type: String,
      required: [true, "Icon identifier is required."],
    },
    title: {
      type: String,
      required: [true, "Service title is required."],
      trim: true,
    },
    subtitle: {
      type: String,
      required: [true, "Service subtitle is required."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Service description is required."],
    },
    features: {
      type: [String],
      required: [true, "Service features are required."],
      default: [],
    },
    process: {
      type: [String],
      required: [true, "Our process steps are required."],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Check if the model already exists before defining it
const HRService = models.HRService || model("HRService", HRServiceSchema);

export default HRService;
