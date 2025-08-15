import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connect";
import { Contact } from "@/models/Contact";

// POST: Create new contact info
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const contact = await Contact.create(body);
    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// GET: Get all contact entries
export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find();
    return NextResponse.json({ success: true, contacts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

// PUT: Update contact info by ID
export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, ...updateData } = await req.json();
    const updated = await Contact.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, contact: updated },
      { status: 200 }
    );
    // In your PUT function
  } catch (err) {
    // THIS IS THE MOST IMPORTANT STEP
    console.error("ERROR UPDATING CONTACT:", err);

    return NextResponse.json(
      {
        success: false,
        error: { message: err.message || "An unknown server error occurred." },
      },
      { status: 500 }
    );
  }
}
