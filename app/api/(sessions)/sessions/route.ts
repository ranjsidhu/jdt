import { NextRequest, NextResponse } from "next/server";
import { client, create } from "../utils/db-client";

export async function GET() {
  const { data, error } = await client.from("sessions").select();
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({ response: { ...data } });
}

export async function POST(req: NextRequest) {
  const {
    subject_id,
    tutor_id,
    date,
    start_time,
    end_time,
    max_capacity,
    capacity_booked,
    year_group_id,
    meeting_link,
  } = await req.json();
  const { data, error } = await create({
    body: {
      subject_id,
      tutor_id,
      date,
      start_time,
      end_time,
      max_capacity,
      capacity_booked,
      year_group_id,
      meeting_link,
    },
    table: "sessions",
  });
  if (error) {
    return NextResponse.json({ error });
  }
  return NextResponse.json({
    message: "Successfully created session",
    response: { ...data },
  });
}
