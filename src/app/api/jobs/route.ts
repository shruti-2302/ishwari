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

    // --- Text Search ---
    const search = searchParams.get("search");
    if (search) {
      filters.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    // --- Simple String Filters ---
    if (searchParams.get("location"))
      filters.location = searchParams.get("location");
    if (searchParams.get("experience"))
      filters.experience = searchParams.get("experience");
    if (searchParams.get("category"))
      filters.category = searchParams.get("category");
    // NOTE: Your model has a 'type' field. The filter below assumes 'workMode' corresponds to 'type'.
    // If they are different, you may need to add a 'workMode' field to your model.
    if (searchParams.get("workMode"))
      filters.type = searchParams.get("workMode");

    // --- Salary String Filter (Using Regex) ---
    const salary = searchParams.get("salary");
    if (salary) {
      let salaryRegex;
      switch (salary) {
        case "0-5":
          // Matches any single digit from 0 to 5.
          salaryRegex = /\b[0-5]\b/;
          break;
        case "5-10":
          // Matches any single digit from 5 to 9 OR the number 10.
          salaryRegex = /\b([5-9]|10)\b/;
          break;
        case "10-20":
          // Matches any number from 10-19 (1 followed by a digit) OR the number 20.
          salaryRegex = /\b(1\d|20)\b/;
          break;
        case "20+":
          // Matches any number from 20-99 OR any number with 3 or more digits.
          salaryRegex = /\b([2-9]\d|\d{3,})\b/;
          break;
      }
      if (salaryRegex) {
        filters.salary = { $regex: salaryRegex };
      }
    }

    const jobs = await Job.find(filters).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, jobs }, { status: 200 });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred" },
      { status: 500 }
    );
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
