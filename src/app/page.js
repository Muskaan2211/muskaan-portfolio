"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const stats = [
  ["250K+", "weekly records processed"],
  ["39%", "p99 query latency reduced"],
  ["62%", "faster release cycles"],
  ["95%+", "anomaly precision"]
];

const skillBands = [
  "Python", "FastAPI", "React", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Kafka", "Spark", "AWS", "Docker", "Kubernetes", "LLMs", "FAISS", "Grafana", "Airflow", "Snowflake", "dbt"
];

const projects = [
  {
    title: "Mem0-Style Memory Layer",
    eyebrow: "AI Agents / Backend",
    desc: "A long-term memory system for LLM agents using vector search, Redis cache, PostgreSQL storage, TTL expiry and namespace isolation.",
    stack: ["Python", "FastAPI", "FAISS", "Redis", "AWS"],
    link: "https://github.com/Muskaan2211"
  },
  {
    title: "Distributed Rate Limiter & API Gateway",
    eyebrow: "Systems / Cloud",
    desc: "A scalable gateway supporting token bucket and sliding-window limits with Redis atomic operations, Kubernetes scaling and observability.",
    stack: ["FastAPI", "Redis", "Kubernetes", "AWS EC2"],
    link: "https://github.com/Muskaan2211"
  },
  {
    title: "Real-Time Financial Data Pipeline",
    eyebrow: "Data Engineering",
    desc: "Kafka and Spark streaming pipeline for market events with Airflow orchestration, dbt modeling, PostgreSQL storage and Grafana KPIs.",
    stack: ["Kafka", "Spark", "Airflow", "dbt", "PostgreSQL"],
    link: "https://github.com/Muskaan2211"
  },
  {
    title: "End-to-End ML Pipeline for Predictive Analytics",
    eyebrow: "Machine Learning / MLOps",
    desc: "Production ML pipeline with XGBoost and scikit-learn, feature engineering, Optuna tuning, MLflow experiment tracking and FastAPI inference.",
    stack: ["Python", "XGBoost", "MLflow", "Airflow", "Docker"],
    link: "https://github.com/Muskaan2211"
  },
  {
    title: "Cloud-Native Customer Analytics Platform",
    eyebrow: "Cloud Data Platform",
    desc: "Azure and Snowflake ELT platform ingesting customer and transaction data with Airflow, dbt, Spark models and business-facing dashboards.",
    stack: ["Azure", "Snowflake", "dbt", "Spark", "Airflow"],
    link: "https://github.com/Muskaan2211"
  }
];

const experiences = [
  {
    company: "Arizona Department of Transportation + ASU",
    role: "Software Engineer - Graduate Research Assistant",
    time: "Oct 2025 - May 2026",
    points: ["FastAPI microservices processing 250K+ weekly records", "PostgreSQL indexing and partitioning that reduced p99 latency", "AWS, Docker and Kubernetes CI/CD with rolling deployments"]
  },
  {
    company: "AssetPlus Consulting",
    role: "Software Engineer Intern",
    time: "Jan 2024 - Jul 2024",
    points: ["Reusable React and TypeScript components", "Contract-first REST APIs with OpenAPI", "Jest-tested features across Agile sprints"]
  },
  {
    company: "Mutelcor GmbH",
    role: "Software Engineer Intern",
    time: "Apr 2023 - Aug 2023",
    points: ["Kafka IoT pipeline for 500K+ daily events", "Anomaly detection with Isolation Forest and Z-score scoring", "Prometheus and Grafana observability"]
  }
];

const certifications = [
  "Google AI Professional Certificate - Google / Coursera",
  "Strong focus: distributed systems, backend services, data engineering and applied ML"
];

const leetcode = {
  username: "Muskaan2422",
  url: "https://leetcode.com/u/Muskaan2422/",
  solved: "89",
  total: "3977",
  rank: "1,715,852",
  activeDays: "32",
  streak: "3",
  focus: ["Arrays", "Strings", "SQL", "Sliding Window", "Graphs", "DP"],
  levels: [
    ["Easy", "7%", "71 / 951"],
    ["Medium", "1%", "17 / 2077"],
    ["Hard", "0.1%", "1 / 949"]
  ]
};

