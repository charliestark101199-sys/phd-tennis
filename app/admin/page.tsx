import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type AdminPageProps = {
  searchParams?: {
    q?: string;
  };
};

type RecruitProfile = {
  clerk_user_id: string;
  first_name: string | null;
  last_name: string | null;
  graduation_year: string | null;
  utr_rating: string | null;
  updated_at: string | null;
  created_at: string | null;
  gpa: string | null;
  hometown: string | null;
  state: string | null;
  phone_number: string | null;
  sat_score: string | null;
  act_score: string | null;
  intended_major: string | null;
  usta_ranking: string | null;
  singles_record: string | null;
  doubles_record: string | null;
  playing_style: string | null;
  preferred_position: string | null;
  handedness: string | null;
  highlight_video_one: string | null;
  highlight_video_two: string | null;
  personal_statement: string | null;
  email?: string | null;
};

const profileFieldsForCompleteness: (keyof RecruitProfile)[] = [
  "first_name",
  "last_name",
  "graduation_year",
  "hometown",
  "state",
  "phone_number",
  "gpa",
  "sat_score",
  "act_score",
  "intended_major",
  "utr_rating",
  "usta_ranking",
  "singles_record",
  "doubles_record",
  "playing_style",
  "preferred_position",
  "handedness",
  "highlight_video_one",
  "highlight_video_two",
  "personal_statement",
];

function hasValue(value: string | null | undefined) {
  return Boolean(value && value.trim().length > 0);
}

function calculateCompleteness(profile: RecruitProfile) {
  const filled = profileFieldsForCompleteness.filter((field) => hasValue(profile[field])).length;
  return Math.round((filled / profileFieldsForCompleteness.length) * 100);
}

function formatDate(value: string | null) {
  if (!value) {
    return "Not available";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function displayText(value: string | null | undefined) {
  return hasValue(value) ? (value as string) : "Not provided";
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== "admin") {
    redirect("/");
  }

  const searchQuery = searchParams?.q?.trim().toLowerCase() ?? "";
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("recruit_profiles")
    .select("*")
    .neq("first_name", "")
    .neq("last_name", "")
    .order("updated_at", { ascending: false });

  const recruits = ((error ? [] : data) ?? []) as RecruitProfile[];
  const completeCount = recruits.filter((profile) => calculateCompleteness(profile) === 100).length;
  const now = new Date();
  const newThisMonthCount = recruits.filter((profile) => {
    const date = new Date(profile.created_at ?? profile.updated_at ?? "");
    return !Number.isNaN(date.getTime()) && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
  }).length;

  const visibleRecruits = recruits.filter((profile) => {
    if (!searchQuery) {
      return true;
    }
    const name = `${profile.first_name ?? ""} ${profile.last_name ?? ""}`.toLowerCase();
    return name.includes(searchQuery);
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-8">
        <section className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-900 shadow-sm">
          Admin only — PHD Tennis staff access
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total recruits</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{recruits.length}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Profiles complete</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{completeCount}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Profiles in progress</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{recruits.length - completeCount}</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">New this month</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{newThisMonthCount}</p>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <form action="/admin" method="GET" className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label htmlFor="q" className="text-sm font-semibold text-slate-700">
              Search recruits by name
            </label>
            <input
              id="q"
              name="q"
              type="text"
              defaultValue={searchParams?.q ?? ""}
              placeholder="e.g. Emma Johnson"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="inline-flex w-fit rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Recruit</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Grad year</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Completeness</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">UTR</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Last updated</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {visibleRecruits.length === 0 ? (
                  <tr>
                    <td className="px-4 py-12 text-center text-sm text-slate-600" colSpan={6}>
                      No recruits matched your search.
                    </td>
                  </tr>
                ) : (
                  visibleRecruits.map((profile) => {
                    const fullName = `${displayText(profile.first_name)} ${displayText(profile.last_name)}`;
                    const completeness = calculateCompleteness(profile);
                    return (
                      <tr key={profile.clerk_user_id} className="hover:bg-slate-50">
                        <td className="px-4 py-4">
                          <p className="font-semibold text-slate-900">{fullName}</p>
                          <p className="text-sm text-slate-600">{displayText(profile.email)}</p>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{displayText(profile.graduation_year)}</td>
                        <td className="px-4 py-4">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                            {completeness}%
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-700">{displayText(profile.utr_rating)}</td>
                        <td className="px-4 py-4 text-sm text-slate-700">{formatDate(profile.updated_at)}</td>
                        <td className="px-4 py-4">
                          <Link
                            href={`/recruit/${profile.clerk_user_id}`}
                            className="text-sm font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
                          >
                            View profile
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
