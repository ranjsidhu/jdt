import { NextRequest, NextResponse } from "next/server";
import { client, create } from "../utils/db-client";

export async function GET() {
  const { data, error } = await client.from("user_sessions").select();
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const { session_id, user_id, attended } = await req.json();
  const { data, error } = await create({
    body: { session_id, user_id, attended },
    table: "user_sessions",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created user session",
    response: { ...data },
  });
}
