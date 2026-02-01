// src/components/TypingTerminal.js
"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function TypingTerminal() {
  const scripts = useMemo(
    () => [
      {
        prompt: "$ whoami",
        lines: [
          "Muskaan — MS Computer Engineering @ ASU",
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

  // ref to the scrollable terminal container (important: we scroll this, not the page)
  const containerRef = useRef(null);

  // timing constants (readable)
  const PROMPT_SPEED = 45; // ms per char for prompts
  const OUTPUT_SPEED = 35; // ms per char for outputs
  const LINE_PAUSE = 550;  // pause after each line
  const BLOCK_PAUSE = 1200; // pause after each block
  const INIT_PAUSE = 700;  // initial startup pause

  const pushLine = (newLine) => setLines((prev) => [...prev.slice(1), newLine]);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function typeToNewLine(text, speed = 45) {
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
        // slightly slower on spaces
        await sleep(text[i] === " " ? speed + 20 : speed);
      }
    }

    async function run() {
      pushLine("$ initializing…");
      await sleep(INIT_PAUSE);

      while (!cancelled) {
        for (const block of scripts) {
          if (cancelled) return;

          await typeToNewLine(block.prompt, PROMPT_SPEED);
          await sleep(LINE_PAUSE);

          for (const out of block.lines) {
            if (cancelled) return;
            await typeToNewLine(out, OUTPUT_SPEED);
            await sleep(LINE_PAUSE);
          }

          await sleep(BLOCK_PAUSE);
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

  // Auto-scroll the terminal container itself whenever `lines` update.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [lines]);

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

      {/* IMPORTANT: attach containerRef to this scrollable div */}
      <div ref={containerRef} className="h-56 overflow-auto p-4 font-mono text-sm leading-6">
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
