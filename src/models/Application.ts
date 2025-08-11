// app/api/jobs/models/Application.ts
import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
    name: String,
    email: String,
    phone: String,
    resumeLink: String,
    message: String,
  },
  { timestamps: true }
);

export const Application =
  mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);
