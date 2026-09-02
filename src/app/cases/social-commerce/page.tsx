import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { socialCommerceCase } from "@/data/cases/social-commerce";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: socialCommerceCase.title,
  description: socialCommerceCase.subtitle,
};

export default function SocialCommerceCasePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-20">
        <article>
          <header className="border-b border-ink/10 bg-mist">
            <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
              <Link
                href="/#projetos"
                className="text-sm font-medium text-ink/55 transition-colors hover:text-ink"
              >
                ← Projetos
              </Link>
              <p className="mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                Case study · {socialCommerceCase.client}
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl text-balance">
                {socialCommerceCase.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70 md:text-xl">
                {socialCommerceCase.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60">
                <p>
                  <span className="font-medium text-ink">Papel:</span>{" "}
                  {socialCommerceCase.role}
                </p>
                <p>
                  <span className="font-medium text-ink">Período:</span>{" "}
                  {socialCommerceCase.year}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {socialCommerceCase.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-ink/10 bg-card px-3 py-1.5 text-xs font-medium tracking-wide text-ink/75 uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink/75 md:text-lg">
                {socialCommerceCase.summary}
              </p>
            </div>
          </header>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              01 · Contexto
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {socialCommerceCase.commitment.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
              {socialCommerceCase.context.text}
            </p>
            <ol className="mt-8 space-y-4">
              {socialCommerceCase.commitment.items.map((item, index) => (
                <li key={item} className="flex gap-4 text-base text-ink/80">
                  <span className="font-display text-2xl text-signal">
                    {index + 1}
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ol>
            <figure className="mt-10 overflow-hidden border border-ink/10 bg-card">
              <Image
                src={socialCommerceCase.commitment.image}
                alt="Slide Nosso compromisso da Natura &Co"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </figure>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                02 · Problema
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {socialCommerceCase.problem.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
                {socialCommerceCase.problem.headline}
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {socialCommerceCase.problem.pillars.map((item) => (
                  <div key={item.title} className="border-t-2 border-signal pt-5">
                    <h3 className="font-display text-xl text-ink">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {socialCommerceCase.problem.experienceIssues.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink/10 bg-mist px-3 py-1.5 text-sm text-ink/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <figure className="mt-10 overflow-hidden border border-ink/10 bg-card">
                <Image
                  src={socialCommerceCase.problem.image}
                  alt="Slide com os pilares do potencial ainda não capturado na digitalização"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              03 · Proposta de valor
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {socialCommerceCase.valueFit.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/65">
              Extraído do Value Proposition Canvas: o encaixe principal é unificar
              canais e aliviar a operação manual da consultora.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="border border-ink/10 p-5">
                <h3 className="text-sm font-semibold tracking-wide text-signal uppercase">
                  Dores
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {socialCommerceCase.valueFit.pains.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-ink/10 p-5">
                <h3 className="text-sm font-semibold tracking-wide text-signal uppercase">
                  Ganhos
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {socialCommerceCase.valueFit.gains.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-ink/10 bg-signal/10 p-5">
                <h3 className="text-sm font-semibold tracking-wide text-signal uppercase">
                  Aliviadores
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {socialCommerceCase.valueFit.relievers.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-moss-deep py-16 text-mist md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                04 · Personas
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">
                {socialCommerceCase.personas.title}
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {socialCommerceCase.personas.items.map((persona) => (
                  <div
                    key={persona.name}
                    className="border border-mist/20 p-5"
                  >
                    <p className="text-xs tracking-wide text-signal uppercase">
                      {persona.share}
                    </p>
                    <h3 className="mt-2 font-display text-2xl">
                      {persona.name}
                    </h3>
                    <p className="mt-1 text-sm text-mist/70">{persona.type}</p>
                    <p className="mt-4 text-sm italic text-mist/90">
                      “{persona.quote}”
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-mist/75">
                      {persona.note}
                    </p>
                  </div>
                ))}
              </div>
              <figure className="mt-10 overflow-hidden bg-mist">
                <Image
                  src={socialCommerceCase.personas.image}
                  alt="Personas Tradicional, Versátil e Super Digital das Consultoras de Beleza"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              05 · Research
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {socialCommerceCase.research.title}
            </h2>
            <ul className="mt-8 space-y-3">
              {socialCommerceCase.research.findings.map((finding) => (
                <li key={finding} className="flex gap-3 text-base text-ink/75">
                  <span className="text-signal">→</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {socialCommerceCase.research.stats.map((stat) => (
                <div key={stat.label} className="border-t border-ink/15 pt-4">
                  <p className="font-display text-3xl text-ink">{stat.value}</p>
                  <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {socialCommerceCase.research.quotes.map((quote) => (
                <blockquote
                  key={quote}
                  className="border-l-2 border-signal/60 bg-mist px-4 py-3 text-sm leading-relaxed text-ink/75"
                >
                  “{quote}”
                </blockquote>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="border border-ink/10 p-4">
                <p className="font-display text-2xl text-ink">30</p>
                <p className="mt-1 text-sm text-ink/60">
                  {socialCommerceCase.research.numbers.founders}
                </p>
              </div>
              <div className="border border-ink/10 p-4">
                <p className="font-display text-2xl text-ink">283</p>
                <p className="mt-1 text-sm text-ink/60">
                  {socialCommerceCase.research.numbers.feedbacks}
                </p>
              </div>
              <div className="border border-ink/10 p-4">
                <p className="font-display text-2xl text-ink">30</p>
                <p className="mt-1 text-sm text-ink/60">
                  {socialCommerceCase.research.numbers.followUp}
                </p>
              </div>
              <div className="border border-ink/10 p-4">
                <p className="font-display text-2xl text-ink">5</p>
                <p className="mt-1 text-sm text-ink/60">
                  {socialCommerceCase.research.numbers.events}
                </p>
              </div>
            </div>

            <figure className="mt-8 overflow-hidden border border-ink/10 bg-card">
              <Image
                src={socialCommerceCase.research.numbers.image}
                alt="Números da pesquisa e acompanhamento do Social Commerce"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </figure>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                06 · Papel e processo
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {socialCommerceCase.roleDetail.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
                {socialCommerceCase.roleDetail.text}
              </p>
              <ol className="mt-10 grid gap-4 md:grid-cols-2">
                {socialCommerceCase.process.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 border-t border-ink/15 pt-4"
                  >
                    <span className="font-display text-2xl text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-ink/75">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
              <figure className="mt-10 overflow-hidden border border-ink/10 bg-card">
                <Image
                  src={socialCommerceCase.process.sitemapImage}
                  alt="Mapa de fluxos e arquitetura de informação do Social Commerce"
                  width={1800}
                  height={1000}
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              07 · Soluções
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {socialCommerceCase.solutions.title}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {socialCommerceCase.solutions.items.map((item) => (
                <div key={item.title} className="border-t border-ink/15 pt-5">
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="font-display text-2xl text-ink">
                {socialCommerceCase.solutions.panel.title}
              </h3>
              <p className="mt-2 text-ink/60">
                {socialCommerceCase.solutions.panel.subtitle}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {socialCommerceCase.solutions.panel.features.map((feature) => (
                  <div key={feature.title} className="border border-ink/10 p-4">
                    <p className="font-medium text-ink">{feature.title}</p>
                    <p className="mt-1 text-sm text-ink/65">{feature.text}</p>
                  </div>
                ))}
              </div>
              <figure className="mt-8 overflow-hidden border border-ink/10 bg-card">
                <Image
                  src={socialCommerceCase.solutions.panel.image}
                  alt="Painel de vendas do Social Commerce com módulos de gestão"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </figure>
            </div>

            <div className="mt-16">
              <h3 className="font-display text-2xl text-ink">
                Produto em movimento
              </h3>
              <p className="mt-2 max-w-3xl text-base text-ink/65">
                Em vez de telas estáticas, os vídeos mostram os fluxos reais de
                Minha Loja e Seller Center no celular da consultora.
              </p>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {socialCommerceCase.solutions.videos.map((video) => (
                  <figure key={video.src} className="space-y-3">
                    <div className="overflow-hidden border border-ink/10 bg-moss-deep">
                      <video
                        className="aspect-[9/16] h-auto w-full bg-black object-contain"
                        controls
                        playsInline
                        preload="metadata"
                        poster={video.poster}
                      >
                        <source src={video.src} type="video/mp4" />
                        Seu navegador não suporta vídeo HTML5.
                      </video>
                    </div>
                    <figcaption>
                      <p className="font-medium text-ink">{video.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/65">
                        {video.caption}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                08 · Resultados e aprendizados
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {socialCommerceCase.results.title}
              </h2>
              <ul className="mt-8 space-y-3">
                {socialCommerceCase.results.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-ink/80">
                    <span className="text-signal">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-2xl text-ink">
                {socialCommerceCase.learnings.title}
              </h3>
              <div className="mt-6 grid gap-8 md:grid-cols-3">
                {socialCommerceCase.learnings.items.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-display text-lg text-ink">{item.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-14 max-w-4xl border-l-2 border-signal pl-6 font-display text-2xl leading-snug text-ink md:text-3xl text-balance">
                {socialCommerceCase.conclusion}
              </blockquote>

              <div className="mt-12 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-11 rounded-md px-6">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    Conversar no LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-md px-6"
                >
                  <Link href="/#projetos">Voltar aos projetos</Link>
                </Button>
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
