import { NextRequest, NextResponse } from "next/server";
import { client, update } from "@/utils/api/db-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { data, error } = await client
    .from("tutors")
    .select()
    .eq("id", params.id);
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
  const { data, error } = await update({
    body,
    id,
    table: "tutors",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ ...data });
}
