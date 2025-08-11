// File: app/api/hr-services/route.js
// Handles getting all services and creating a new one.

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

// =================================================================
// File: app/api/hr-services/[id]/route.js
// Handles getting, updating, and deleting a single service by its ID.
// Note: The functions below would be in a SEPARATE file.
// =================================================================

/**
 * @route   GET /api/hr-services/[id]
 * @desc    Get a single HR service by ID
 * @access  Public
 */

/**
 * @route   PUT /api/hr-services/[id]
 * @desc    Update an HR service
 * @access  Private (authentication would be needed)
 */
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    let service = await HRService.findById(params.id);

    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }

    service = await HRService.findByIdAndUpdate(params.id, body, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validators on update
    });

    return NextResponse.json({ success: true, data: service }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
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

/**
 * @route   DELETE /api/hr-services/[id]
 * @desc    Delete an HR service
 * @access  Private (authentication would be needed)
 */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const service = await HRService.findById(params.id);

    if (!service) {
      return NextResponse.json(
        { success: false, error: "Service not found" },
        { status: 404 }
      );
    }

    await service.deleteOne(); // or HRService.findByIdAndDelete(params.id)

    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
