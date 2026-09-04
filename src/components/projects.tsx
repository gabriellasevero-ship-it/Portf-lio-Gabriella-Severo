"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const FEATURED_COUNT = 3;

function ProjectTags({
  tags,
  alignEnd = false,
}: {
  tags: string[];
  alignEnd?: boolean;
}) {
  return (
    <ul
      className={
        alignEnd
          ? "mt-4 flex flex-wrap gap-x-2 gap-y-1.5 pb-1 leading-5 md:justify-end"
          : "mt-4 flex flex-wrap gap-x-2 gap-y-1.5 pb-1 leading-5"
      }
    >
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs font-medium leading-5 tracking-wide text-signal uppercase last:mr-0"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = projects.slice(0, FEATURED_COUNT);
  const grid = projects.slice(FEATURED_COUNT);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-visible");
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="reveal reveal-delay-0 mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-signal md:text-sm">
          Projetos selecionados
        </p>
        <h2 className="reveal reveal-delay-1 max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl text-balance">
          Casos em finanças, beleza, mídia e marcas de escala.
        </h2>
        <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-lg text-ink/65">
          Uma seleção de trabalhos e experiências mais recentes.
        </p>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {featured.map((project, index) => {
            const content = (
              <>
                <p className="font-display text-2xl text-signal md:pt-1 md:text-3xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-start">
                  <div>
                    <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-signal md:text-2xl">
                      {project.title}
                      {"href" in project && project.href ? (
                        <span className="ml-2 text-sm font-sans font-medium tracking-normal text-signal">
                          Ver case →
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/65">
                      {project.description}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm font-medium text-ink">{project.client}</p>
                    <p className="mt-1 text-sm text-ink/50">{project.year}</p>
                    <ProjectTags tags={project.tags} alignEnd />
                  </div>
                </div>
              </>
            );

            const revealClass = cn(
              "reveal",
              index === 0 && "reveal-delay-3",
              index === 1 && "reveal-delay-4",
              index === 2 && "reveal-delay-5"
            );

            if ("href" in project && project.href) {
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className={cn(
                    revealClass,
                    "group grid gap-5 px-5 pt-8 pb-10 transition-colors hover:bg-card/70 md:grid-cols-[88px_1fr] md:gap-8 md:px-8 md:pt-10 md:pb-12"
                  )}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                key={project.title}
                className={cn(
                  revealClass,
                  "grid gap-5 px-5 pt-8 pb-10 md:grid-cols-[88px_1fr] md:gap-8 md:px-8 md:pt-10 md:pb-12"
                )}
              >
                {content}
              </article>
            );
          })}
        </div>

        {grid.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:mt-10 md:grid-cols-2">
            {grid.map((project, index) => (
              <article
                key={project.title}
                className={cn(
                  "reveal flex h-full min-h-min flex-col overflow-visible bg-background p-6 pb-8 md:p-8 md:pb-10",
                  index % 2 === 0 ? "reveal-delay-3" : "reveal-delay-4",
                  index >= 2 && (index % 2 === 0 ? "reveal-delay-5" : "reveal-delay-6")
                )}
              >
                <p className="font-display text-2xl text-signal md:text-3xl">
                  {String(FEATURED_COUNT + index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl leading-snug text-ink md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink/65">
                  {project.description}
                </p>
                <div className="mt-6 pb-1">
                  <p className="text-sm font-medium text-ink">{project.client}</p>
                  <p className="mt-1 text-sm text-ink/50">{project.year}</p>
                  <ProjectTags tags={project.tags} />
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
