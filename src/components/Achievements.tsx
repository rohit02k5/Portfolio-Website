import { Award, ArrowUpRight, Users } from "lucide-react";
import { awards, leadership } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title={
        <>
          Honors &amp; <span className="text-gradient">leadership</span>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Awards grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {awards.map((a, i) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="icon-btn !h-9 !w-9 !cursor-default text-accent"
                    aria-hidden="true"
                  >
                    <Award size={15} />
                  </span>
                  <span className="chip !text-[0.65rem]">{a.year}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-fg">
                  {a.title}
                </h3>
                <p className="mt-1 text-xs text-faint">{a.org}</p>
                {a.detail && (
                  <p className="mt-2 text-xs leading-relaxed text-muted">{a.detail}</p>
                )}
              </>
            );
            return (
              <Reveal key={a.title} delay={(i % 2) * 60}>
                {a.link ? (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="card group block h-full p-5"
                    aria-label={`${a.title} — view certificate`}
                  >
                    {inner}
                    <span className="mt-3 inline-flex items-center gap-1 font-mono text-[0.65rem] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      CERTIFICATE <ArrowUpRight size={11} />
                    </span>
                  </a>
                ) : (
                  <article className="card h-full p-5">{inner}</article>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Leadership column */}
        <Reveal delay={120}>
          <article className="card h-full p-6">
            <h3 className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              <Users size={15} /> Positions of responsibility
            </h3>
            <ul className="mt-5 space-y-4">
              {leadership.map((l) => (
                <li
                  key={l.role + l.org}
                  className="flex items-start justify-between gap-3 border-b border-line pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-fg">{l.role}</p>
                    <p className="mt-0.5 text-xs text-faint">{l.org}</p>
                  </div>
                  <span className="chip shrink-0 !text-[0.62rem]">{l.period}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
