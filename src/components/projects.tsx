"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { projects, type Project, type ProjectCover } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const REVEAL = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
} as const;

/** Decorative squares that drift against the scroll behind the section. */
const DRIFTING_SQUARES = [
  { x: 6, y: 20, size: 12 },
  { x: 12, y: 32, size: 8 },
  { x: 8, y: 44, size: 6 },
  { x: 88, y: 18, size: 10 },
  { x: 92, y: 30, size: 14 },
  { x: 85, y: 42, size: 7 },
  { x: 90, y: 52, size: 5 },
  { x: 14, y: 56, size: 5 },
];

/** Square sets for the covers, cycled so any number of cases is covered. */
const MAGNETIC_SQUARE_SETS = [
  [
    { x: 5, y: 30, size: 16 },
    { x: 10, y: 42, size: 10 },
    { x: 3, y: 52, size: 7 },
    { x: 80, y: 70, size: 14 },
    { x: 85, y: 82, size: 9 },
    { x: 78, y: 60, size: 6 },
  ],
  [
    { x: 82, y: 55, size: 16 },
    { x: 88, y: 68, size: 10 },
    { x: 78, y: 72, size: 7 },
    { x: 85, y: 42, size: 6 },
    { x: 90, y: 80, size: 8 },
  ],
  [
    { x: 4, y: 24, size: 16 },
    { x: 10, y: 36, size: 10 },
    { x: 2, y: 44, size: 7 },
    { x: 78, y: 78, size: 14 },
    { x: 84, y: 88, size: 8 },
  ],
];

/** Pixels the cursor can pull a cover square, at the far edge of the cover. */
const MAGNET_PULL = 40;
const MAGNET_SPRING = { stiffness: 80, damping: 18, mass: 0.6 };

const PIXEL_COLUMNS = 12;
const PIXEL_ROWS = 8;

const pixelVariants = {
  hidden: (delay: { enter: number; leave: number }) => ({
    scale: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: EASE, delay: delay.leave },
  }),
  visible: (delay: { enter: number; leave: number }) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: 0.25, ease: EASE, delay: delay.enter },
  }),
};

type CaseProject = Project & { href: string; cover: ProjectCover };

