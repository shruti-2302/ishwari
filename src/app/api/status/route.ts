import { NextResponse } from "next/server";
import {connectDB} from "@/utils/connect";
import BooleanValue from "@/models/Boolean";

// POST API: Add a Boolean value
export async function POST(req: Request) {
  await connectDB();
  const data = await req.json(); // { isActive: true }

  try {
    if (typeof data.isActive !== "boolean") {
      return NextResponse.json({ success: false, error: "isActive must be true or false" }, { status: 400 });
    }

    const booleanEntry = await BooleanValue.create({ isActive: data.isActive });
    return NextResponse.json({ success: true, data: booleanEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

// GET API: Fetch all Boolean values
export async function GET() {
  await connectDB();

  try {
    const values = await BooleanValue.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: values });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
