import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

type RecruitProfilePageProps = {
  params: {
    slug: string;
  };
};

type RecruitProfile = {
  clerk_user_id: string;
  first_name: string | null;
  last_name: string | null;
  graduation_year: string | null;
  hometown: string | null;
  state: string | null;
  handedness: string | null;
  utr_rating: string | null;
  gpa: string | null;
  division_interest?: string | null;
  usta_ranking: string | null;
  singles_record: string | null;
  doubles_record: string | null;
  playing_style: string | null;
  preferred_position: string | null;
  sat_score: string | null;
  act_score: string | null;
  intended_major: string | null;
  highlight_video_one: string | null;
  highlight_video_two: string | null;
  personal_statement: string | null;
  email?: string | null;
};

function getDisplayValue(value: string | null | undefined) {
  return value && value.trim().length > 0 ? value : "Not provided";
}

function getEmbedUrl(videoUrl: string) {
  try {
    const parsed = new URL(videoUrl);
    const host = parsed.hostname.replace("www.", "");
    if (host.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }
    if (host.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      if (id) {
        return `https://www.youtube.com/embed/${id}`;
      }
    }
    return videoUrl;
  } catch {
    return videoUrl;
  }
}

export default async function RecruitProfilePage({ params }: RecruitProfilePageProps) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("recruit_profiles")
    .select("*")
    .eq("clerk_user_id", params.slug)
    .maybeSingle<RecruitProfile>();

  if (error || !data) {
    notFound();
  }

  const recruitName = [data.first_name, data.last_name].filter(Boolean).join(" ").trim() || "Recruit Profile";
  const recruitLocation = [data.hometown, data.state].filter(Boolean).join(", ");
  const contactEmail = data.email && data.email.trim().length > 0 ? data.email : "info@phdtennis.org";
  const divisionInterest = data.division_interest ?? "Not provided";
  const videoLinks = [data.highlight_video_one, data.highlight_video_two].filter(
    (link): link is string => Boolean(link && link.trim().length > 0),
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">PHD Tennis Recruit Profile</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{recruitName}</h1>
              <p className="mt-3 text-sm text-slate-600">
                Class of {getDisplayValue(data.graduation_year)} · {getDisplayValue(recruitLocation)} ·{" "}
                {getDisplayValue(data.handedness)} handed
              </p>
            </div>
            <a
              href={`mailto:${contactEmail}?subject=Recruiting inquiry for ${encodeURIComponent(recruitName)}`}
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Contact this recruit
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              UTR: {getDisplayValue(data.utr_rating)}
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              GPA: {getDisplayValue(data.gpa)}
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              Division interest: {getDisplayValue(divisionInterest)}
            </span>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Tennis Stats</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">UTR</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.utr_rating)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">USTA ranking</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.usta_ranking)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">Singles record</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.singles_record)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">Doubles record</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.doubles_record)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">Playing style</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.playing_style)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-medium text-slate-600">Preferred position</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.preferred_position)}</dd>
              </div>
            </dl>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Academic Stats</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">GPA</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.gpa)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">SAT</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.sat_score)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                <dt className="font-medium text-slate-600">ACT</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.act_score)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="font-medium text-slate-600">Intended major</dt>
                <dd className="font-semibold text-slate-900">{getDisplayValue(data.intended_major)}</dd>
              </div>
            </dl>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Highlight Videos</h2>
          {videoLinks.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">No highlight videos added yet.</p>
          ) : (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {videoLinks.map((videoUrl) => (
                <div key={videoUrl} className="space-y-3">
                  <div className="aspect-video overflow-hidden rounded-xl border border-slate-200">
                    <iframe
                      src={getEmbedUrl(videoUrl)}
                      className="h-full w-full"
                      title="Recruit highlight video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
                  >
                    Open original video link
                  </a>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900">Personal Statement</h2>
          <p className="mt-4 whitespace-pre-wrap leading-relaxed text-slate-700">
            {getDisplayValue(data.personal_statement)}
          </p>
        </section>

        <footer className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 text-sm font-medium text-blue-900">
          Profile verified by PHD Tennis · Pat Dreves · info@phdtennis.org
        </footer>
      </div>
    </main>
  );
}
