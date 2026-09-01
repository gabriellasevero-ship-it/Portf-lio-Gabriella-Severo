import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative min-h-[100svh] overflow-hidden grain"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="animate-float absolute -left-24 top-24 h-72 w-72 rounded-full bg-leaf/25 blur-3xl md:h-96 md:w-96" />
        <div className="animate-float-slow absolute bottom-10 right-[-4rem] h-80 w-80 rounded-full bg-honey/20 blur-3xl md:h-[28rem] md:w-[28rem]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-mist to-transparent" />
        <svg
          className="absolute right-[-8%] top-[18%] hidden h-[70%] w-[55%] text-moss/25 md:block"
          viewBox="0 0 640 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animate-draw"
            d="M120 80C220 40 360 70 420 160C490 275 470 390 360 470C250 550 170 620 220 680"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="420"
          />
          <ellipse
            cx="430"
            cy="210"
            rx="88"
            ry="140"
            transform="rotate(28 430 210)"
            className="fill-moss/10 stroke-moss/30"
            strokeWidth="1"
          />
          <ellipse
            cx="330"
            cy="300"
            rx="70"
            ry="120"
            transform="rotate(-18 330 300)"
            className="fill-honey/10 stroke-honey/35"
            strokeWidth="1"
          />
          <ellipse
            cx="500"
            cy="360"
            rx="54"
            ry="96"
            transform="rotate(12 500 360)"
            className="fill-leaf/15 stroke-leaf/40"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-28">
        <div className="max-w-3xl">
          <p className="animate-rise mb-5 text-sm font-semibold tracking-[0.18em] uppercase text-moss">
            {profile.role} · {profile.company}
          </p>
          <h1 className="animate-rise-delay-1 font-display text-[clamp(3.2rem,12vw,6.75rem)] leading-[0.92] tracking-[-0.03em] text-ink text-balance">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-moss-deep/85 md:text-xl">
            {profile.headline}
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 rounded-full px-6 text-base">
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-moss/30 bg-card/50 px-6 text-base backdrop-blur-sm"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                Conversar no LinkedIn
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 hidden items-end justify-between gap-8 border-t border-moss/15 pt-6 text-sm text-moss-deep/70 md:flex">
          <p>{profile.location}</p>
          <p>Product Design · Liderança · UX Research</p>
          <p>{profile.years} anos em projetos digitais</p>
        </div>
      </div>
    </section>
  );
}
