// app/api/jobs/models/Job.ts
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: String,
    company: String,
    location: String,
    type: String,
    experience: String,
    salary: String,
    category: String,
    posted: String,
    urgent: Boolean,
    description: String,
    requirements: [String],
    benefits: [String],
  },
  { timestamps: true }
);

export const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);
