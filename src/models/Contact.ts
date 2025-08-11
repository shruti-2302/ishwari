import mongoose from "mongoose";

const OfficeLocationSchema = new mongoose.Schema({
  city: String,
  address: String,
  phone: String,
  email: String,
  hours: String,
  isMain: Boolean,
});

const ContactMethodSchema = new mongoose.Schema({
  icon: String, // Store icon name or type as string
  title: String,
  description: String,
  action: String,
  value: String,
  available: String,
});

const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const SocialLinkSchema = new mongoose.Schema({
  icon: String, // Store icon name or type as string
  name: String,
  url: String,
});

const ContactSchema = new mongoose.Schema(
  {
    officeLocations: [OfficeLocationSchema],
    contactMethods: [ContactMethodSchema],
    faqs: [FAQSchema],
    socialLinks: [SocialLinkSchema],
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
