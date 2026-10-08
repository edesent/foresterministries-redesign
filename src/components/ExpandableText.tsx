"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Text that is clamped to a set number of lines. A "Read more" toggle only
 * appears when the text actually runs past the clamp, so short descriptions
 * stay clean and every card keeps the same height.
 */
export default function ExpandableText({
  text,
  lines = 2,
  className = "",
}: {
  text: string;
  lines?: 2 | 3 | 4;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);

  const clamp = { 2: "line-clamp-2", 3: "line-clamp-3", 4: "line-clamp-4" }[lines];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (open) return;
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, text]);

  return (
    <div>
      <p ref={ref} className={`${className} ${open ? "" : clamp}`}>
        {text}
      </p>
      {(overflows || open) && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brass-light hover:text-ivory transition-colors"
          aria-expanded={open}
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
