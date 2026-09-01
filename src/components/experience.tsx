import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-signal md:text-sm">
          Experiência
        </p>
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl text-balance">
          Trajetória em produto, pesquisa e liderança de design.
        </h2>

        <ol className="mt-12 space-y-0">
          {experience.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className="group grid gap-4 border-t border-ink/10 py-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10"
            >
              <div>
                <p className="text-sm text-ink/50">{item.period}</p>
                <p className="mt-2 font-display text-xl text-ink md:text-2xl">
                  {item.company}
                </p>
                <p className="mt-1 text-sm font-medium text-signal">{item.role}</p>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-ink/70 md:pt-1 md:text-lg">
                {item.description}
              </p>
              <span className="sr-only">
                Posição {index + 1} de {experience.length}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
