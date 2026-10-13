import { ArrowUp } from "lucide-react";
import { site } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-[0.65rem] text-faint">
          Designed &amp; built from scratch · Vite + React + Tailwind
        </p>
        <a href="#top" className="icon-btn" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
