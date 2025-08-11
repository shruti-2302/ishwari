import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { Application } from "@/models/Application";

// CREATE Application (Apply for a Job)
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const application = await Application.create(body);
    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// GET all Applications or filter by jobId
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    const filter = jobId ? { jobId } : {};
    const applications = await Application.find(filter);

    return NextResponse.json({ success: true, applications }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// UPDATE Application by _id
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...updateData } = await req.json();

    const updated = await Application.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, application: updated },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// DELETE Application by _id
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    const deleted = await Application.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Application deleted" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
