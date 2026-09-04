"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-mist/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/#topo"
          className="font-display text-lg tracking-tight text-ink md:text-xl"
        >
          Gabriella<span className="text-signal">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/65 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="rounded-md px-4">
            <a href={profile.whatsapp.href} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/80 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full bg-ink transition-transform",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-ink transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-ink transition-transform",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/80 bg-mist/95 px-5 py-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-md">
              <a href={profile.whatsapp.href} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
