import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String },
    company: { type: String },
    message: { type: String, required: true },
    image: { type: String }, // optional URL to the person's photo
    rating: { type: Number, default: 5 }, // Optional, 1–5 stars
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
