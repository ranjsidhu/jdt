import { NextRequest, NextResponse } from "next/server";
import { client, update } from "../../utils/db-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { data, error } = await client
    .from("year_groups")
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
  const { name, label } = await req.json();
  const { data, error } = await update({
    body: { name, label },
    table: "year_groups",
    id: params.id,
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ ...data });
}
