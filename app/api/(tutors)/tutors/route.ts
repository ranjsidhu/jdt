import { NextRequest, NextResponse } from "next/server";
import { client, create } from "../../utils/db-client";

export async function GET() {
  const { data, error } = await client.from("tutors").select();
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const { name, email, phone } = await req.json();
  const { data, error } = await create({
    body: { name, email, phone },
    table: "tutors",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created tutor record",
    response: { ...data },
  });
}
