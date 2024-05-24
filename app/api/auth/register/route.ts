import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../utils/auth-client";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const { data, session, error } = await auth.signUp({ email, password });

  if (error) {
    return NextResponse.json({ error });
  }

  const { access_token, refresh_token } = session;

  return NextResponse.json({ data, access_token, refresh_token });
}
