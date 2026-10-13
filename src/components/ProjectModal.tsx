import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "../data/content";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // Enter animation + scroll lock + focus management
  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true));
    const prev = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
      prev?.focus();
    };
  }, []);

  const close = () => {
    if (closing) return;
    setClosing(true);
    setOpen(false);
    setTimeout(onClose, 280);
  };

  // Esc + focus trap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const m = project.modal;

  return (
    <div
      ref={overlayRef}
      className={`modal-overlay ${open && !closing ? "open" : ""}`}
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) close();
      }}
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — case study`}
        tabIndex={-1}
        className="modal-panel relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-line-strong bg-[var(--surface-2)] p-6 shadow-2xl shadow-black/50 outline-none sm:p-9"
      >
        <button
          onClick={close}
          className="icon-btn absolute top-4 right-4"
          aria-label="Close case study"
        >
          <X size={17} />
        </button>

        <p className="font-mono text-xs tracking-widest text-faint">
          {project.year} · {project.categories.join(" / ")}
        </p>
        <h3 className="font-display mt-2 pr-10 text-2xl font-bold text-fg sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 text-muted">{project.tagline}</p>
        <p className="mt-2 font-mono text-xs text-accent">{project.impact}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-7">
          <section>
            <h4 className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
              Problem
            </h4>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{m.problem}</p>
          </section>

          <section>
            <h4 className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
              Approach
            </h4>
            <ul className="mt-2.5 space-y-2">
              {m.approach.map((a) => (
                <li
                  key={a.slice(0, 32)}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          {m.architecture && (
            <section>
              <h4 className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
                Architecture
              </h4>
              <p className="mt-2.5 rounded-xl border border-line bg-[var(--bg)] p-4 font-mono text-xs leading-relaxed text-muted">
                {m.architecture}
              </p>
            </section>
          )}

          <section>
            <h4 className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
              Results
            </h4>
            <ul className="mt-2.5 space-y-2">
              {m.results.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                  {r}
                </li>
              ))}
            </ul>
          </section>

          <p className="border-t border-line pt-5 text-sm text-faint">
            <span className="font-semibold text-fg">Role:</span> {m.role}
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-5 !py-2.5 text-sm"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !px-5 !py-2.5 text-sm"
            >
              <Github size={15} /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
