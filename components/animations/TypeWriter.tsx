"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface Props {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  className?: string;
}

/**
 * Cycles through an array of words with a typewriter + blinking cursor effect.
 */
export function TypeWriter({
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 1800,
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const id = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(id);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const id = setTimeout(
      () => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(id);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs, reduce]);

  return (
    <span className={className}>
      {text}
      <span
        aria-hidden
        className="ml-[2px] inline-block w-[2px] rounded-full bg-[var(--color-accent)] align-middle"
        style={{
          height: "0.85em",
          opacity: blink ? 1 : 0,
          transition: "opacity 0.1s",
        }}
      />
    </span>
  );
}
