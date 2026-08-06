"use client";

import { useState } from "react";

/**
 * A click-to-play YouTube player. The heavy YouTube iframe only loads after
 * someone actually clicks, so the page stays fast and YouTube can't hijack
 * the scroll on a phone.
 */
export default function VideoEmbed({
  videoId,
  title,
  poster,
}: {
  videoId: string;
  title: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = poster ?? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumb}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-95"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/25" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-crimson shadow-[0_16px_40px_-12px_rgba(194,35,51,0.9)] transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 text-ivory" fill="currentColor">
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
            </span>
            <span className="eyebrow text-brass-light text-[0.62rem]">{title}</span>
          </span>
        </button>
      )}
    </div>
  );
}
