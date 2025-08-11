import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect"; // Your DB connection utility
import HRService from "@/models//HrService"; // The model we defined

/**
 * @route   GET /api/hr-services/[id]
 * @desc    Get a single HR service by ID
 * @access  Public
 */
export async function GET(req, { params }) {
  try {
    await connectDB();
    const service = await HRService.findById(params.id);

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: service }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

/**
 * @route   PUT /api/hr-services/[id]
 * @desc    Update a service by ID
 * @access  Private (add auth)
 */
export async function PUT(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();
    const service = await HRService.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: service }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}

/**
 * @route   DELETE /api/hr-services/[id]
 * @desc    Delete a service by ID
 * @access  Private (add auth)
 */
export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const deletedService = await HRService.findByIdAndDelete(params.id);

    if (!deletedService) {
      return NextResponse.json(
        { success: false, message: "Service not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 }
    );
  }
}
