import Link from "next/link";

const projects = [
  {
    title: "Mem0-Style Memory Layer for AI Agents",
    meta: "Jan 2026 - May 2026 / Python, FastAPI, PostgreSQL, Redis, FAISS, LangChain, Docker, AWS",
    points: [
      "Engineered long-term memory for LLM agents using vector search, Redis and PostgreSQL.",
      "Designed REST APIs for memory read, write and delete with TTL expiry and namespace isolation."
    ]
  },
  {
    title: "Distributed Rate Limiter & API Gateway",
    meta: "Sept 2025 - Feb 2026 / Python, Redis, FastAPI, Kubernetes, AWS EC2, Prometheus, Grafana",
    points: [
      "Built token bucket and sliding-window algorithms using Redis atomic operations.",
      "Designed a horizontally scalable gateway with observability and high availability."
    ]
  },
  {
    title: "Real-Time Financial Data Pipeline & Analytics Dashboard",
    meta: "Aug 2025 - Dec 2025 / Kafka, Spark, PostgreSQL, dbt, Airflow, AWS S3, Grafana",
    points: [
      "Built Kafka and Spark streaming pipeline for market events with Airflow DAG orchestration.",
      "Modeled analytical data with dbt and visualized KPIs in Grafana dashboards."
    ]
  },
  {
    title: "End-to-End ML Pipeline for Predictive Analytics",
    meta: "Aug 2025 - Jan 2026 / Python, scikit-learn, XGBoost, MLflow, Airflow, PostgreSQL, FastAPI, Docker, AWS S3",
    points: [
      "Developed a production ML pipeline spanning ingestion, feature engineering, hyperparameter tuning and model tracking.",
      "Automated retraining with Airflow and deployed inference as a FastAPI service with validation and prediction logging."
    ]
  },
  {
    title: "Cloud-Native Customer Analytics Platform",
    meta: "Jan 2025 - May 2025 / Azure Data Factory, Snowflake, dbt, Airflow, Spark, ADLS, Python",
    points: [
      "Designed an ELT platform for customer and transaction analytics using Azure, Snowflake and Airflow.",
      "Built dbt and Spark transformations with dimensional models, quality checks and incremental loading."
    ]
  }
];

export default function ProjectsPage() {
  return (
    <main className="subpage-shell">
      <nav className="nav glass slide-down">
        <Link href="/" className="brand"><span>✦</span> Muskaan</Link>
        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#education">Education</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
        <a className="nav-cta" href="mailto:musugauba22@gmail.com">Contact</a>
      </nav>

      <section className="subpage-hero float-in-left">
        <p className="eyebrow">Project Archive</p>
        <h1>Projects built like product stories.</h1>
        <p>Each project is short enough to scan, but specific enough to show backend, data, cloud, ML and production engineering depth.</p>
      </section>

      <section className="project-detail-grid">
        {projects.map((project, index) => (
          <article className="project-detail-card reveal" key={project.title}>
            <span className="project-index">0{index + 1}</span>
            <h2>{project.title}</h2>
            <small>{project.meta}</small>
            <ul>
              {project.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <a href="https://github.com/Muskaan2211" target="_blank" rel="noreferrer">More on GitHub &rarr;</a>
          </article>
        ))}
      </section>
    </main>
  );
}
