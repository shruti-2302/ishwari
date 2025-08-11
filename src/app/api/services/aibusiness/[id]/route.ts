import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { Service } from "@/models/Service";

interface Params {
  params: {
    id: string;
  };
}

// GET single service by ID
export async function GET(req: Request, { params }: Params) {
  try {
    await connectDB();
    const { id } = params;

    const service = await Service.findById(id);

    if (!service) {
      return NextResponse.json({ success: false, message: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, service }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
