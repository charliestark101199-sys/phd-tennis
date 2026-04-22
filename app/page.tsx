'use client';

export default function HomePage() {
  const ctaHref = "/dashboard";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900">
          PHD Tennis
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">About</a>
          <a href="#services" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">Services</a>
          <a href="#placements" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">Placements</a>
          <a href="#resources" className="text-sm font-medium text-slate-700 transition hover:text-slate-900">Resources</a>
          <a href={ctaHref} className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Get started
          </a>
        </div>
      </nav>

      <section id="about" className="mx-auto w-full max-w-7xl px-6 pb-14 pt-8 lg:px-10 lg:pb-20 lg:pt-14">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            College Tennis Recruiting
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Get into your dream school. Play the sport you love.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            PHD Tennis helps ambitious student-athletes build standout recruiting profiles, connect with college coaches, and confidently navigate every step of the college tennis recruiting journey.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={ctaHref} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Create your profile
            </a>
            <a href="#how-it-works" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
              Learn how it works
            </a>
          </div>
        </div>
      </section>

   <section id="placements" className="border-y border-slate-200 bg-white">
  <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
    <p className="mb-8 text-center text-sm font-medium text-slate-500">Proud to have placed players at</p>
    <div className="flex flex-wrap items-center justify-center gap-12">
      <span className="text-xl font-bold text-slate-400 hover:text-slate-700 transition">Gonzaga</span>
      <span className="text-xl font-bold text-slate-400 hover:text-slate-700 transition">Seattle University</span>
      <span className="text-xl font-bold text-slate-400 hover:text-slate-700 transition">Pomona College</span>
      <span className="text-xl font-bold text-slate-400 hover:text-slate-700 transition">Middlebury</span>
    </div>
  </div>
</section>

      <section id="services" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services built for serious recruits</h2>
          <p className="mt-3 text-slate-600">Everything you need to stand out, stay organized, and move through recruiting with confidence.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Recruit profile","1-on-1 coaching","AI assistant","Resources hub","Coach outreach","School selection"].map((service) => (
            <article key={service} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{service}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">Personalized guidance and practical tools to help you take clear, strategic next steps.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-900 py-16 text-white lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Build your profile","Work with Pat 1-on-1","Get offers and choose your school"].map((step, index) => (
              <article key={step} className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm font-semibold text-blue-300">Step {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What families say</h2>
          <p className="mt-3 text-slate-600">Trusted by players, parents, and college coaches nationwide.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { quote: "PHD Tennis gave us a clear plan and constant support. My daughter found a school that fits her tennis and academics perfectly.", author: "Parent of Division I recruit" },
            { quote: "The profile tools and coach outreach strategy saved me months of guesswork. I felt confident in every decision.", author: "Class of 2025 player" },
            { quote: "Pat brings elite-level experience and a genuine commitment to each athlete's long-term success.", author: "Greg Patton, Former Boise State Head Coach" },
            { quote: "From first conversation to final commitment, the process was organized, personal, and extremely effective.", author: "Parent of NCAA recruit" },
          ].map((testimonial) => (
            <figure key={testimonial.author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-base leading-relaxed text-slate-700">&quot;{testimonial.quote}&quot;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="get-started" className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 px-6 py-14 lg:flex-row lg:items-center lg:px-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ready to start your recruiting journey?</h2>
            <p className="mt-3 max-w-2xl text-slate-600">Build your profile today and get expert guidance to reach the schools where you can thrive.</p>
          </div>
          <a href={ctaHref} className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Get started now
          </a>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 py-8 text-sm text-slate-500 lg:px-10">
        Copyright © {new Date().getFullYear()} PHD Tennis. All rights reserved.
      </footer>
    </main>
  );
}
