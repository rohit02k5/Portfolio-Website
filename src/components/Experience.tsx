import { Award, Briefcase } from "lucide-react";
import { experience } from "../data/content";
import { useInView } from "../lib/hooks";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Where I've <span className="text-gradient">shipped</span>
        </>
      }
      sub="Four internships spanning integrations, real-time edge ML, platform engineering, and defence telemetry."
    >
      <div ref={ref} className="relative">
        {/* animated line */}
        <div
          aria-hidden="true"
          className={`timeline-line absolute top-1 bottom-1 left-[7px] w-px bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-[11px] ${inView ? "is-in" : ""}`}
        />
        <ol className="space-y-6 md:space-y-8">
          {experience.map((e, i) => (
            <li key={e.org} className="relative pl-8 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent/60 bg-bg md:h-[23px] md:w-[23px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent md:h-2 md:w-2" />
              </span>
              <Reveal delay={i * 60}>
                <article className="card p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">
                        {e.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-accent">
                        <Briefcase size={14} aria-hidden="true" /> {e.org}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="chip !text-fg">{e.period}</span>
                      {e.certificate && (
                        <a
                          href={e.certificate}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-opacity hover:opacity-75"
                        >
                          <Award size={13} /> Certificate ↗
                        </a>
                      )}
                    </div>
                  </div>
                  {e.tagline && (
                    <p className="mt-3 text-sm font-medium text-muted italic">
                      {e.tagline}
                    </p>
                  )}
                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p) => (
                      <li
                        key={p.slice(0, 40)}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
