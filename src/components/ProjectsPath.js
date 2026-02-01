// src/components/ProjectsPath.js
export default function ProjectsPath() {
  const projects = [
    {
      title: "ServiSecure",
      tag: "Computer Vision + Automation",
      summary:
        "Vehicle service alert system using license-plate OCR and automated SMS updates.",
      tech: ["Python", "OpenCV", "Tesseract", "Twilio", "MySQL"],
      accent: "from-sky-500 to-indigo-500",
      bullets: [
        "OCR pipeline for plate extraction + validation",
        "Automated service alerts via SMS workflow",
        "Database-backed tracking and history",
      ],
    },
    {
      title: "AllMed",
      tag: "Full-Stack Healthcare Platform",
      summary:
        "All-in-one e-healthcare platform: appointments, pharmacy, blood bank, mental health chatbot.",
      tech: ["PHP", "MySQL", "Auth", "HTML/CSS/JS"],
      accent: "from-fuchsia-500 to-pink-500",
      bullets: [
        "Multi-module platform with unified flow",
        "Database schema + authentication system",
        "User-friendly pages and admin handling",
      ],
    },
  ];

  return (
    <section id="projects" className="py-14">
      <Header title="Projects" subtitle="Simple, readable case studies." />

      <div className="mt-8 space-y-6">
        {projects.map((p) => (
          <ProjectRow key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ p }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#0f1724]/10 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition">
      {/* Accent strip */}
      <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${p.accent}`} />
      <div className="p-6 pl-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-lg font-semibold text-[#061026]">{p.title}</div>
            <div className="text-sm text-[#061026]/60">{p.tag}</div>
          </div>
          <span className={`h-10 w-10 rounded-2xl bg-gradient-to-r ${p.accent} opacity-90`} />
        </div>

        <p className="mt-4 text-sm text-[#061026]/75">{p.summary}</p>

        <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-sm text-[#061026]/75">
          {p.bullets.map((b) => (
            <li key={b} className="rounded-xl border border-[#0f1724]/10 bg-white/60 px-3 py-2">
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#0f1724]/10 bg-white/60 px-3 py-1 text-xs text-[#061026]/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#061026]">{title}</h2>
      <p className="mt-1 text-sm text-[#061026]/60">{subtitle}</p>
    </div>
  );
}
