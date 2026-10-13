import { skillGroups } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          The <span className="text-gradient">toolkit</span>
        </>
      }
      sub="Grouped by where I use them — not a wall of logos."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={(i % 3) * 70} className="h-full">
            <article className="card h-full p-5 sm:p-6">
              <h3 className="font-mono text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                {g.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span key={s} className="chip !text-fg/90">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