export default function Home() {
  const [leetcodeStats, setLeetcodeStats] = useState(leetcode);

  useEffect(() => {
    let isMounted = true;

    async function loadLeetCodeStats() {
      try {
        const response = await fetch("/api/leetcode", { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json();
        if (isMounted && data?.username) {
          setLeetcodeStats(data);
        }
      } catch (error) {
        console.warn("Could not refresh LeetCode stats", error);
      }
    }

    loadLeetCodeStats();
    const refresh = setInterval(loadLeetCodeStats, 60 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(refresh);
    };
  }, []);

  return (
    <main className="site-shell">
      <nav className="nav glass slide-down">
        <a href="#home" className="brand"><span>✦</span> Muskaan</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#leetcode">LeetCode</a>
          <a href="#certifications">Certifications</a>
          <Link href="/about">About</Link>
        </div>
        <a className="nav-cta" href="mailto:musugauba22@gmail.com">Contact</a>
      </nav>

      <section id="home" className="hero snap-panel section-pad">
        <div className="hero-copy float-in-left">
          <p className="eyebrow">Software Engineer / Backend / Data Systems</p>
          <h1>Building reliable systems with cinematic polish.</h1>
          <p className="hero-subtitle">
            I build backend services, data pipelines and full-stack products that are fast, scalable and easy to use.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">See Projects</a>
            <a className="ghost-btn" href="/MuskaanResumeSdde.pdf" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>

        <div className="hero-art float-in-right" aria-label="Animated portfolio visual">
          <div className="portrait-card">
            <div className="portrait-glow" />
            <img src="/Muskaan_pic.jpg" alt="Muskaan Gauba" />
            <div className="orbit orbit-one">FastAPI</div>
            <div className="orbit orbit-two">Kafka</div>
            <div className="orbit orbit-three">AWS</div>
          </div>
          <div className="quote-card glass">
            <span>“</span>
            <p>My code is a system, a story and a user experience.</p>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Skills ticker">
        <div className="ticker-track">
          {[...skillBands, ...skillBands].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}
        </div>
      </section>

      <section className="stats-grid section-pad reveal">
        {stats.map(([number, label]) => (
          <article className="stat-card glass" key={number}>
            <strong>{number}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section id="education" className="education snap-panel section-pad reveal">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>An engineering map, not a plain list.</h2>
        </div>
        <div className="edu-map">
          <article className="edu-card asu-card">
            <span className="edu-year">2024 - 2026</span>
            <h3>Arizona State University</h3>
            <p>M.S. Computer Engineering</p>
            <div className="edu-tags"><span>Distributed Systems</span><span>Operating Systems</span><span>DBMS</span><span>Machine Learning</span></div>
          </article>
          <div className="edu-connector"><span>Tempe</span><i /> <span>Vellore</span></div>
          <article className="edu-card vit-card">
            <span className="edu-year">2020 - 2024</span>
            <h3>Vellore Institute of Technology</h3>
            <p>B.Tech Computer Science & Engineering</p>
            <div className="edu-tags"><span>Algorithms</span><span>Cloud Computing</span><span>Applied ML</span><span>Data Structures</span></div>
          </article>
        </div>
      </section>

      <section id="work" className="work snap-panel section-pad reveal">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Production-minded engineering.</h2>
          </div>
          <p>Backend, full-stack and data work across research, fintech and IoT systems.</p>
        </div>
        <div className="experience-stack">
          {experiences.map((item, index) => (
            <article className="experience-card" key={item.company} style={{ "--i": index }}>
              <div className="experience-number">0{index + 1}</div>
              <div>
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
              <span>{item.time}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects snap-panel section-pad reveal">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Selected Projects</p>
            <h2>Short story first, GitHub next.</h2>
          </div>
          <p>Cards are intentionally short on the homepage. The full project page can expand into details later.</p>
        </div>
        <div className="project-wall">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title} style={{ "--i": index }}>
              <div className="project-topline">
                <span>{project.eyebrow}</span>
                <strong>0{index + 1}</strong>
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="stack-list">
                {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer">More on GitHub &rarr;</a>
            </article>
          ))}
        </div>
        <Link className="projects-page-link" href="/projects">Open full projects page &rarr;</Link>
      </section>


      <section id="leetcode" className="leetcode-section snap-panel section-pad reveal">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">LeetCode Progress</p>
            <h2>Problem solving with visible momentum.</h2>
          </div>
          <p>A compact coding-progress card that links directly to your LeetCode profile. The numbers refresh from LeetCode automatically, with a safe fallback if the request is temporarily blocked.</p>
        </div>
        <div className="leetcode-grid">
          <article className="leetcode-card">
            <div className="leetcode-ring">
              <span>{leetcodeStats.solved}</span>
              <small>of {leetcodeStats.total} solved</small>
            </div>
            <div className="leetcode-copy">
              <p className="eyebrow">@{leetcodeStats.username}</p>
              <h3>DSA practice, interview prep and SQL fluency.</h3>
              <p>Focused practice across backend interview patterns: arrays, graphs, dynamic programming, data structures and database queries.</p>
              <div className="leetcode-mini-metrics">
                <span>Rank {leetcodeStats.rank}</span>
                <span>{leetcodeStats.activeDays} active days</span>
                <span>{leetcodeStats.streak} max streak</span>
              </div>
              <a href={leetcodeStats.url} target="_blank" rel="noreferrer">View LeetCode profile &rarr;</a>
            </div>
          </article>
          <article className="leetcode-progress glass">
            <div className="progress-header">
              <span>Topic focus</span>
              <strong>Live profile</strong>
            </div>
            {leetcodeStats.levels.map(([label, width, detail]) => (
              <div className="progress-row" key={label}>
                <div><span>{label}</span><small>{detail || width}</small></div>
                <i style={{ "--w": width }} />
              </div>
            ))}
            <div className="leetcode-tags">
              {leetcodeStats.focus.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        </div>
      </section>

      <section id="certifications" className="certifications snap-panel section-pad reveal">
        <div className="cert-card glass">
          <p className="eyebrow">Certifications & Focus</p>
          <h2>Extra proof, cleanly shown.</h2>
          <div className="cert-list">
            {certifications.map((cert) => <span key={cert}>{cert}</span>)}
          </div>
        </div>
        <div className="terminal-card">
          <span className="terminal-dot" />
          <p>$ currently_building</p>
          <strong>backend systems + data platforms + AI tooling</strong>
          <small>with readable code, observability and production discipline</small>
        </div>
      </section>

      <section className="contact-banner section-pad reveal">
        <div>
          <p className="eyebrow">Open to SWE / Backend / Data roles</p>
          <h2>Let’s build something useful.</h2>
        </div>
        <div className="contact-actions">
          <a className="primary-btn" href="mailto:musugauba22@gmail.com">Email Me</a>
          <a className="ghost-btn" href="https://www.linkedin.com/in/muskaan-gauba" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
