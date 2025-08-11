import mongoose from "mongoose";

export interface IService {
  icon: string; // Store icon name or type as a string
  title: string;
  image: string;
  subtitle: string;
  fullDescription: string;
  features: string[];
}

const ServiceSchema = new mongoose.Schema<IService>(
  {
    icon: String,
    title: String,
    image: String,
    subtitle: String,
    fullDescription: String,
    features: [String],
  },
  { timestamps: true }
);

export const Service =
  mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);
