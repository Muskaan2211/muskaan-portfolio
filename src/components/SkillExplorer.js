// src/components/SkillExplorer.js
"use client";
import { useState } from "react";

export default function SkillExplorer() {
  const categories = [
    {
      key: "frontend",
      title: "Frontend",
      tagline: "UI that feels fast, clean, and responsive.",
      accent: "from-sky-400 to-indigo-400",
      icon: "⌁",
      skills: ["React", "Next.js", "Redux", "Tailwind", "HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    },
    {
      key: "backend",
      title: "Backend",
      tagline: "APIs, auth, databases — production ready.",
      accent: "from-emerald-400 to-teal-400",
      icon: "⚙︎",
      skills: ["Flask", "Node.js", "REST APIs", "SQLAlchemy", "Auth (JWT/session)", "Testing", "SDLC", "Debugging"],
    },
    {
      key: "data",
      title: "Data",
      tagline: "ETL, analytics, and ML workflows.",
      accent: "from-fuchsia-400 to-pink-400",
      icon: "▦",
      skills: ["Pandas", "NumPy", "ETL Pipelines", "PostgreSQL", "MySQL", "MongoDB", "Query Optimization", "TensorFlow (basics)"],
    },
    {
      key: "cloud",
      title: "Cloud & Tools",
      tagline: "Shipping, automation, and clean engineering.",
      accent: "from-amber-400 to-orange-400",
      icon: "☁︎",
      skills: ["Git/GitHub", "Docker", "Linux", "AWS (EC2, S3)", "Azure", "CI/CD", "JIRA", "Agile/Scrum"],
    },
  ];

  const [active, setActive] = useState(categories[0]);

  return (
    <section id="skills" className="py-14">
      <Header title="Skills" subtitle="Pick a category — skills update instantly." />

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 overflow-hidden shadow-xl">
        <div className="px-6 py-5 bg-gradient-to-r from-white/5 to-white/0 border-b border-white/10">
          <div className="text-lg font-semibold">Tech Stack Explorer</div>
          <div className="text-sm text-white/60">No expanding needed — it’s readable instantly.</div>
        </div>

        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2 p-4 border-b md:border-b-0 md:border-r border-white/10 bg-black/10">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setActive(c)}
                  className={
                    "text-left rounded-2xl border border-white/10 p-4 transition " +
                    (active.key === c.key ? "bg-white/10 shadow-lg" : "bg-white/5 hover:bg-white/10")
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-xl bg-gradient-to-r ${c.accent} flex items-center justify-center text-black font-bold`}>
                        {c.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{c.title}</div>
                        <div className="text-xs text-white/60">Click to view</div>
                      </div>
                    </div>
                    <div className="text-white/50">{active.key === c.key ? "●" : "○"}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-xl bg-gradient-to-r ${active.accent}`} />
                  <h3 className="text-xl font-semibold">{active.title}</h3>
                </div>
                <p className="mt-2 text-sm text-white/65">{active.tagline}</p>
              </div>
              <div className="hidden sm:block rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                {active.skills.length} skills
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium hover:bg-white/10 transition"
                >
                  <span className={`mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r ${active.accent}`} />
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs font-semibold text-white/60">How I use this stack</div>
              <div className="mt-1 text-sm text-white/75">
                I build end-to-end features: clean UI, reliable APIs, strong data storage,
                and deployable production workflows.
              </div>
            </div>
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
