// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-black/55">
        © {new Date().getFullYear()} Muskaan — Built with Next.js
      </div>
    </footer>
  );
}
