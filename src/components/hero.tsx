import Image from "next/image";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="relative bg-mist">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grain"
          >
            <div className="animate-float absolute -left-16 top-20 h-64 w-64 rounded-[2rem] bg-signal/20 blur-3xl" />
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src={profile.photo}
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover object-[center_18%]"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/20 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-8 px-5 pb-14 pt-24 md:grid-cols-2 md:gap-10 md:px-8 md:pb-0 md:pt-20">
        <div className="max-w-xl">
          <p className="animate-rise mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-signal md:text-sm">
            {profile.role} · {profile.company}
          </p>
          <h1 className="animate-rise-delay-1 font-display text-[clamp(2.5rem,7.5vw,4.5rem)] leading-[0.95] text-ink text-balance">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 mt-5 text-base leading-relaxed text-ink/70 md:mt-6 md:text-xl">
            {profile.headline}
          </p>
          <div className="animate-rise-delay-3 mt-7 flex flex-wrap items-center gap-3 md:mt-8">
            <Button asChild size="lg" className="h-11 rounded-md px-6 text-base">
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/15 bg-card/80 px-6 text-base backdrop-blur-sm"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Conversar no LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-rise-delay-2 relative md:hidden">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              fill
              priority
              sizes="90vw"
              className="object-cover object-[center_18%]"
            />
          </div>
        </div>

        <span className="sr-only">
          Foto de perfil de {profile.name}
        </span>
      </div>
    </section>
  );
}
