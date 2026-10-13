import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { nav, site } from "../data/content";
import { useActiveSection } from "../lib/hooks";

const sectionIds = nav.map((n) => n.id);

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        setScrolled(window.scrollY > 24);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          aria-label="Primary"
          className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled || open
              ? "border-line bg-[var(--nav-bg)] shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="ring-grad font-display flex h-9 w-9 items-center justify-center rounded-xl bg-surface-2 text-sm font-bold text-gradient">
              SR
            </span>
            <span className="font-display hidden text-sm font-semibold tracking-tight text-fg sm:block">
              Sai Rohit
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link text-[0.83rem] font-medium ${
                    active === item.id ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="icon-btn"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href={`${import.meta.env.BASE_URL}${site.resumeFile}`}
              download
              className="btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex"
            >
              <Download size={15} /> Resume
            </a>
            <button
              className="icon-btn lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <div
          className={`mobile-menu mt-2 rounded-2xl border border-line bg-[var(--nav-bg)] p-3 shadow-xl shadow-black/30 backdrop-blur-xl lg:hidden ${
            open ? "open" : ""
          }`}
        >
          <ul className="grid gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === item.id
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:bg-surface-2 hover:text-fg"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${import.meta.env.BASE_URL}${site.resumeFile}`}
                download
                className="mt-1 flex items-center gap-2 rounded-xl bg-accent-soft px-4 py-2.5 text-sm font-semibold text-accent"
              >
                <Download size={15} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
