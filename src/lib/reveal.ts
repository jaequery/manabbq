import type { CSSProperties } from "react";

/** Generous stagger between elements in the same reveal group, per the brief. */
const STAGGER_MS = 90;

/**
 * Marks an element for the scroll reveal: 12px fade-up over 400ms, delayed by
 * its position in the group. Under `prefers-reduced-motion` the CSS drops the
 * transition entirely and the element is simply present.
 */
export function reveal(index = 0): { "data-reveal": string; style: CSSProperties } {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${index * STAGGER_MS}ms` } as CSSProperties,
  };
}
