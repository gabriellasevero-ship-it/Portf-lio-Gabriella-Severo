import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { socialCommerceCase } from "@/data/cases/social-commerce";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${socialCommerceCase.title} — Case | Gabriella Marques Severo`,
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
              {socialCommerceCase.context.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">
              {socialCommerceCase.context.text}
            </p>
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                02 · Problema
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {socialCommerceCase.problem.title}
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {socialCommerceCase.problem.items.map((item) => (
                  <div key={item.title} className="border-t-2 border-signal pt-5">
                    <h3 className="font-display text-xl text-ink">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-ink/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              03 · Papel
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {socialCommerceCase.roleDetail.title}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">
              {socialCommerceCase.roleDetail.text}
            </p>
          </section>

          <section className="bg-moss-deep py-16 text-mist md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                04 · Processo
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-4xl">
                {socialCommerceCase.process.title}
              </h2>
              <ol className="mt-10 grid gap-4 md:grid-cols-2">
                {socialCommerceCase.process.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 border-t border-mist/20 pt-4"
                  >
                    <span className="font-display text-2xl text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-base leading-relaxed text-mist/85">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              05 · Soluções
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
          </section>

          <section className="bg-card/60 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
                06 · Resultados
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
                {socialCommerceCase.results.title}
              </h2>
              <ul className="mt-10 space-y-4">
                {socialCommerceCase.results.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border border-ink/10 bg-mist px-5 py-4 text-base text-ink/80"
                  >
                    <span className="text-signal">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-signal">
              07 · Aprendizados
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl text-ink md:text-4xl">
              {socialCommerceCase.learnings.title}
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {socialCommerceCase.learnings.items.map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/70">
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
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
