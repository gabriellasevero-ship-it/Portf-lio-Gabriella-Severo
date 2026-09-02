import { profile, skills, education, clients } from "@/data/portfolio";

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

        <div className="space-y-8">
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
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
        <h3 className="mb-6 text-xs font-semibold tracking-[0.18em] uppercase text-signal">
          Marcas e clientes
        </h3>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8 md:gap-y-10">
          {clients.map((client) => (
            <li key={client.name} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 w-auto max-w-[132px] object-contain opacity-65 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-9"
              />
            </li>
          ))}
        </ul>
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
