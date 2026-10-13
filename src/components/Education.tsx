import { GraduationCap } from "lucide-react";
import { education } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Academic <span className="text-gradient">foundation</span>
        </>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 80} className="h-full">
            <article
              className={`card flex h-full flex-col gap-4 p-6 ${e.current ? "ring-grad" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className="icon-btn !cursor-default text-accent" aria-hidden="true">
                  <GraduationCap size={17} />
                </span>
                <span className="chip">{e.period}</span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-fg">
                  {e.school}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{e.degree}</p>
              </div>
              <div className="mt-auto flex items-center gap-2">
                <span className="font-display text-2xl font-bold text-gradient">
                  {e.grade}
                </span>
                {e.detail && (
                  <span className="font-mono text-[0.65rem] text-faint">
                    · {e.detail}
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
