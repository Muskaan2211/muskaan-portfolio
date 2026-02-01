// src/app/page.js
"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EducationTimeline from "../components/EducationTimeline";
import SkillExplorer from "../components/SkillExplorer";
import ProjectsPath from "../components/ProjectsPath";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-[#0f1724] via-[#101a2b] to-[#eef2ff] text-[#061026]">
      {/* Global soft gradient glow */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-400/25 blur-[120px]" />
      <div className="absolute top-44 left-10 h-[360px] w-[360px] rounded-full bg-indigo-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-10 h-[420px] w-[420px] rounded-full bg-fuchsia-400/15 blur-[130px]" />
    </div>


      <Navbar />

      <Hero />

      <div className="mx-auto max-w-6xl px-6">
        {/* ORDER: Education → Skills → Projects */}
        <EducationTimeline />
        <SkillExplorer />
        <ProjectsPath />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
