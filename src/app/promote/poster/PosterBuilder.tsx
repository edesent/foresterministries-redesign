"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import PosterSheet, {
  DEFAULT_POSTER,
  EVENT_KINDS,
  POSTER_PHOTOS,
  type PosterData,
} from "./PosterSheet";

/**
 * Fill-in-the-blanks poster maker. Everything typed is mirrored into the
 * page's address (?venue=…&date=…), so "Copy link" hands a church — or
 * Stephen, sending one to a church — a poster that is already filled in.
 */

const KEYS = Object.keys(DEFAULT_POSTER) as (keyof PosterData)[];

const KIND_LABELS: Record<string, string> = {
  concert: "Evening concert",
  afternoon: "Afternoon concert",
  sunday: "Sunday service",
  revival: "Revival meeting",
  family: "Family / children's event",
  banquet: "Banquet",
};

const field =
  "w-full rounded-lg border border-ivory/15 bg-ink/60 px-3.5 py-2.5 text-[0.95rem] text-ivory placeholder:text-ivory/30 outline-none transition focus:border-brass/60 focus:ring-2 focus:ring-brass/20";
const labelCls = "mb-1.5 block text-[0.8rem] font-medium text-ivory/75";

export default function PosterBuilder() {
  return (
    <Suspense fallback={<Builder initial={DEFAULT_POSTER} />}>
      <BuilderFromUrl />
    </Suspense>
  );
}

function BuilderFromUrl() {
  const params = useSearchParams();
  const initial = { ...DEFAULT_POSTER };
  for (const k of KEYS) {
    const v = params.get(k);
    if (v !== null) initial[k] = v.slice(0, 200);
  }
  return <Builder initial={initial} />;
}

function Builder({ initial }: { initial: PosterData }) {
  const [data, setData] = useState<PosterData>(initial);
  const [copied, setCopied] = useState(false);
  const set = (k: keyof PosterData) => (v: string) => setData((d) => ({ ...d, [k]: v }));

  // Mirror into the URL without adding history entries.
  useEffect(() => {
    const q = new URLSearchParams();
    for (const k of KEYS) if (data[k] && data[k] !== DEFAULT_POSTER[k]) q.set(k, data[k]);
    const qs = q.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [data]);

  // Scale the true-size sheet to whatever width the preview column has.
  const frame = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / 816)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard blocked — the address bar already holds the same link.
    }
  }

  return (
    // minmax(0, …) columns: the true-size sheet inside the preview is 816px of
    // min-content, and a plain `1fr`/auto column would grow to fit it, so the
    // preview would never scale down on a phone.
    <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-10 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-14">
      {/* ── Controls ─────────────────────────────────────────────────── */}
      <aside className="no-print lg:sticky lg:top-6 lg:self-start">
        <Link href="/promote" className="text-sm text-ivory/50 transition-colors hover:text-ivory">
          ← Promotion materials
        </Link>
        <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ivory">
          Make your concert poster
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-ivory/55">
          Fill in your details and the poster updates as you type. Leave anything blank to
          write it in by hand.
        </p>

        <div className="mt-7 space-y-4">
          <div>
            <label className={labelCls} htmlFor="p-kind">Type of event</label>
            <select
              id="p-kind"
              className={field}
              value={data.kind}
              onChange={(e) => set("kind")(e.target.value)}
            >
              {Object.keys(EVENT_KINDS).map((k) => (
                <option key={k} value={k}>{KIND_LABELS[k] ?? k}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls} htmlFor="p-date">Date</label>
              <input id="p-date" type="date" className={field} value={data.date} onChange={(e) => set("date")(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} htmlFor="p-time">Time</label>
              <input id="p-time" className={field} placeholder="6:00 PM" value={data.time} onChange={(e) => set("time")(e.target.value)} />
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="p-venue">Church or place</label>
            <input id="p-venue" className={field} placeholder="Grace Baptist Church" value={data.venue} onChange={(e) => set("venue")(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} htmlFor="p-address">Street address</label>
            <input id="p-address" className={field} placeholder="123 Main St." value={data.address} onChange={(e) => set("address")(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} htmlFor="p-city">City &amp; state</label>
            <input id="p-city" className={field} placeholder="Lapeer, MI" value={data.city} onChange={(e) => set("city")(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} htmlFor="p-note">Bottom line</label>
            <input id="p-note" className={field} value={data.note} onChange={(e) => set("note")(e.target.value)} />
          </div>
          <div>
            <label className={labelCls} htmlFor="p-headline">Headline (optional)</label>
            <input
              id="p-headline"
              className={field}
              placeholder={EVENT_KINDS[data.kind] ?? EVENT_KINDS.concert}
              value={data.headline}
              onChange={(e) => set("headline")(e.target.value)}
            />
          </div>

          <fieldset>
            <legend className={labelCls}>Photo</legend>
            <div className="grid grid-cols-4 gap-2">
              {POSTER_PHOTOS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => set("photo")(p.id)}
                  aria-pressed={data.photo === p.id}
                  aria-label={p.label}
                  title={p.label}
                  className={`relative aspect-square overflow-hidden rounded-md ring-2 transition ${
                    data.photo === p.id ? "ring-brass" : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- 70px thumbnail */}
                  <img src={p.src} alt="" className="h-full w-full object-cover" style={{ objectPosition: p.position }} />
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button type="button" onClick={() => window.print()} className="btn btn-primary btn-sm">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M8 14h8v7H8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Print or save as PDF
          </button>
          <button type="button" onClick={copyLink} className="btn btn-outline btn-sm">
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ivory/40">
          Prints on regular letter paper, in color or black and white. To save a PDF for
          email or Facebook, choose &ldquo;Save as PDF&rdquo; in the print window. Want
          something different?{" "}
          <Link href="/contact?about=poster#message" className="text-brass-light underline underline-offset-2">
            Ask Stephen
          </Link>
          .
        </p>
      </aside>

      {/* ── Preview ──────────────────────────────────────────────────── */}
      <div ref={frame} className="poster-frame w-full min-w-0">
        <div
          className="poster-scale relative mx-auto overflow-hidden rounded-md shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]"
          style={{ width: 816 * scale, height: 1056 * scale }}
        >
          <div className="poster-scale-inner origin-top-left" style={{ transform: `scale(${scale})` }}>
            <PosterSheet data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
