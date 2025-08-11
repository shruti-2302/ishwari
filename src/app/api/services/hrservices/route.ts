import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect"; // Your DB connection utility
import HRService from "@/models/HrService"; // The model we just defined

/**
 * @route   GET /api/hr-services
 * @desc    Get all HR services
 * @access  Public
 */
export async function GET() {
  try {
    await connectDB();
    const services = await HRService.find({});
    return NextResponse.json(
      { success: true, data: services },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

/**
 * @route   POST /api/hr-services
 * @desc    Create a new HR service
 * @access  Private (you would add authentication middleware here)
 */
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const service = await HRService.create(body);
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error) {
    console.error("API Error:", error);
    // Handle potential validation errors from Mongoose
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return NextResponse.json(
        { success: false, error: errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
