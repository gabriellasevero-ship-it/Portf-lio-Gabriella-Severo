import { Button } from "@/components/ui/button";
import { recommendations, profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-moss-deep px-6 py-12 text-mist md:px-12 md:py-16 grain">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 top-0 h-56 w-56 rounded-2xl bg-signal/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 bottom-0 h-48 w-48 rounded-2xl bg-leaf/20 blur-3xl"
          />

          <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-signal md:text-sm">
                Contato
              </p>
              <h2 className="font-display text-3xl leading-tight md:text-5xl text-balance">
                Vamos conversar sobre produto, liderança ou um próximo desafio.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/75 md:text-lg">
                Aberta a trocas sobre design de produto, gestão de times e
                experiências digitais em escala.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-md bg-signal px-7 text-base font-semibold text-ink hover:bg-signal/90"
                >
                  <a
                    href={profile.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp {profile.whatsapp.display}
                  </a>
                </Button>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 rounded-md border-mist/25 bg-transparent px-5 text-base text-mist hover:bg-mist/10 hover:text-mist"
                  >
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 rounded-md border-mist/25 bg-transparent px-5 text-base text-mist hover:bg-mist/10 hover:text-mist"
                  >
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <blockquote className="border-l-2 border-signal/50 pl-5">
              <p className="text-base leading-relaxed text-mist/85">
                “{recommendations[0].quote}”
              </p>
              <footer className="mt-4 text-sm text-signal">
                — {recommendations[0].author}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
