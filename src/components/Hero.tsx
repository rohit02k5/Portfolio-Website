import { Download, FolderGit2, Send } from "lucide-react";
import { site } from "../data/content";
import { useTypewriter } from "../lib/hooks";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  const typed = useTypewriter(site.roles);

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Backdrop: aurora blobs + grid, transform-only animation */}
      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
        <div className="grid-lines" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8">
        <p
          className="hero-in chip mb-7 !text-[0.72rem]"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {site.badge}
        </p>

        <h1 className="font-display font-bold tracking-tight">
          <span
            className="hero-in block font-mono text-sm font-normal tracking-[0.35em] text-muted uppercase sm:text-base"
            style={{ animationDelay: "60ms" }}
          >
            Swarna Venkata
          </span>
          <span
            className="hero-in mt-2 block text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.95] text-fg"
            style={{ animationDelay: "140ms" }}
          >
            Sai <span className="text-gradient">Rohit</span>
          </span>
        </h1>

        <p
          className="hero-in font-display mt-6 text-xl font-medium text-fg sm:text-2xl"
          style={{ animationDelay: "220ms" }}
        >
          {site.headline}
        </p>

        <p
          className="hero-in mt-3 h-6 font-mono text-sm text-accent sm:text-base"
          style={{ animationDelay: "300ms" }}
          aria-live="polite"
        >
          <span className="text-faint">&gt;_</span>{" "}
          <span className="type-caret">{typed}</span>
        </p>

        <p
          className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "380ms" }}
        >
          {site.valueProp}
        </p>

        <div
          className="hero-in mt-9 flex flex-wrap items-center justify-center gap-3.5"
          style={{ animationDelay: "460ms" }}
        >
          <a href="#projects" className="btn-primary">
            <FolderGit2 size={17} /> View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}${site.resumeFile}`}
            download
            className="btn-ghost"
          >
            <Download size={17} /> Download Resume
          </a>
          <a href="#contact" className="btn-ghost">
            <Send size={16} /> Contact Me
          </a>
        </div>

        <div
          className="hero-in mt-8 flex items-center gap-2.5"
          style={{ animationDelay: "540ms" }}
        >
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="icon-btn"
              aria-label={s.label}
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Credibility marquee */}
      <div className="relative z-10 pb-10">
        <p className="mb-4 text-center font-mono text-[0.65rem] tracking-[0.3em] text-faint uppercase">
          Built &amp; learned at
        </p>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {site.marquee.map((name) => (
                  <span
                    key={`${dup}-${name}`}
                    className="font-display mx-8 flex items-center gap-8 text-sm font-medium whitespace-nowrap text-faint"
                  >
                    {name}
                    <span className="text-accent/50">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
