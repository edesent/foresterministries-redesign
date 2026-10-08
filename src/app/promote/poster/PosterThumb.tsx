"use client";

import { useEffect, useRef, useState } from "react";
import PosterSheet, { DEFAULT_POSTER, type PosterData } from "./PosterSheet";

/** The real poster, scaled down to fit its box — a preview that can't drift from the poster itself. */
export default function PosterThumb({ data }: { data: Partial<PosterData> }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / 816));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={box} className="relative aspect-[8.5/11] w-full overflow-hidden" aria-hidden="true">
      <div className="absolute left-0 top-0 origin-top-left" style={{ transform: `scale(${scale})` }}>
        <PosterSheet data={{ ...DEFAULT_POSTER, ...data }} />
      </div>
    </div>
  );
}
