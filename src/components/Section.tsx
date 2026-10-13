import { type ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <Reveal>
        <p className="mb-3 font-mono text-xs tracking-[0.3em] text-accent uppercase">
          {`// ${eyebrow}`}
        </p>
        <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl md:text-[2.75rem] md:leading-tight">
          {title}
        </h2>
        {sub && <p className="mt-4 max-w-2xl text-muted">{sub}</p>}
      </Reveal>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
