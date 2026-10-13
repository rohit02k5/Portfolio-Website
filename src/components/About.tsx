import { Sparkles } from "lucide-react";
import { about, stats } from "../data/content";
import { useCountUp, useInView } from "../lib/hooks";
import Reveal from "./Reveal";
import Section from "./Section";

function StatCard({
  value,
  decimals = 0,
  suffix = "",
  label,
  sub,
  delay,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sub?: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const n = useCountUp(value, inView, 1500, decimals);
  return (
    <Reveal delay={delay} className="h-full">
      <div ref={ref} className="card flex h-full flex-col justify-between gap-3 p-5">
        <span className="font-display text-3xl font-bold text-gradient sm:text-4xl">
          {decimals ? n.toFixed(decimals) : Math.round(n)}
          {suffix}
        </span>
        <div>
          <p className="text-sm font-semibold text-fg">{label}</p>
          {sub && <p className="mt-1 text-xs leading-relaxed text-faint">{sub}</p>}
        </div>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineering at the seam of{" "}
          <span className="text-gradient">ML &amp; systems</span>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Story — spans 2 cols */}
        <Reveal className="sm:col-span-2">
          <article className="card ring-grad flex h-full flex-col gap-4 p-6 sm:p-8">
            <span className="icon-btn !cursor-default text-accent" aria-hidden="true">
              <Sparkles size={17} />
            </span>
            <p className="font-display text-lg font-medium leading-snug text-fg sm:text-xl">
              {about.lead}
            </p>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </article>
        </Reveal>

        {/* Portrait */}
        <Reveal delay={100} className="sm:col-span-2">
          <figure className="card group relative h-full min-h-64 overflow-hidden p-0">
            <picture>
              <source
                srcSet={`${import.meta.env.BASE_URL}portrait.webp`}
                type="image/webp"
              />
              <img
                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                alt="Portrait of Swarna Venkata Sai Rohit"
                width={760}
                height={773}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </picture>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
              <span className="font-mono text-[0.65rem] tracking-[0.25em] text-white/80 uppercase">
                Sai Rohit · IIT Bhilai
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {stats.map((s, i) => (
          <StatCard
            key={s.label}
            value={s.value}
            decimals={"decimals" in s ? s.decimals : 0}
            suffix={"suffix" in s ? s.suffix : ""}
            label={s.label}
            sub={s.sub}
            delay={i * 70}
          />
        ))}
      </div>
    </Section>
  );
}
