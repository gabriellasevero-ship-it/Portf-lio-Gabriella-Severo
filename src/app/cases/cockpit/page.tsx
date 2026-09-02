import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { cockpitCase } from "@/data/cases/cockpit";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: cockpitCase.title,
  description: cockpitCase.subtitle,
};

function CaseImage({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
}: {
  src?: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div
        className="mt-6 flex min-h-48 items-center justify-center border border-dashed border-ink/20 bg-card px-6 py-10 text-center text-sm text-ink/50"
        role="status"
      >
        Imagem indisponível.
      </div>
    );
  }

  return (
    <figure className="mt-6 overflow-hidden border border-ink/10 bg-card">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        priority={priority}
      />
      {caption ? (
        <figcaption className="border-t border-ink/10 px-4 py-3 text-sm text-ink/55">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function CockpitCasePage() {
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
                Case study · {cockpitCase.client}
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink md:text-6xl text-balance">
                {cockpitCase.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70 md:text-xl">
                {cockpitCase.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60">
                <p>
                  <span className="font-medium text-ink">Papel:</span>{" "}
                  {cockpitCase.role}
                </p>
                <p>
                  <span className="font-medium text-ink">Período:</span>{" "}
                  {cockpitCase.year}
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cockpitCase.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-ink/10 bg-card px-3 py-1.5 text-xs font-medium tracking-wide text-ink/75 uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-3xl text-base leading-relaxed text-ink/75 md:text-lg">
                {cockpitCase.summary}
              </p>
            </div>
          </header>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              01 · Premissas
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {cockpitCase.challenge.title}
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-2">
              {cockpitCase.challenge.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-t-2 border-signal pt-5"
                >
                  <span className="font-display text-2xl text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-ink/75">
                    {item}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-16">
              <h3 className="font-display text-2xl text-ink md:text-3xl">
                {cockpitCase.objectives.title}
              </h3>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/70">
                {cockpitCase.objectives.text}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cockpitCase.objectives.platforms.map((platform) => (
                  <li
                    key={platform}
                    className="rounded-md border border-ink/10 bg-card px-3 py-1.5 text-sm text-ink/75"
                  >
                    {platform}
                  </li>
                ))}
              </ul>
              <CaseImage
                src={cockpitCase.objectives.image}
                alt="Diagrama: Cockpit no centro de Plataforma Operacional, Plataforma Private, Intranet e SAF"
                width={1800}
                height={1246}
                priority
              />
            </div>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                02 · Legado
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {cockpitCase.legacy.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
                {cockpitCase.legacy.text}
              </p>

              <h3 className="mt-12 font-display text-2xl text-ink">
                {cockpitCase.legacy.mappingTitle}
              </h3>
              <p className="mt-2 max-w-3xl text-sm text-ink/55">
                {cockpitCase.legacy.mappingCaption}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cockpitCase.legacy.features.map((feature) => (
                  <div key={feature.name} className="border border-ink/10 p-4">
                    <p className="font-medium text-ink">{feature.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {feature.why}
                    </p>
                  </div>
                ))}
              </div>
              <CaseImage
                src={cockpitCase.legacy.mappingImage}
                alt="Tabela de mapeamento das funcionalidades mais usadas na Plataforma Operacional"
                caption={cockpitCase.legacy.mappingCaption}
                width={1800}
                height={1246}
              />

              <h3 className="mt-14 font-display text-2xl text-ink">
                {cockpitCase.legacy.accessTitle}
              </h3>
              <p className="mt-2 max-w-3xl text-sm text-ink/55">
                {cockpitCase.legacy.accessCaption}
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {cockpitCase.legacy.accessStats.map((stat) => (
                  <div key={stat.label} className="border-t border-ink/15 pt-4">
                    <p className="font-display text-3xl text-ink md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-ink/60">{stat.label}</p>
                  </div>
                ))}
              </div>
              <CaseImage
                src={cockpitCase.legacy.accessImage}
                alt="Tabela de acessos da Plataforma Operacional por módulo"
                caption={cockpitCase.legacy.accessCaption}
                width={1800}
                height={1246}
              />

              <div className="mt-14 grid gap-3 md:grid-cols-2">
                {cockpitCase.legacy.quotes.map((quote) => (
                  <blockquote
                    key={quote}
                    className="border-l-2 border-signal/60 bg-mist px-4 py-3 text-sm leading-relaxed text-ink/75"
                  >
                    “{quote}”
                  </blockquote>
                ))}
              </div>
              <CaseImage
                src={cockpitCase.legacy.quotesImage}
                alt="Balões com comentários do Private sobre Plataforma Operacional e SAF"
                caption={cockpitCase.legacy.quotesCaption}
                width={1800}
                height={1246}
              />

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {cockpitCase.legacy.screens.map((screen) => (
                  <CaseImage
                    key={screen.src}
                    src={screen.src}
                    alt={screen.alt}
                    caption={screen.caption}
                    width={1800}
                    height={1246}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              03 · Dificuldades
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {cockpitCase.earlyDifficulties.title}
            </h2>
            <ul className="mt-8 space-y-3">
              {cockpitCase.earlyDifficulties.items.map((item) => (
                <li key={item} className="flex gap-3 text-base text-ink/80">
                  <span className="text-signal">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <CaseImage
                src={cockpitCase.earlyDifficulties.prototypeImage}
                alt="Protótipo existente da tela do cliente do Cockpit"
                caption={cockpitCase.earlyDifficulties.prototypeCaption}
                width={1800}
                height={1246}
              />
              <CaseImage
                src={cockpitCase.earlyDifficulties.wireframeImage}
                alt="Wireframe da tela inicial do Cockpit"
                caption={cockpitCase.earlyDifficulties.wireframeCaption}
                width={1800}
                height={1246}
              />
            </div>
          </section>

          <section className="bg-moss-deep py-16 text-mist md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                04 · Research
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">
                {cockpitCase.research.title}
              </h2>
              <h3 className="mt-10 font-display text-2xl">
                {cockpitCase.research.goalTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {cockpitCase.research.goals.map((goal) => (
                  <li key={goal} className="flex gap-3 text-base text-mist/80">
                    <span className="text-signal">→</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-2xl">
                {cockpitCase.research.topicsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cockpitCase.research.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-md border border-mist/20 px-3 py-1.5 text-xs tracking-wide uppercase text-mist/80"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-2xl">
                {cockpitCase.research.recruitmentTitle}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-mist/75">
                {cockpitCase.research.recruitmentText}
              </p>
              <figure className="mt-6 overflow-hidden bg-mist">
                {cockpitCase.research.recruitmentImage ? (
                  <Image
                    src={cockpitCase.research.recruitmentImage}
                    alt="Tabela de recrutamento com 13 entrevistados, cargos e tempo de banco"
                    width={1800}
                    height={1246}
                    className="h-auto w-full"
                  />
                ) : (
                  <div
                    className="flex min-h-48 items-center justify-center px-6 py-10 text-center text-sm text-ink/50"
                    role="status"
                  >
                    Imagem de recrutamento indisponível.
                  </div>
                )}
              </figure>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              05 · Achados
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {cockpitCase.research.findingsTitle}
            </h2>
            <ul className="mt-8 space-y-3">
              {cockpitCase.research.findings.map((finding) => (
                <li key={finding} className="flex gap-3 text-base text-ink/75">
                  <span className="text-signal">→</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-display text-2xl text-ink">
              {cockpitCase.research.usabilityTitle}
            </h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-t-2 border-signal pt-5">
                <h4 className="text-sm font-semibold tracking-wide text-signal uppercase">
                  Funcionou
                </h4>
                <ul className="mt-4 space-y-2 text-base text-ink/75">
                  {cockpitCase.research.worked.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t-2 border-ink/20 pt-5">
                <h4 className="text-sm font-semibold tracking-wide text-ink/50 uppercase">
                  Precisava melhorar
                </h4>
                <ul className="mt-4 space-y-2 text-base text-ink/75">
                  {cockpitCase.research.improve.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <CaseImage
              src={cockpitCase.research.usabilityImage}
              alt="Resultado do teste de usabilidade: o que passou e o que precisava melhorar"
              width={1800}
              height={1246}
            />

            <div className="mt-12">
              <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                Dificuldades nesta etapa
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cockpitCase.research.researchDifficulties.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink/10 bg-mist px-3 py-1.5 text-sm text-ink/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                06 · Priorização
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {cockpitCase.prioritization.title}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
                {cockpitCase.prioritization.text}
              </p>
              <ol className="mt-10 grid gap-4 md:grid-cols-2">
                {cockpitCase.prioritization.axes.map((axis, index) => (
                  <li
                    key={axis}
                    className="flex gap-4 border-t border-ink/15 pt-4"
                  >
                    <span className="font-display text-2xl text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-ink/75">
                      {axis}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-10 border border-ink/10 bg-mist p-6 md:p-8">
                <p className="text-xs font-semibold tracking-wide text-signal uppercase">
                  Dificuldades
                </p>
                <ul className="mt-3 space-y-2 text-base text-ink/75">
                  {cockpitCase.prioritization.difficulties.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              07 · Prototipação
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {cockpitCase.prototype.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/70">
              {cockpitCase.prototype.text}
            </p>
            <CaseImage
              src={cockpitCase.prototype.sitemapImage}
              alt="Mapa de informação do Cockpit do Gerente"
              caption={cockpitCase.prototype.sitemapCaption}
              width={1800}
              height={1246}
            />

            <div className="mt-14 space-y-12">
              {cockpitCase.prototype.screens.map((screen) => (
                <CaseImage
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  caption={screen.caption}
                  width={1600}
                  height={1600}
                />
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                Dificuldades nesta etapa
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cockpitCase.prototype.prototypeDifficulties.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink/10 bg-mist px-3 py-1.5 text-sm text-ink/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                08 · Piloto
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {cockpitCase.pilot.title}
              </h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {cockpitCase.pilot.items.map((item) => (
                  <div
                    key={item}
                    className="border-t-2 border-signal bg-card p-5"
                  >
                    <p className="text-base leading-relaxed text-ink/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="mt-14 font-display text-2xl text-ink">
                {cockpitCase.pilot.findingsTitle}
              </h3>
              <ul className="mt-6 space-y-3">
                {cockpitCase.pilot.findings.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-ink/80">
                    <span className="text-signal">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              09 · Aprendizados
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {cockpitCase.learnings.title}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {cockpitCase.learnings.items.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-14 max-w-4xl border-l-2 border-signal pl-6 font-display text-2xl leading-snug text-ink md:text-3xl text-balance">
              {cockpitCase.conclusion}
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
