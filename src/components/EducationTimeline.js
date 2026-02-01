// src/components/EducationTimeline.js
export default function EducationTimeline() {
  const items = [
    {
      school: "Arizona State University",
      location: "Tempe, Arizona",
      degree: "M.S. Computer Engineering",
      time: "Aug 2024 – May 2026",
      color: "from-sky-400 to-indigo-400",
      points: [
        "Graduate Research Assistant – Developer",
        "Focus: backend systems, data pipelines, dashboards",
      ],
    },
    {
      school: "Vellore Institute of Technology",
      location: "Vellore, India",
      degree: "B.Tech Computer Science and Engineering",
      time: "Sept 2020 – May 2024",
      color: "from-fuchsia-400 to-pink-400",
      points: [
        "Built full-stack and data-driven projects",
        "Strong CS foundations + software engineering practices",
      ],
    },
  ];

  return (
    <section id="education" className="py-14 text-white">
      <Header title="Education" subtitle="A quick timeline of where I learned + what I focused on." />

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Timeline rail */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="text-sm text-white/70">
            <div className="text-white font-semibold">Snapshot</div>
            <p className="mt-2">
              I’m currently pursuing my Master’s at ASU and have hands-on experience building
              full-stack apps, backend APIs, and data pipelines.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <MiniBadge label="Focus" value="Backend + Data" />
            <MiniBadge label="Strength" value="Systems mindset" />
            <MiniBadge label="Tools" value="Docker • Git • CI" />
            <MiniBadge label="Goal" value="SDE / Backend / Analyst" />
          </div>
        </div>

        {/* Timeline cards */}
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />
          <div className="space-y-6">
            {items.map((it) => (
              <div key={it.school} className="relative pl-12">
                <div className={`absolute left-2 top-4 h-5 w-5 rounded-full bg-gradient-to-r ${it.color}`} />
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold">{it.school}</div>
                      <div className="text-sm text-white/60">{it.location}</div>
                    </div>
                    <div className="text-xs text-white/60">{it.time}</div>
                  </div>
                  <div className="mt-2 text-sm text-white/80">{it.degree}</div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {it.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-white/60">{subtitle}</p>
    </div>
  );
}

function MiniBadge({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
