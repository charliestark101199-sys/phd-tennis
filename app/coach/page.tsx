import Link from "next/link";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type CoachPageProps = {
  searchParams?: {
    year?: string;
  };
};

type RecruitProfile = {
  clerk_user_id: string;
  first_name: string | null;
  last_name: string | null;
  graduation_year: string | null;
  hometown: string | null;
  state: string | null;
  utr_rating: string | null;
  gpa: string | null;
  handedness: string | null;
  singles_record: string | null;
  doubles_record: string | null;
  playing_style: string | null;
  intended_major: string | null;
};

function displayValue(value: string | null | undefined) {
  return value && value.trim().length > 0 ? value : "Not provided";
}

export default async function CoachPage({ searchParams }: CoachPageProps) {
  const selectedYear = searchParams?.year?.trim() || "all";
  const supabase = createSupabaseServerClient();

  let query = supabase
    .from("recruit_profiles")
    .select(
      "clerk_user_id, first_name, last_name, graduation_year, hometown, state, utr_rating, gpa, handedness, singles_record, doubles_record, playing_style, intended_major",
    )
    .neq("first_name", "")
    .neq("last_name", "");

  if (selectedYear !== "all") {
    query = query.eq("graduation_year", selectedYear);
  }

  const { data, error } = await query.order("graduation_year", { ascending: true }).order("last_name", { ascending: true });
  const recruits = ((error ? [] : data) ?? []) as RecruitProfile[];

  const yearOptions = Array.from(
    new Set(
      recruits
        .map((recruit) => recruit.graduation_year?.trim())
        .filter((year): year is string => Boolean(year && year.length > 0)),
    ),
  ).sort();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900 shadow-sm">
          School target lists are private. Contact recruits directly or reach Pat at info@phdtennis.org
        </section>

        <section>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">PHD Tennis recruit roster</h1>
          <p className="mt-2 text-slate-600">Verified recruits actively seeking college placement</p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-semibold text-slate-700">Filter by graduation year:</span>
            <Link
              href="/coach"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedYear === "all"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"
              }`}
            >
              All
            </Link>
            {yearOptions.map((year) => (
              <Link
                key={year}
                href={`/coach?year=${encodeURIComponent(year)}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedYear === year
                    ? "bg-blue-600 text-white"
                    : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {year}
              </Link>
            ))}
          </div>
        </section>

        {recruits.length === 0 ? (
          <section className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">No recruits found</h2>
            <p className="mt-2 text-sm text-slate-600">
              There are currently no verified recruit profiles matching this filter.
            </p>
          </section>
        ) : (
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {recruits.map((recruit) => (
              <article key={recruit.clerk_user_id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {displayValue(recruit.first_name)} {displayValue(recruit.last_name)}
                  </h2>
                  <p className="text-sm text-slate-600">Class of {displayValue(recruit.graduation_year)}</p>
                  <p className="text-sm text-slate-600">
                    {displayValue(recruit.hometown)}, {displayValue(recruit.state)}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    UTR {displayValue(recruit.utr_rating)}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    GPA {displayValue(recruit.gpa)}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {displayValue(recruit.handedness)} handed
                  </span>
                </div>

                <div className="mt-5 space-y-2 text-sm">
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-900">Singles:</span> {displayValue(recruit.singles_record)}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-900">Doubles:</span> {displayValue(recruit.doubles_record)}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-900">Style:</span> {displayValue(recruit.playing_style)}
                  </p>
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-900">Intended major:</span>{" "}
                    {displayValue(recruit.intended_major)}
                  </p>
                </div>

                <Link
                  href={`/recruit/${recruit.clerk_user_id}`}
                  className="mt-6 inline-flex rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View full profile
                </Link>
              </article>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
