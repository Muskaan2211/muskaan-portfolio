// src/components/Navbar.js
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <div className="text-xl font-semibold text-white">
            Muskaan
        </div>

          <div className="hidden sm:block text-xs text-white/60">
            MS Computer Engineering @ ASU
          </div>
        </div>

        <nav className="flex items-center gap-5 text-sm text-white/75">
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>

          <a
            href="/Muskaan_resume_apple.pdf"
            className="ml-1 rounded-full bg-white text-black px-4 py-2 text-xs font-semibold hover:opacity-90"
            download
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
