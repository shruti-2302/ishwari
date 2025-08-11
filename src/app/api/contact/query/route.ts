import { NextResponse } from "next/server";
import { Query } from "@/models/Query";
import { connectDB } from "@/utils/connect"; // Adjust your path to DB util

// Create new contact query
export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  try {
    const contact = await Query.create(data);
    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

// Get all contact queries
export async function GET() {
  await connectDB();

  try {
    const contacts = await Query.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
