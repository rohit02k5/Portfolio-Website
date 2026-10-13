import { ArrowUpRight, BookOpen, Quote } from "lucide-react";
import { publications } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Research"
      title={
        <>
          Publications &amp; <span className="text-gradient">research</span>
        </>
      }
    >
      <div className="grid gap-5">
        {publications.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <article className="card ring-grad flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="flex items-start gap-5">
                <span
                  className="icon-btn !h-12 !w-12 shrink-0 !cursor-default text-accent"
                  aria-hidden="true"
                >
                  <BookOpen size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted">{p.venue}</p>
                  <p className="mt-2 flex items-center gap-2 font-mono text-xs text-faint">
                    <Quote size={12} aria-hidden="true" /> {p.detail}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <span className="chip !text-fg">{p.year}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent transition-opacity hover:opacity-75"
                >
                  VIEW PAPER <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