function isCaseProject(project: Project): project is CaseProject {
  return Boolean(project.href && project.cover);
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 pb-1 leading-5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs font-medium leading-5 tracking-wide text-signal uppercase last:mr-0"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function DriftingSquare({
  square,
  index,
  scrollProgress,
}: {
  square: (typeof DRIFTING_SQUARES)[number];
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const drift = useTransform(scrollProgress, [0, 1], [0, -(80 + index * 30)]);
  const y = useSpring(drift, { stiffness: 40, damping: 20 });

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${square.x}%`,
        top: `${square.y}%`,
        width: square.size,
        height: square.size,
        y: reduceMotion ? 0 : y,
      }}
    >
      <motion.div
        className={
          index % 3 === 0 ? "h-full w-full bg-signal/30" : "h-full w-full bg-ink/12"
        }
        animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
        transition={{
          duration: 3 + index * 0.4,
          ease: "easeInOut",
          repeat: Infinity,
          delay: index * 0.3,
        }}
      />
    </motion.div>
  );
}

/** Grid of blocks that dissolves over the cover on hover, in a diagonal sweep. */
function PixelCurtain({ visible }: { visible: boolean }) {
  const reduceMotion = useReducedMotion();
  const rows = Array.from({ length: PIXEL_ROWS }, (_, row) => row);
  const columns = Array.from({ length: PIXEL_COLUMNS }, (_, column) => column);

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 z-10"
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
    >
      {rows.map((row) =>
        columns.map((column) => (
          <motion.span
            key={`${row}-${column}`}
            className="absolute block bg-ink/85"
            style={{
              left: `${(column * 100) / PIXEL_COLUMNS}%`,
              top: `${(row * 100) / PIXEL_ROWS}%`,
              width: `${100 / PIXEL_COLUMNS}%`,
              height: `${100 / PIXEL_ROWS}%`,
            }}
            variants={pixelVariants}
            custom={
              reduceMotion
                ? { enter: 0, leave: 0 }
                : {
                    enter: (row + column) * 0.018,
                    leave:
                      (PIXEL_ROWS - row + (PIXEL_COLUMNS - column)) * 0.012,
                  }
            }
          />
        )),
      )}
    </motion.div>
  );
}

function MagneticSquare({
  square,
  pointerX,
  pointerY,
  still,
}: {
  square: { x: number; y: number; size: number };
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  still: boolean;
}) {
  const pullX = useTransform(
    pointerX,
    (value) => (value - square.x / 100) * MAGNET_PULL,
  );
  const pullY = useTransform(
    pointerY,
    (value) => (value - square.y / 100) * MAGNET_PULL,
  );
  const x = useSpring(pullX, MAGNET_SPRING);
  const y = useSpring(pullY, MAGNET_SPRING);

  return (
    <motion.span
      aria-hidden
      className="absolute z-20 block bg-signal"
      style={{
        left: `${square.x}%`,
        top: `${square.y}%`,
        width: square.size,
        height: square.size,
        x: still ? 0 : x,
        y: still ? 0 : y,
      }}
    />
  );
}

function CaseCard({
  project,
  number,
  index,
  wide,
}: {
  project: CaseProject;
  number: string;
  index: number;
  wide: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const squares = MAGNETIC_SQUARE_SETS[index % MAGNETIC_SQUARE_SETS.length];

  const trackPointer = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left) / bounds.width);
      pointerY.set((event.clientY - bounds.top) / bounds.height);
    },
    [pointerX, pointerY],
  );

  const releasePointer = useCallback(() => {
    setHovered(false);
    pointerX.set(0.5);
    pointerY.set(0.5);
  }, [pointerX, pointerY]);

  return (
    <motion.article
      {...REVEAL}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
      className={wide ? "md:col-span-2" : undefined}
    >
      <Link
        href={project.href}
        className="group flex h-full flex-col border border-ink/10 bg-card"
        onPointerMove={trackPointer}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={releasePointer}
      >
        <div
          className={
            wide
              ? "relative aspect-[4/3] overflow-hidden md:aspect-[16/9]"
              : "relative aspect-[4/3] overflow-hidden"
          }
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes={
              wide
                ? "(max-width: 768px) 100vw, 1088px"
                : "(max-width: 768px) 100vw, 560px"
            }
            style={{ objectPosition: project.cover.position }}
            className="object-cover"
          />

          <PixelCurtain visible={hovered} />

          {squares.map((square) => (
            <MagneticSquare
              key={`${square.x}-${square.y}`}
              square={square}
              pointerX={pointerX}
              pointerY={pointerY}
              still={Boolean(reduceMotion)}
            />
          ))}

          {/* Solid accent instead of an outline so it reads over any cover. */}
          <span
            aria-hidden
            className="absolute right-4 top-4 z-30 flex h-7 w-7 items-center justify-center bg-signal text-xs text-ink"
          >
            +
          </span>

          <motion.span
            aria-hidden
            className="absolute inset-0 z-30 flex items-center justify-center font-display text-lg text-mist md:text-xl"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{
              duration: 0.3,
              ease: EASE,
              delay: hovered ? 0.18 : 0,
            }}
          >
            Ver case →
          </motion.span>

          <div className="absolute bottom-0 left-0 z-40 max-w-[70%] bg-card px-4 pb-3 pt-2.5">
            <p className="font-display text-2xl text-signal md:text-3xl">
              {number}
            </p>
            <p className="mt-1 text-sm font-medium text-ink">{project.client}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-7 pt-5 md:px-6 md:pb-8">
          <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-signal md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 flex-1 text-base leading-relaxed text-ink/65">
            {project.description}
          </p>
          <div className="mt-5">
            <p className="text-sm text-ink/50">{project.year}</p>
            <ProjectTags tags={project.tags} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cases = projects.filter(isCaseProject);
  const others = projects.filter((project) => !isCaseProject(project));

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative scroll-mt-24 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden overflow-hidden xl:block"
      >
        {DRIFTING_SQUARES.map((square, index) => (
          <DriftingSquare
            key={`${square.x}-${square.y}`}
            square={square}
            index={index}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div {...REVEAL} transition={{ duration: 0.7, ease: EASE }}>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-signal md:text-sm">
            Projetos selecionados
          </p>
          <h2 className="max-w-2xl font-display text-3xl leading-tight text-ink md:text-5xl text-balance">
            Casos em finanças, beleza, mídia e marcas de escala.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-ink/65">
            Uma seleção de trabalhos e experiências mais recentes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cases.map((project, index) => (
            <CaseCard
              key={project.title}
              project={project}
              number={String(index + 1).padStart(2, "0")}
              index={index}
              wide={index === 0}
            />
          ))}
        </div>

        {others.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
            {others.map((project, index) => (
              <motion.article
                key={project.title}
                {...REVEAL}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: (index % 2) * 0.1,
                }}
                className="flex h-full min-h-min flex-col overflow-visible bg-background p-6 pb-8 md:p-8 md:pb-10"
              >
                <p className="font-display text-2xl text-signal md:text-3xl">
                  {String(cases.length + index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-xl leading-snug text-ink md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink/65">
                  {project.description}
                </p>
                <div className="mt-6 pb-1">
                  <p className="text-sm font-medium text-ink">
                    {project.client}
                  </p>
                  <p className="mt-1 text-sm text-ink/50">{project.year}</p>
                  <ProjectTags tags={project.tags} />
                </div>
              </motion.article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
