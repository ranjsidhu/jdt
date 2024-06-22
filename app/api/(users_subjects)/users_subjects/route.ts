import { NextRequest, NextResponse } from "next/server";
import { client, create, upsert } from "@/utils/api/db-client";

export async function GET() {
  const { data, error } = await client.from("users_subjects").select(`
    users (id, student_name),
    subjects (id, name, label)
  `);
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const { subject_id, user_id } = await req.json();
  const { data, error } = await create({
    body: { subject_id, user_id },
    table: "users_subjects",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created tutor record",
    response: { ...data },
  });
}

export async function PATCH(req: NextRequest) {
  const { subject_id, user_id } = await req.json();
  const { data, error } = await upsert({
    table: "users_subjects",
    values: { subject_id, user_id, updated_at: new Date().toISOString() },
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ ...data });
}
