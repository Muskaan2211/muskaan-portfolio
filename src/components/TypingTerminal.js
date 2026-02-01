// src/components/TypingTerminal.js
"use client";
import { useEffect, useMemo, useState } from "react";

export default function TypingTerminal() {
  const scripts = useMemo(
    () => [
      {
        prompt: "$ whoami",
        lines: [
          "Muskaan Gauba — MS Computer Engineering @ ASU",
          "I build full-stack + backend-heavy systems and data workflows.",
          "Target roles: SDE / Backend Engineer / Data Analyst / Full-Stack",
        ],
      },
      {
        prompt: "$ skills --languages",
        lines: ["Python • Java • C++ • JavaScript • SQL • R • Bash"],
      },
      {
        prompt: "$ skills --engineering",
        lines: [
          "Frontend: React, Next.js, Redux, Tailwind, HTML/CSS",
          "Backend: Flask, Node.js, REST APIs, SQLAlchemy",
          "Databases: PostgreSQL, MySQL, MongoDB",
        ],
      },
      {
        prompt: "$ skills --data",
        lines: [
          "Data: Pandas, NumPy, ETL Pipelines, analytics workflows",
          "ML: TensorFlow (basics)",
        ],
      },
      {
        prompt: "$ tools --cloud",
        lines: ["Git/GitHub • Docker • Linux • AWS (EC2/S3) • Azure • CI/CD • JIRA"],
      },
      {
        prompt: "$ portfolio-status",
        lines: ["✓ Backend APIs & Databases", "✓ ETL & Analytics", "✓ Frontend Dashboards"],
      },
    ],
    []
  );

  const MAX_LINES = 10;
  const [lines, setLines] = useState(() => Array(MAX_LINES).fill(""));
  const [cursorOn, setCursorOn] = useState(true);

  const pushLine = (newLine) => setLines((prev) => [...prev.slice(1), newLine]);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function typeToNewLine(text, speed = 14) {
      pushLine("");
      let cur = "";
      for (let i = 0; i < text.length; i++) {
        if (cancelled) return;
        cur += text[i];
        setLines((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = cur;
          return copy;
        });
        await sleep(speed);
      }
    }

    async function run() {
      pushLine("$ initializing…");
      await sleep(450);

      while (!cancelled) {
        for (const block of scripts) {
          if (cancelled) return;

          await typeToNewLine(block.prompt, 12);
          await sleep(140);

          for (const out of block.lines) {
            if (cancelled) return;
            await typeToNewLine(out, 10);
            await sleep(140);
          }

          await sleep(550);
        }
      }
    }

    run();
    const blink = setInterval(() => setCursorOn((c) => !c), 450);

    return () => {
      cancelled = true;
      clearInterval(blink);
    };
  }, [scripts]);

  return (
    <div className="rounded-2xl border border-[#0f1724]/15 bg-[#0b1220] text-white shadow-sm overflow-hidden">

      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Dot color="bg-red-400" />
          <Dot color="bg-yellow-400" />
          <Dot color="bg-green-400" />
          <span className="ml-2 text-xs text-white/70 font-mono">terminal — muskaan@portfolio</span>
        </div>
        <span className="text-xs text-white/50 font-mono">status: running</span>

      </div>

      <div className="h-56 overflow-auto p-4 font-mono text-sm leading-6">
        {lines.map((line, idx) => {
          const isLast = idx === lines.length - 1;
          return (
            <div key={idx} className="whitespace-pre-wrap text-white/85">
              {line}
              {isLast ? <span className="text-white/60">{cursorOn ? " ▋" : "  "}</span> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Dot({ color }) {
  return <span className={`inline-block h-3 w-3 rounded-full ${color}`} />;
}
