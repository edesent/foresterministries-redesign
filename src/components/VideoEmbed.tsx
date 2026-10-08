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
  duration,
}: {
  videoId: string;
  title: string;
  poster?: string;
  /** Optional running time shown on the play overlay, e.g. "2 min". */
  duration?: string;
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
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/20" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <span className="relative flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center">
              {/* Soft pulse so the eye lands on the play button */}
              <span className="absolute inset-0 rounded-full bg-crimson/60 animate-ping motion-reduce:animate-none" />
              <span className="absolute -inset-2 rounded-full ring-2 ring-ivory/30" />
              <span className="relative flex h-full w-full items-center justify-center rounded-full bg-crimson shadow-[0_20px_50px_-12px_rgba(194,35,51,0.95)] transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1.5 h-9 w-9 sm:h-12 sm:w-12 text-ivory"
                  fill="currentColor"
                >
                  <path d="M8 5.5v13l11-6.5-11-6.5z" />
                </svg>
              </span>
            </span>
            <span className="flex items-center gap-2.5 rounded-full bg-ink/70 backdrop-blur-sm px-4 py-2 ring-1 ring-ivory/15">
              <span className="eyebrow text-ivory text-[0.62rem] sm:text-[0.7rem]">
                Watch {title}
              </span>
              {duration && (
                <>
                  <span className="h-3 w-px bg-ivory/30" />
                  <span className="eyebrow text-brass-light text-[0.62rem] sm:text-[0.7rem]">
                    {duration}
                  </span>
                </>
              )}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
