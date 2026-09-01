import Link from "next/link";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-signal md:text-sm">
          Projetos selecionados
        </p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl text-balance">
          Casos em finanças, beleza, mídia e marcas de escala.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink/65">
          Uma seleção de trabalhos públicos e experiências recentes. Detalhes
          confidenciais ficam no LinkedIn ou numa conversa.
        </p>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {projects.map((project, index) => {
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
                    <ul className="mt-4 flex flex-wrap gap-2 md:justify-end">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs font-medium tracking-wide text-signal uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            );

            if ("href" in project && project.href) {
              return (
                <Link
                  key={project.title}
                  href={project.href}
                  className="group grid gap-5 py-8 transition-colors hover:bg-card/70 md:grid-cols-[88px_1fr] md:gap-8 md:py-10"
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                key={project.title}
                className="grid gap-5 py-8 md:grid-cols-[88px_1fr] md:gap-8 md:py-10"
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
