import { NextRequest, NextResponse } from "next/server";
import { client } from "../../utils/db-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { data, error } = await client
    .from("users_subjects")
    .select(
      `
      users (id, student_name),
      subjects (id, name, label)
      `
    )
    .eq("user_id", params.id);
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ ...data });
}
