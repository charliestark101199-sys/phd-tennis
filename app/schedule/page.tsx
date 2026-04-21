"use client";
import { useEffect } from "react";

export default function SchedulePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, [L, namespace, ar[2]])} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", {origin:"https://cal.com"});
      Cal("inline", {
        elementOrSelector:"#cal-booking",
        calLink: "charlie-stark-phdtennis",
      });
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Book a session with Pat</h1>
        <p className="mt-2 text-sm text-slate-600">
          Schedule a 1-on-1 video call to review your profile, build your school list, and map out your recruiting strategy. Pat has helped hundreds of players navigate this process — come ready to work.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div id="cal-booking" style={{ width: "100%", height: "600px" }} />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">What to prepare</h2>
        <p className="mt-1 text-sm text-slate-600">Come ready with these four things to make the most of your session:</p>
        <div className="mt-4 space-y-3">
          {[
            { num: "1", title: "Your target school list", desc: "Even a rough list of 5-10 schools you're considering — division, location, size, academic programs." },
            { num: "2", title: "Your current UTR rating", desc: "Log into myUTR.com and have your rating ready. If you don't have one yet, we'll talk about how to get one." },
            { num: "3", title: "Your academic transcript", desc: "Have your GPA and any test scores (SAT/ACT) handy so we can match you to the right academic programs." },
            { num: "4", title: "Your questions", desc: "Write down anything you're unsure about — the timeline, how to contact coaches, what coaches look for. No question is too basic." },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {item.num}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}