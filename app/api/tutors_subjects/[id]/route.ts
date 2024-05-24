import { NextRequest, NextResponse } from "next/server";
import { client, custom_update } from "../../utils/db-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { data, error } = await client
    .from("tutors_subjects")
    .select()
    .eq("tutor_id", params.id);
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ ...data });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await req.json();
  const id = params.id;
  const { data, error } = await custom_update({
    body,
    table: "tutors_subjects",
    updateColumn: "tutor_id",
    updateValue: id,
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ ...data });
}
