import { Suspense, lazy, useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projectFilters, projects, type Project } from "../data/content";
import { useTilt } from "../lib/tilt";
import Reveal from "./Reveal";
import Section from "./Section";

const ProjectModal = lazy(() => import("./ProjectModal"));

function ProjectCard({
  project,
  onOpen,
  delay,
}: {
  project: Project;
  onOpen: () => void;
  delay: number;
}) {
  const tiltRef = useTilt<HTMLDivElement>(5);
  const shownTech = project.tech.slice(0, 4);
  const extra = project.tech.length - shownTech.length;

  return (
    <Reveal delay={delay} className="h-full">
      <div ref={tiltRef} className="tilt h-full">
        <article className="card group flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[0.68rem] tracking-widest text-faint">
                {project.year} · {project.categories.join(" / ")}
              </p>
              <h3 className="font-display mt-1.5 text-xl font-semibold text-fg transition-colors group-hover:text-accent">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-1.5">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn !h-8 !w-8"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={15} />
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn !h-8 !w-8"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">{project.tagline}</p>
          <p className="mt-2 font-mono text-xs text-accent">{project.impact}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {shownTech.map((t) => (
              <span key={t} className="chip !py-1 !text-[0.65rem]">
                {t}
              </span>
            ))}
            {extra > 0 && <span className="chip !py-1 !text-[0.65rem]">+{extra}</span>}
          </div>

          <button
            onClick={onOpen}
            className="mt-5 inline-flex w-fit items-center gap-1.5 border-none bg-transparent p-0 font-mono text-xs font-semibold tracking-wide text-accent transition-transform duration-200 hover:translate-x-0.5"
            aria-haspopup="dialog"
          >
            CASE STUDY <ArrowUpRight size={13} />
          </button>
        </article>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="text-gradient">work</span>
        </>
      }
      sub="Systems and AI products I designed, built, and shipped — open a card for the full breakdown."
    >
      <div
        role="tablist"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-5 py-2 font-mono text-xs tracking-wide transition-all duration-250 ${
              filter === f
                ? "border-accent bg-accent-soft text-accent"
                : "border-line text-muted hover:border-line-strong hover:text-fg"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            delay={(i % 3) * 70}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>

      {active && (
        <Suspense fallback={null}>
          <ProjectModal project={active} onClose={() => setActive(null)} />
        </Suspense>
      )}
    </Section>
  );
}
