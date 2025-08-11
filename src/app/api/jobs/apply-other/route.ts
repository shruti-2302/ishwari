import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect"; // Assuming you have this utility
import { Application } from "@/models/Application"; // Corrected import path

export async function POST(req) {
  try {
    // 1. Connect to the database
    await connectDB();

    // 2. Parse the request body
    const body = await req.json();

    // 3. Validate required fields (basic validation)
    const { name, email, phone, jobTitle, resumeLink } = body;
    if (!name || !email || !phone || !jobTitle || !resumeLink) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 4. Create a new application document
    const newApplication = await Application.create(body);

    // 5. Return a success response
    return NextResponse.json(
      { success: true, data: newApplication },
      { status: 201 } // 201 Created
    );
  } catch (error) {
    console.error("API Error:", error);
    // Handle potential validation errors from Mongoose
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 } // 400 Bad Request
      );
    }
    // Handle other server errors
    return NextResponse.json(
      { success: false, error: "Server Error: " + error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    // 1. Connect to the database
    await connectDB();

    // 2. Fetch all applications, sorting by the most recent
    const applications = await Application.find({}).sort({ createdAt: -1 });

    // 3. Return the applications
    return NextResponse.json(
      { success: true, count: applications.length, data: applications },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error: " + error.message },
      { status: 500 }
    );
  }
}
