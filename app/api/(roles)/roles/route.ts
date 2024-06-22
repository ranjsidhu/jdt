import { NextRequest, NextResponse } from "next/server";
import { client, create } from "../utils/db-client";

export async function GET() {
  const { data, error } = await client.from("roles").select();
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const { name, label } = await req.json();
  const { data, error } = await create({
    body: { name, label },
    table: "roles",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created role",
    response: { ...data },
  });
}
