import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase text-moss">
          Projetos selecionados
        </p>
        <h2 className="max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl text-balance">
          Casos em finanças, beleza, mídia e marcas de escala.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-moss-deep/80">
          Uma seleção de trabalhos públicos e experiências recentes. Detalhes
          confidenciais ficam no LinkedIn ou numa conversa.
        </p>

        <div className="mt-12 divide-y divide-moss/15 border-y border-moss/15">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-5 py-8 transition-colors hover:bg-card/40 md:grid-cols-[88px_1fr] md:gap-8 md:py-10"
            >
              <p className="font-display text-3xl text-honey md:pt-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-start">
                <div>
                  <h3 className="font-display text-2xl leading-snug text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-moss-deep/80">
                    {project.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-medium text-ink">{project.client}</p>
                  <p className="mt-1 text-sm text-moss-deep/65">{project.year}</p>
                  <ul className="mt-4 flex flex-wrap gap-2 md:justify-end">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs tracking-wide text-moss uppercase"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
