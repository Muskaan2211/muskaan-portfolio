// src/components/ExperienceSection.js
"use client";

import { useState } from "react";

export default function ExperienceSection() {
  const roles = [
    {
      title: "Graduate Research Assistant – Software / Data Systems Engineering",
      org: "Arizona State University, Global Institute of Sustainability & Innovation",
      location: "Arizona, USA",
      time: "Oct 2025 – Present",
      accent: "from-sky-400 to-indigo-400",
      bullets: [
        "Built automated distributed data collection services using Python, Flask, and REST APIs for reliable real-time ingestion of environmental datasets.",
        "Engineered backend ETL workflows with Pandas, NumPy, and SQLAlchemy for large-scale data transformation across distributed database systems.",
        "Designed scalable database architectures improving query performance and lowering retrieval latency for high-volume datasets.",
        "Built monitoring dashboards using Power BI and Matplotlib for real-time observability and performance tracking.",
        "Applied secure data handling and access control concepts for sensitive datasets; collaborated in Agile with Git and code reviews.",
      ],
    },
    {
      title: "Frontend Software Engineering Intern",
      org: "AssetPlus Consulting",
      location: "Noida, India",
      time: "Feb 2024 – May 2024",
      accent: "from-emerald-400 to-teal-400",
      bullets: [
        "Developed responsive web apps using React.js, JavaScript, HTML, and CSS to improve cross-platform compatibility.",
        "Designed reusable UI components and modular frontend architecture for scalable enterprise dashboards (200+ users).",
        "Optimized frontend performance via improved API consumption, state management, and lazy loading; reduced latency by ~25%.",
        "Integrated REST APIs and JSON data pipelines to ensure reliable client-server communication and data consistency.",
        "Worked in Agile SDLC: sprint planning, debugging, code reviews, and production deployment support.",
      ],
    },
    {
      title: "IoT Data Analysis Intern",
      org: "Mutelcor GmbH",
      location: "Delhi, India",
      time: "May 2023 – Jul 2023",
      accent: "from-fuchsia-400 to-pink-400",
      bullets: [
        "Built scalable data pipelines processing daily IoT sensor readings for real-time monitoring and analytics workflows.",
        "Developed Python analytics and ML models for anomaly detection and predictive failure analysis to improve reliability.",
        "Designed automated monitoring dashboards and alerting systems for operational insights.",
        "Performed end-to-end testing, debugging, and QA validation across IoT devices to ensure data integrity and production stability.",
      ],
    },
  ];

  // open first one by default (optional)
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="py-14 text-white">
      <Header title="Experience" subtitle="Click a role to expand details." />

      <div className="mt-8 grid lg:grid-cols-12 gap-6">
        {/* Left: summary */}
        <div className="lg:col-span-4 rounded-3xl border border-white/15 bg-white/8 backdrop-blur-xl p-6 shadow-2xl overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-sky-500/15 blur-3xl" />

          <div className="relative">
            <div className="text-sm text-white/70">
              <div className="text-white font-semibold">Snapshot</div>
              <p className="mt-2">
                Backend + data systems work (ETL, APIs, dashboards) plus frontend delivery
                (React, performance, enterprise UI).
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <MiniBadge label="Core" value="Backend + Data" />
              <MiniBadge label="Also" value="Frontend" />
              <MiniBadge label="Strength" value="Systems" />
              <MiniBadge label="Style" value="Ship & iterate" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/12 bg-black/20 p-4">
              <div className="text-xs font-semibold text-white/60">Tip</div>
              <div className="mt-1 text-sm text-white/75">
                Expand roles to see what I built + improved.
              </div>
            </div>
          </div>
        </div>

        {/* Right: expandable timeline */}
        <div className="lg:col-span-8 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-6">
            {roles.map((r, idx) => {
              const isOpen = openIndex === idx;

              return (
                <article key={r.title} className="relative pl-12">
                  <div
                    className={`absolute left-2 top-6 h-5 w-5 rounded-full bg-gradient-to-r ${r.accent}`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full text-left rounded-3xl border border-white/15 bg-white/8 backdrop-blur-xl p-6 shadow-xl hover:bg-white/12 transition focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                        <div className="mt-1 text-sm text-white/70">
                          {r.org} • {r.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-xs text-white/60 whitespace-nowrap">{r.time}</div>

                        {/* chevron indicator */}
                        <span
                          className={
                            "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/70 transition " +
                            (isOpen ? "rotate-180" : "")
                          }
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </div>
                    </div>

                    {/* Expandable body */}
                    <div
                      className={
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out mt-4 " +
                        (isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-2 text-sm text-white/75">
                          {r.bullets.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className={`mt-2 h-2 w-2 rounded-full bg-gradient-to-r ${r.accent}`} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer hint */}
                    <div className="mt-4 flex items-center justify-between text-xs text-white/50">
                      <span>{isOpen ? "Click to collapse" : "Click to expand"}</span>
                      <span className="hidden sm:inline">{r.bullets.length} highlights</span>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm text-white/70">{subtitle}</p>
    </div>
  );
}

function MiniBadge({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur p-4">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
