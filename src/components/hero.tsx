import Image from "next/image";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

function PortraitGraphics() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 320"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[168%] w-[168%] -translate-x-1/2 -translate-y-1/2"
      fill="none"
    >
      <ellipse
        cx="160"
        cy="160"
        rx="118"
        ry="118"
        className="animate-draw-ring stroke-ink/[0.12]"
        strokeWidth="1"
      />
      <ellipse
        cx="148"
        cy="168"
        rx="102"
        ry="78"
        className="animate-draw-ring-delay-1 stroke-signal/55"
        strokeWidth="1.1"
        transform="rotate(-18 148 168)"
      />
      <ellipse
        cx="172"
        cy="152"
        rx="88"
        ry="108"
        className="animate-draw-ring-delay-2 stroke-moss/45"
        strokeWidth="1.1"
        transform="rotate(22 172 152)"
      />
      <ellipse
        cx="160"
        cy="160"
        rx="72"
        ry="96"
        className="animate-draw-ring-delay-3 stroke-honey/50"
        strokeWidth="1"
        transform="rotate(-8 160 160)"
      />
      <circle
        cx="160"
        cy="160"
        r="64"
        className="animate-draw-ring stroke-ink/[0.08]"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-signal/12 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-16 h-64 w-64 rounded-full bg-moss/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center gap-10 px-5 pb-16 pt-28 md:flex-row md:items-center md:justify-between md:gap-16 md:px-8 md:pb-20 md:pt-24">
        <div className="order-2 max-w-xl text-center md:order-1 md:text-left">
          <p className="animate-rise mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-signal md:text-sm">
            {profile.role} · {profile.company}
          </p>
          <h1 className="animate-rise-delay-1 font-display text-[clamp(2.4rem,6.5vw,4.25rem)] leading-[0.96] text-ink text-balance">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/65 md:mx-0 md:mt-6 md:max-w-lg md:text-lg">
            {profile.headline}
          </p>
          <div className="animate-rise-delay-3 mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
            <Button asChild size="lg" className="h-11 rounded-md px-6 text-base">
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-ink/12 bg-card/70 px-6 text-base backdrop-blur-sm"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Conversar no LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="animate-rise-delay-2 order-1 md:order-2">
          <div className="relative mx-auto flex h-52 w-52 items-center justify-center md:h-60 md:w-60 lg:h-64 lg:w-64">
            <PortraitGraphics />
            <div className="relative z-10 h-36 w-36 overflow-hidden rounded-full ring-1 ring-ink/8 md:h-44 md:w-44 lg:h-48 lg:w-48">
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                fill
                priority
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                className="object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
