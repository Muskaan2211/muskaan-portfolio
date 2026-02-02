// src/components/ContactSection.js
"use client";
import { useState } from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-14">
      <Header title="Contact" subtitle="Let’s connect." />

      {/* Top: unique contact tiles */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ContactTile
          label="Email"
          value="musugauba22@gmail.com"
          href="mailto:musugauba22@gmail.com"
          accent="from-sky-500 to-indigo-500"
          icon="✉️"
        />
        <ContactTile
          label="GitHub"
          value="github.com/Muskaan2211"
          href="https://github.com/Muskaan2211"
          accent="from-emerald-500 to-teal-500"
          icon="💻"
        />
        <ContactTile
          label="LinkedIn"
          value="linkedin.com/in/muskaan-gauba"
          href="https://www.linkedin.com/in/muskaan-gauba-475658237/"
          accent="from-fuchsia-500 to-pink-500"
          icon="🔗"
        />
        <ContactTile
          label="Phone"
          value="+1-602-743-2719"
          href="tel:+16027432719"
          accent="from-amber-500 to-orange-500"
          icon="📞"
        />
      </div>

      {/* Bottom CTA section (the one you liked) */}
      <div className="mt-10 rounded-3xl bg-[#0f1724] text-white overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2 gap-10 p-8 md:p-10 items-center relative">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />

          {/* Left */}
          <div>
            <h3 className="text-3xl font-semibold">Let’s build something real.</h3>
            <p className="mt-3 text-white/80 max-w-lg">
              I’m open to software engineering, backend, data engineering, and analyst roles.
              If you have a role or project, I’d love to hear about it.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Muskaan_resume_apple.pdf"
                download
                className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
              >
                Download Resume
              </a>
              <a
                href="mailto:musugauba22@gmail.com"
                className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10 transition"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Right box */}
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 text-[#061026] shadow-xl">
              <h4 className="text-lg font-semibold">Quick Message</h4>
              <p className="mt-2 text-sm text-[#061026]/70">
                This opens your email client.
              </p>
              <ContactForm />
              <div className="mt-4 text-xs text-[#061026]/60">
                Or call/text:{" "}
                <a className="underline" href="tel:+16027432719">
                  +1-602-743-2719
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactTile({ label, value, href, accent, icon }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group rounded-2xl border border-[#0f1724]/10 bg-white/70 backdrop-blur p-4 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-[#061026]/60">{label}</div>
          <div className="mt-1 font-semibold text-[#061026]">{value}</div>
        </div>
        <div className={`h-10 w-10 rounded-2xl bg-gradient-to-r ${accent} flex items-center justify-center`}>
          <span className="text-white">{icon}</span>
        </div>
      </div>
      <div className="mt-3 h-1 w-full rounded-full bg-[#0f1724]/10 overflow-hidden">
        <div className={`h-full w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r ${accent}`} />
      </div>
    </a>
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

function ContactForm() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const subject = encodeURIComponent("Portfolio contact from website");
  const body = encodeURIComponent((name ? `Hi, I'm ${name}.\n\n` : "") + msg);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:musugauba22@gmail.com?subject=${subject}&body=${body}`;
      }}
      className="mt-4"
    >
      <label className="text-xs">Name</label>
      <input
        className="mt-1 w-full rounded-md border border-[#0f1724]/10 px-3 py-2 text-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />

      <label className="text-xs mt-2 block">Message</label>
      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Write a short message"
        className="mt-1 w-full rounded-md border border-[#0f1724]/10 px-3 py-2 text-sm"
        rows={4}
      />

      <div className="mt-3 flex gap-3">
        <button className="rounded-md bg-[#0f1724] text-white px-4 py-2 text-sm">
          Email me
        </button>
        <button
          type="button"
          onClick={() => { setName(""); setMsg(""); }}
          className="rounded-md border border-[#0f1724]/10 px-4 py-2 text-sm"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
