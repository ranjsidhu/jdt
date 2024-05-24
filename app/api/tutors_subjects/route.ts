import { NextRequest, NextResponse } from "next/server";
import { client, create } from "../utils/db-client";

export async function GET() {
  const { data, error } = await client.from("tutors_subjects").select(`
    tutors (name, email, phone),
    subjects (name, label)
  `);

  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const { subject_id, tutor_id } = await req.json();
  const { data, error } = await create({
    body: { subject_id, tutor_id },
    table: "tutors_subjects",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created tutor record",
    response: { ...data },
  });
}
