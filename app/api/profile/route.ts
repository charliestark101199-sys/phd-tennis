import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type RecruitProfilePayload = {
  first_name: string;
  last_name: string;
  graduation_year: string;
  hometown: string;
  state: string;
  phone_number: string;
  gpa: string;
  sat_score: string;
  act_score: string;
  intended_major: string;
  utr_rating: string;
  usta_ranking: string;
  singles_record: string;
  doubles_record: string;
  playing_style: string;
  preferred_position: string;
  handedness: string;
  highlight_video_one: string;
  highlight_video_two: string;
  personal_statement: string;
};

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("recruit_profiles")
    .select("*")
    .eq("clerk_user_id", user.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ profile: data ?? null });
}

export async function POST(request: Request) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as RecruitProfilePayload;
  const supabase = createSupabaseServerClient();

  const payload = {
    ...body,
    clerk_user_id: user.id,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("recruit_profiles")
    .upsert(payload, { onConflict: "clerk_user_id" })
    .select("*")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ profile: data });
}
