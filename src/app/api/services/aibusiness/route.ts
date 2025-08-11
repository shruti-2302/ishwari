import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { Service } from "@/models/Service";

// CREATE a new service
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const service = await Service.create(body);
    return NextResponse.json({ success: true, service }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// READ all services
export async function GET() {
  try {
    await connectDB();
    const services = await Service.find();
    return NextResponse.json({ success: true, services }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// UPDATE a service by ID
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...updateData } = await req.json();
    const updated = await Service.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, service: updated },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// DELETE a service by ID
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();
    const deleted = await Service.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Service deleted" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
