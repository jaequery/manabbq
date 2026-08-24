import { useEffect } from "react";

/**
 * Reveals every `[data-reveal]` element as it enters the viewport. Elements are
 * unobserved once shown — the page settles rather than re-animating on scroll
 * back. If IntersectionObserver is unavailable, everything is shown at once.
 */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (typeof IntersectionObserver === "undefined") {
      for (const node of nodes) node.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);
}
