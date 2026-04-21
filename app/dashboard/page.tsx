import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const metricCards = [
  { label: "Profile completeness", value: "72%" },
  { label: "Schools targeted", value: "8" },
  { label: "Coaches contacted", value: "5" },
  { label: "Next session", value: "Apr 24" },
];

const profileProgress = [
  { label: "Personal info", value: 100 },
  { label: "Academic stats", value: 100 },
  { label: "Tennis stats", value: 80 },
  { label: "Highlight video", value: 40 },
  { label: "Personal statement", value: 0 },
];

const upcomingSessions = [
  {
    title: "Recruiting Strategy Review",
    date: "Apr 24, 4:00 PM",
    status: "Upcoming",
    note: "Prepare your top 10 target schools and goals.",
  },
  {
    title: "Serve + Match Film Breakdown",
    date: "Apr 18, 5:30 PM",
    status: "Completed",
    note: "Focused on second-serve placement and first-strike patterns.",
  },
  {
    title: "Academic + Eligibility Planning",
    date: "Apr 11, 3:00 PM",
    status: "Completed",
    note: "Reviewed test timeline and NCAA recruiting requirements.",
  },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const role = user?.publicMetadata?.role;

  if (role !== "recruit") {
    redirect("/");
  }

  const firstName = user?.firstName?.trim() || "Recruit";

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Recruit Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Welcome back, {firstName}.</h1>
        <p className="mt-2 text-slate-600">
          Keep building your profile and stay consistent with outreach to improve your recruiting outcomes.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((card) => (
          <div key={card.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Profile Progress</h2>
        <p className="mt-1 text-sm text-slate-600">
          Complete each section to strengthen your visibility with college coaches.
        </p>
        <div className="mt-5 space-y-4">
          {profileProgress.map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{item.label}</span>
                <span className="text-slate-500">{item.value}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Upcoming Sessions</h2>
        <div className="mt-5 space-y-3">
          {upcomingSessions.map((session) => (
            <div
              key={`${session.title}-${session.date}`}
              className="flex flex-col gap-3 rounded-lg border border-slate-200 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{session.title}</p>
                <p className="text-sm text-slate-500">{session.date}</p>
                <p className="mt-1 text-sm text-slate-600">{session.note}</p>
              </div>
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                  session.status === "Upcoming"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {session.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">AI Assistant</h2>
        <p className="mt-1 text-sm text-slate-600">
          Generate high-quality recruiting materials and personalized next steps.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Draft a coach email
          </button>
          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Check school fit
          </button>
          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Write my statement
          </button>
        </div>
      </section>
    </div>
  );
}
