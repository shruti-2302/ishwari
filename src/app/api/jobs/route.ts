// app/api/jobs/addJob/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { Job } from "@/models/Job";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newJob = await Job.create(body);
    return NextResponse.json({ success: true, job: newJob }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const filters: any = {};
    if (searchParams.get("location"))
      filters.location = searchParams.get("location");
    if (searchParams.get("experience"))
      filters.experience = searchParams.get("experience");
    if (searchParams.get("category"))
      filters.category = searchParams.get("category");

    const jobs = await Job.find(filters);
    return NextResponse.json({ success: true, jobs }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...updateData } = await req.json();
    const updated = await Job.findByIdAndUpdate(id, updateData, { new: true });
    return NextResponse.json({ success: true, job: updated }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();
    await Job.findByIdAndDelete(id);
    return NextResponse.json(
      { success: true, message: "Deleted" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
