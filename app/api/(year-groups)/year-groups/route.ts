import { NextRequest, NextResponse } from "next/server";
import { client, create } from "@/utils/api/db-client";

export async function GET() {
  const { data, error } = await client.from("year_groups").select();
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const { name, label } = await req.json();
  const { data, error } = await create({
    body: { name, label },
    table: "year_groups",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created year group",
    response: { ...data },
  });
}
