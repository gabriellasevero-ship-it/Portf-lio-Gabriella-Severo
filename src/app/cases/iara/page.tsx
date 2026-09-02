import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { iaraCase } from "@/data/cases/iara";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: iaraCase.title,
  description: iaraCase.subtitle,
};

export default function IaraCasePage() {
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
              <div className="mt-8 grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                    Case study · {iaraCase.client}
                  </p>
                  <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl text-balance">
                    {iaraCase.title}
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70 md:text-xl">
                    {iaraCase.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60">
                    <p>
                      <span className="font-medium text-ink">Papel:</span>{" "}
                      {iaraCase.role}
                    </p>
                    <p>
                      <span className="font-medium text-ink">Período:</span>{" "}
                      {iaraCase.year}
                    </p>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {iaraCase.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-ink/10 bg-card px-3 py-1.5 text-xs font-medium tracking-wide text-ink/75 uppercase"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <figure className="overflow-hidden border border-ink/10 bg-moss-deep">
                  <Image
                    src={iaraCase.branding}
                    alt="Branding da Iara — Assistente de Consultoria de Beleza Natura e Avon"
                    width={1200}
                    height={600}
                    className="h-auto w-full"
                    priority
                  />
                </figure>
              </div>
              <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink/75 md:text-lg">
                {iaraCase.summary}
              </p>
            </div>
          </header>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              01 · Desafio
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {iaraCase.challenge.title}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { label: "Negócio", text: iaraCase.challenge.business },
                { label: "Problema", text: iaraCase.challenge.problem },
                { label: "Impacto", text: iaraCase.challenge.impact },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-t-2 border-signal pt-5"
                >
                  <h3 className="text-sm font-semibold tracking-wide text-signal uppercase">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="font-display text-2xl text-ink">
                {iaraCase.stockReality.title}
              </h3>
              <p className="mt-2 text-sm text-ink/55">
                {iaraCase.stockReality.caption}
              </p>
              <figure className="mt-6 overflow-hidden border border-ink/10 bg-card">
                <Image
                  src={iaraCase.stockReality.image}
                  alt={iaraCase.stockReality.caption}
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </figure>
            </div>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                02 · Público
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {iaraCase.audience.title}
              </h2>
              <p className="mt-4 text-ink/60">{iaraCase.audience.context}</p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="bg-moss-deep p-6 text-mist">
                  <p className="text-xs tracking-wide uppercase opacity-70">
                    Representatividade
                  </p>
                  <p className="mt-3 font-display text-3xl">
                    {iaraCase.audience.representativeness.cbs}
                  </p>
                  <p className="mt-2 text-sm text-mist/75">
                    {iaraCase.audience.representativeness.revenue}
                  </p>
                </div>
                <div className="bg-signal/15 p-6">
                  <p className="text-xs tracking-wide text-signal uppercase">
                    Perfil alvo
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {iaraCase.audience.target.label}
                  </p>
                  <p className="mt-3 font-display text-2xl text-ink">
                    {iaraCase.audience.target.cbs}
                  </p>
                  <p className="mt-2 text-sm text-ink/65">
                    {iaraCase.audience.target.revenue}
                  </p>
                </div>
                <div className="border border-ink/10 bg-card p-6">
                  <p className="text-xs tracking-wide text-ink/50 uppercase">
                    Segmento secundário
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {iaraCase.audience.secondary.label}
                  </p>
                  <p className="mt-3 font-display text-2xl text-ink">
                    {iaraCase.audience.secondary.cbs}
                  </p>
                  <p className="mt-2 text-sm text-ink/65">
                    {iaraCase.audience.secondary.revenue}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                  Ranking das dores sobre o estoque
                </h3>
                <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                  {iaraCase.audience.pains.map((pain, index) => (
                    <li
                      key={pain}
                      className="border border-ink/10 bg-mist px-4 py-3 text-sm text-ink/80"
                    >
                      <span className="font-display text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-1">{pain}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              03 · Research
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {iaraCase.research.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
              {iaraCase.research.insight}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/65">
              {iaraCase.research.reframing}
            </p>
            <blockquote className="mt-8 max-w-3xl border-l-2 border-signal pl-5 text-base leading-relaxed text-ink/80 md:text-lg">
              {iaraCase.research.hypothesis}
            </blockquote>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
              {iaraCase.research.metrics.map((metric) => (
                <div key={metric.label} className="border-t border-ink/15 pt-4">
                  <p className="font-display text-3xl text-ink md:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-ink/60">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-ink/10 bg-card p-6 md:p-8">
              <p className="text-xs font-semibold tracking-wide text-signal uppercase">
                Insight das escutas
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink/75 md:text-lg">
                {iaraCase.research.insightBox}
              </p>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {iaraCase.research.quotes.map((quote) => (
                <blockquote
                  key={quote}
                  className="border-l-2 border-signal/60 bg-mist px-4 py-3 text-sm leading-relaxed text-ink/75"
                >
                  “{quote}”
                </blockquote>
              ))}
            </div>

            <figure className="mt-12 overflow-hidden border border-ink/10 bg-card">
              <Image
                src={iaraCase.research.image}
                alt="Slide com métricas das escutas do projeto Iara"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </figure>
          </section>

          <section className="bg-moss-deep py-16 text-mist md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                04 · Método
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">
                {iaraCase.method.title}
              </h2>
              <p className="mt-4 text-signal">“{iaraCase.method.quote}”</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mist/80">
                {iaraCase.method.description}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {iaraCase.method.pillars.map((pillar) => (
                  <div key={pillar.title} className="border-t border-mist/20 pt-5">
                    <h3 className="font-display text-xl">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist/75">
                      {pillar.text}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {iaraCase.method.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-mist/20 px-3 py-1.5 text-xs tracking-wide uppercase text-mist/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <figure className="mt-12 overflow-hidden bg-mist">
                <Image
                  src={iaraCase.method.image}
                  alt="Diagrama do experimento Mágico de Oz da Iara"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </figure>

              <div className="mt-12">
                <h3 className="font-display text-2xl">Board de processo</h3>
                <p className="mt-2 max-w-2xl text-sm text-mist/70">
                  Discovery, hipóteses, jornada do experimento, métricas e MVP —
                  visão do trabalho de ponta a ponta no FigJam.
                </p>
                <figure className="mt-6 overflow-hidden bg-mist">
                  <Image
                    src={iaraCase.method.processBoard}
                    alt="Board FigJam do processo completo do projeto Iara"
                    width={2000}
                    height={1100}
                    className="h-auto w-full"
                  />
                </figure>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              05 · Resultados
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {iaraCase.funnel.title}
            </h2>
            <p className="mt-3 text-sm text-ink/50">{iaraCase.funnel.period}</p>

            <ol className="mt-10 space-y-3">
              {iaraCase.funnel.stages.map((stage) => (
                <li
                  key={stage.label}
                  className="flex flex-wrap items-center justify-between gap-3 border border-ink/10 bg-card px-5 py-4"
                >
                  <div>
                    <p className="font-medium text-ink">{stage.label}</p>
                    {stage.conversion ? (
                      <p className="mt-1 text-xs font-semibold tracking-wide text-signal uppercase">
                        Conversão {stage.conversion}
                      </p>
                    ) : null}
                  </div>
                  <p className="font-display text-3xl text-ink">{stage.value}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {iaraCase.funnel.observations.map((item) => (
                <div key={item.title} className="border border-ink/10 p-5">
                  <h3 className="text-sm font-semibold tracking-wide text-signal uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <figure className="mt-12 overflow-hidden border border-ink/10 bg-card">
              <Image
                src={iaraCase.funnel.image}
                alt="Funil de engajamento do experimento Iara"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
            </figure>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                06 · MVP
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {iaraCase.mvp.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
                {iaraCase.mvp.description}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {iaraCase.mvp.deliverables.map((item, index) => (
                  <div key={item.title} className="border-t border-ink/15 pt-5">
                    <p className="font-display text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/65">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                  Métricas de sucesso do MVP
                </h3>
                <ul className="mt-4 space-y-2">
                  {iaraCase.mvp.metrics.map((metric) => (
                    <li
                      key={metric}
                      className="flex gap-3 text-base text-ink/70"
                    >
                      <span className="text-signal">→</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <h3 className="font-display text-2xl text-ink">
                  Produto no WhatsApp
                </h3>
                <p className="mt-2 max-w-3xl text-base text-ink/65">
                  {iaraCase.mvp.whatsappCaption}
                </p>
                <figure className="mt-6 overflow-hidden border border-ink/10 bg-card">
                  <Image
                    src={iaraCase.mvp.whatsappImage}
                    alt="Fluxo conversacional da Iara no WhatsApp: cadastro por foto, reconhecimento e lucro"
                    width={1800}
                    height={900}
                    className="h-auto w-full"
                    priority
                  />
                </figure>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              07 · Aprendizados
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {iaraCase.learnings.title}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {iaraCase.learnings.items.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-14 max-w-4xl border-l-2 border-signal pl-6 font-display text-2xl leading-snug text-ink md:text-3xl text-balance">
              {iaraCase.conclusion}
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
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
