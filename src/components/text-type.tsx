"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface TextTypeProps extends HTMLAttributes<HTMLElement> {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  /** Start when visible; leave and return to restart the typing. */
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TextType({
  text,
  as: Component = "span",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps) {
  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );
  const firstText = textArray[0] ?? "";

  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [animate, setAnimate] = useState(false);
  const [runId, setRunId] = useState(0);
  const containerRef = useRef<HTMLSpanElement | null>(null);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const resetTyping = useCallback(() => {
    setDisplayedText("");
    setCurrentCharIndex(0);
    setIsDeleting(false);
    setCurrentTextIndex(0);
    setRunId((id) => id + 1);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (prefersReducedMotion()) {
        setDisplayedText(firstText);
        setCurrentCharIndex(firstText.length);
        setAnimate(false);
        setIsVisible(true);
        return;
      }

      resetTyping();
      setAnimate(true);
      if (!startOnVisible) setIsVisible(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [firstText, resetTyping, startOnVisible]);

  useEffect(() => {
    if (!startOnVisible) return;
    const node = containerRef.current;
    if (!node) return;

    // Watch the whole hero so leaving/returning to #topo restarts typing.
    const root = node.closest("#topo") ?? node;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (prefersReducedMotion()) {
            setDisplayedText(firstText);
            setIsVisible(true);
            setAnimate(false);
            return;
          }

          if (entry.isIntersecting) {
            resetTyping();
            setAnimate(true);
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setAnimate(false);
            setDisplayedText("");
            setCurrentCharIndex(0);
            setIsDeleting(false);
            setCurrentTextIndex(0);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [startOnVisible, firstText, resetTyping]);

  useEffect(() => {
    if (!animate || !isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;
    const currentText = textArray[currentTextIndex] ?? "";
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);

          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          onSentenceComplete?.(textArray[currentTextIndex], currentTextIndex);
          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else if (currentCharIndex < processedText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText(
              (prev) => prev + processedText[currentCharIndex]
            );
            setCurrentCharIndex((prev) => prev + 1);
          },
          variableSpeed ? getRandomSpeed() : typingSpeed
        );
      } else if (textArray.length > 1 || loop) {
        if (!loop && currentTextIndex === textArray.length - 1) return;
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    animate,
    runId,
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < (textArray[currentTextIndex]?.length ?? 0) ||
      isDeleting);

  const color =
    textColors.length > 0
      ? textColors[currentTextIndex % textColors.length]
      : undefined;

  return (
    <Component
      ref={containerRef as never}
      className={cn("inline whitespace-pre-wrap", className)}
      style={{
        color,
        ["--cursor-blink-duration" as string]: `${cursorBlinkDuration}s`,
      }}
      {...props}
    >
      {displayedText || "\u00A0"}
      {showCursor ? (
        <span
          aria-hidden
          className={cn(
            "text-type-cursor ml-0.5 inline-block translate-y-[-0.06em] text-[0.92em] font-medium",
            shouldHideCursor && "invisible",
            cursorClassName
          )}
        >
          {cursorCharacter}
        </span>
      ) : null}
    </Component>
  );
}
