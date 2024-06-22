import { NextRequest, NextResponse } from "next/server";
import { create } from "../../utils/db-client";

export async function POST(req: NextRequest) {
  const {
    parent_first_name,
    parent_last_name,
    student_name,
    dob,
    phone,
    email,
    role_id,
    year_group_id,
  } = await req.json();
  const { data, error } = await create({
    body: {
      parent_first_name,
      parent_last_name,
      student_name,
      dob,
      phone,
      email,
      role_id,
      year_group_id,
    },
    table: "users",
  });

  if (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({
    message: "Successfully created user",
    response: { ...data },
  });
}
