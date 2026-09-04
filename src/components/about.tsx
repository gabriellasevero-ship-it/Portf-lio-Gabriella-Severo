import type { CSSProperties } from "react";
import { profile, skills, education, clients } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Flex-grow ≈ logo aspect ratio so desktop can keep one uniform-height row. */
const CLIENT_GROW: Record<string, number> = {
  Natura: 7.3,
  Safra: 3.2,
  Pismo: 7.2,
  Fastcash: 4.2,
  "Itaú": 1.2,
  Santander: 5.7,
  Caixa: 3.8,
  Audi: 2.8,
  ESPN: 3.5,
  "Johnson & Johnson": 5.5,
  Vivo: 3.6,
};

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-signal md:text-sm">
            Sobre
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl text-balance">
            Design que aproxima pessoa, produto e negócio.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
            Já atuei em bancos, fintechs, varejo, mídia e beleza — sempre com
            olhar de arquitetura de informação, pesquisa e entrega prática. Hoje,
            como Design Lead na Natura &Co em São Paulo, ajudo times a construir
            serviços digitais para consultoras Natura e Avon.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-[0.18em] uppercase text-signal">
            Formação
          </h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.title} className="border-b border-ink/10 pb-4">
                <p className="font-medium text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-ink/55">
                  {item.school} · {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
        <h3 className="mb-5 text-xs font-semibold tracking-[0.18em] uppercase text-signal">
          Marcas e clientes
        </h3>
        <div className="client-logos">
          <div className="client-logos-track">
            <ul className="client-logos-set flex flex-nowrap items-center gap-x-6 md:w-full md:gap-x-4 lg:gap-x-5">
              {clients.map((client) => (
                <li
                  key={client.name}
                  style={
                    {
                      "--logo-grow": CLIENT_GROW[client.name] ?? 1,
                    } as CSSProperties
                  }
                  className="flex h-10 shrink-0 items-center justify-center md:min-w-0 md:shrink md:basis-0 md:[flex-grow:var(--logo-grow)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={cn(
                      "h-full w-auto object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-auto md:max-h-10 md:w-full",
                      client.compact && "max-h-[86%] max-w-[86%] md:max-w-full",
                    )}
                  />
                </li>
              ))}
            </ul>
            {/* Duplicate set for seamless mobile marquee; hidden from a11y and desktop. */}
            <ul
              aria-hidden="true"
              className="client-logos-dup flex flex-nowrap items-center gap-x-6 md:hidden"
            >
              {clients.map((client) => (
                <li
                  key={`${client.name}-dup`}
                  className="flex h-10 shrink-0 items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={client.logo}
                    alt=""
                    className={cn(
                      "h-full w-auto object-contain opacity-75 grayscale",
                      client.compact && "max-h-[86%] max-w-[86%]",
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
        <h3 className="mb-5 text-xs font-semibold tracking-[0.18em] uppercase text-signal">
          Competências
        </h3>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-ink/10 bg-card px-3 py-1.5 text-sm text-ink/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
