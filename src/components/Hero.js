// src/components/Hero.js
import TypingTerminal from "./TypingTerminal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span className="font-semibold">Targeting:</span>
              <span>Software Engineer • Backend • Data/Analyst • Full-Stack</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight text-white">
              I build{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                data-driven systems
              </span>{" "}
              and production-ready apps.
            </h1>

            <p className="mt-5 text-white/75 max-w-xl">
              Backend + Data + Frontend — APIs, ETL pipelines, dashboards, and ML-backed features.
              I like building systems that are reliable, measurable, and useful.
            </p>

            {/* Core Languages */}
            <div className="mt-6">
              <div className="text-xs font-semibold text-white/60">
                Core Languages
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Python", "Java", "C++", "JavaScript", "SQL", "R", "Bash"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/10 text-white text-xs px-3 py-1 hover:bg-white/10 transition"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5 transition"
              >
                Contact
              </a>
              <a
                href="/Muskaan_resume_apple.pdf"
                className="rounded-full border border-white/15 px-5 py-2 text-sm text-white hover:bg-white/5 transition"
                download
              >
                Resume (PDF)
              </a>
            </div>

            <div className="mt-8">
              <TypingTerminal />
            </div>
          </div>

          {/* Right visual — big profile image */}
          <div className="relative flex flex-col items-center">
            {/* Big photo */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <img
                src="/profile.jpg"
                alt="Muskaan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='%23111827'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='18'>Add profile.jpg</text></svg>";
                }}
              />
            </div>

            {/* Name + role BELOW image */}
            <div className="mt-6 text-center">
              <div className="text-2xl font-semibold text-white">
                Muskaan
              </div>
              <div className="mt-1 text-sm text-white/70">
                Software Engineer • Backend • Data
              </div>
            </div>

            {/* Soft glow */}
            <div className="absolute -z-10 -top-10 h-40 w-40 rounded-full bg-sky-400/30 blur-3xl" />
            <div className="absolute -z-10 -bottom-10 h-44 w-44 rounded-full bg-fuchsia-400/25 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value, accent }) {
  return (
    <div className="rounded-2xl border border-[#0f1724]/10 bg-white/70 p-4 hover:bg-white transition shadow-sm">
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${accent}`} />
        <div className="text-xs text-[#061026]/60">{label}</div>
      </div>
      <div className="mt-2 text-sm font-semibold text-[#061026]">
        {value}
      </div>
    </div>
  );
}
