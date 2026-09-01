import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-[100svh] overflow-hidden grain"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -left-20 top-16 h-72 w-72 rounded-[2rem] bg-signal/20 blur-3xl md:h-[26rem] md:w-[26rem]" />
        <div className="animate-float-slow absolute bottom-0 right-[-3rem] h-80 w-80 rounded-[2rem] bg-leaf/20 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-mist to-transparent" />
        <svg
          className="absolute right-[-6%] top-[16%] hidden h-[72%] w-[52%] md:block"
          viewBox="0 0 640 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="220"
            y="90"
            width="280"
            height="280"
            rx="28"
            className="fill-signal/10 stroke-signal/40"
            strokeWidth="1.5"
          />
          <rect
            x="140"
            y="220"
            width="220"
            height="220"
            rx="22"
            className="fill-moss-deep/5 stroke-ink/20"
            strokeWidth="1.5"
          />
          <path
            className="animate-draw stroke-signal"
            d="M120 120H480V520H200"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeDasharray="480"
          />
          <circle cx="480" cy="120" r="6" className="fill-signal" />
          <circle cx="200" cy="520" r="6" className="fill-ink/50" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-24 md:justify-center md:px-8 md:pb-20 md:pt-24">
        <div className="max-w-3xl">
          <p className="animate-rise mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-signal md:text-sm">
            {profile.role} · {profile.company}
          </p>
          <h1 className="animate-rise-delay-1 font-display text-[clamp(2.6rem,8.5vw,5rem)] leading-[0.95] text-ink text-balance">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-moss-deep/75 md:mt-6 md:text-xl">
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
              className="h-11 rounded-md border-ink/15 bg-card/70 px-6 text-base backdrop-blur-sm"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Conversar no LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
