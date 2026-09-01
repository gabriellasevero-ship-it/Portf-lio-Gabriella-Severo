import { profile, skills, education, clients } from "@/data/portfolio";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase text-moss">
            Sobre
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl text-balance">
            Design que aproxima pessoa, produto e negócio.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-moss-deep/85">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-moss-deep/75">
            Já atuei em bancos, fintechs, varejo, mídia e beleza — sempre com
            olhar de arquitetura de informação, pesquisa e entrega prática. Hoje,
            como Design Lead na Natura &Co em São Paulo, ajudo times a construir
            serviços digitais para consultoras Natura e Avon.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.14em] uppercase text-moss">
              Formação
            </h3>
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item.title} className="border-b border-moss/10 pb-4">
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-moss-deep/70">
                    {item.school} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.14em] uppercase text-moss">
              Marcas e clientes
            </h3>
            <p className="text-base leading-relaxed text-moss-deep/80">
              {clients.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-5 md:px-8">
        <h3 className="mb-5 text-sm font-semibold tracking-[0.14em] uppercase text-moss">
          Competências
        </h3>
        <ul className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border border-moss/15 bg-card/60 px-3.5 py-2 text-sm text-moss-deep"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
