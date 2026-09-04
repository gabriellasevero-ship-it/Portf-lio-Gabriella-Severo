"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextType } from "@/components/text-type";
import { profile } from "@/data/portfolio";

function PortraitGraphics() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 320"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[175%] w-[175%] -translate-x-1/2 -translate-y-1/2"
      fill="none"
    >
      <g className="hero-rings-orbit" style={{ transformOrigin: "160px 160px" }}>
        <ellipse
          cx="160"
          cy="160"
          rx="118"
          ry="118"
          className="hero-ring stroke-ink/[0.12]"
          strokeWidth="1"
        />
        <ellipse
          cx="148"
          cy="168"
          rx="102"
          ry="78"
          className="hero-ring hero-ring-delay-1 stroke-signal/55"
          strokeWidth="1.1"
          transform="rotate(-18 148 168)"
        />
        <ellipse
          cx="172"
          cy="152"
          rx="88"
          ry="108"
          className="hero-ring hero-ring-delay-2 stroke-moss/45"
          strokeWidth="1.1"
          transform="rotate(22 172 152)"
        />
        <ellipse
          cx="160"
          cy="160"
          rx="72"
          ry="96"
          className="hero-ring hero-ring-delay-3 stroke-honey/50"
          strokeWidth="1"
          transform="rotate(-8 160 160)"
        />
        <circle
          cx="160"
          cy="160"
          r="64"
          className="hero-ring stroke-ink/[0.08]"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Start entrance animations after first paint so they are not already
    // finished while the page is still loading / blank.
    let inner = 0;
    const outer = window.requestAnimationFrame(() => {
      inner = window.requestAnimationFrame(() => {
        section.classList.add("motion-ready");
      });
    });

    return () => {
      window.cancelAnimationFrame(outer);
      window.cancelAnimationFrame(inner);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="topo"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute -left-24 top-24 h-80 w-80 rounded-full bg-signal/28 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-moss/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center gap-10 px-5 pb-16 pt-28 md:flex-row md:items-center md:justify-between md:gap-16 md:px-8 md:pb-20 md:pt-24">
        <div className="order-2 max-w-xl text-center md:order-1 md:text-left">
          <p className="hero-rise mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-signal md:text-sm">
            {profile.role} · {profile.company}
          </p>
          <h1
            aria-label={profile.name}
            className="hero-rise hero-rise-delay-1 font-display text-[clamp(2.4rem,6.5vw,4.25rem)] leading-[0.96] text-ink text-balance"
          >
            <TextType
              as="span"
              text={profile.name}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={50}
              loop={false}
              showCursor
              cursorCharacter="_"
              cursorBlinkDuration={1}
              cursorClassName="text-signal"
              initialDelay={200}
              startOnVisible
            />
          </h1>
          <p className="hero-rise hero-rise-delay-2 mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/65 md:mx-0 md:mt-6 md:max-w-lg md:text-lg">
            {profile.headline}
          </p>
          <div className="hero-rise hero-rise-delay-3 mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:justify-start">
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

        <div className="hero-rise hero-rise-delay-2 order-1 md:order-2">
          <div className="relative mx-auto flex h-60 w-60 items-center justify-center md:h-72 md:w-72 lg:h-80 lg:w-80">
            <PortraitGraphics />
            <div className="relative z-10 h-40 w-40 overflow-hidden rounded-full ring-1 ring-ink/8 md:h-52 md:w-52 lg:h-56 lg:w-56">
              <Image
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                fill
                priority
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 224px"
                className="object-cover object-[center_18%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
