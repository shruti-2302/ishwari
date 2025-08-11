// app/api/jobs/utils/connect.ts
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI! ||
  "mongodb+srv://sarthakkhare821:9lAGQlx9QVvIyxgu@cluster0.zkamyri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};
