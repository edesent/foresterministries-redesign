import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PosterToolbar from "./PosterToolbar";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Printable Concert Poster",
  description:
    "A printable concert poster for churches hosting Stephen Forester. Type in your date, place, and time, then print as many as you like.",
  robots: { index: false, follow: true },
};

export default function Poster() {
  return (
    <main className="min-h-screen bg-ink-2 py-8 px-4 sm:px-6">
      <PosterToolbar />

      {/* ── the sheet ───────────────────────────────────────────────────── */}
      <div className="print-sheet mx-auto mt-8 w-full max-w-[8.5in] overflow-hidden rounded-lg bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)]">
        {/* Coming soon banner */}
        <div className="bg-[#1b1b1b] px-8 py-5">
          <div className="flex items-center gap-5">
            <span className="h-[2px] flex-1 bg-[#9b1622]" />
            <span className="wordmark text-[0.95rem] tracking-[0.4em] text-white">
              Coming Soon
            </span>
            <span className="h-[2px] flex-1 bg-[#9b1622]" />
          </div>
        </div>

        {/* Photo */}
        <div className="relative aspect-[4/3] bg-[#1b1b1b]">
          <Image
            src="/photos/studio-instruments.jpg"
            alt="Stephen Forester with keyboard, guitars, and Bible"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 816px"
            className="object-cover"
          />
        </div>

        {/* Crimson wordmark band */}
        <div className="relative flex items-center gap-6 bg-gradient-to-r from-[#6d0f18] via-[#9b1622] to-[#6d0f18] px-8 py-7">
          <Image
            src="/brand/sf-monogram.png"
            alt=""
            width={512}
            height={512}
            className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
          />
          <div className="min-w-0">
            <p className="wordmark text-[0.6rem] tracking-[0.34em] text-white/75">
              Gospel Singer
            </p>
            <p className="wordmark mt-2 text-[1.6rem] font-bold leading-[1.05] text-white sm:text-[2.1rem]">
              Stephen
              <br />
              Forester
              <br />
              Ministries
            </p>
            <p className="wordmark mt-2.5 text-[0.6rem] tracking-[0.28em] text-white/75">
              Instrumentalist · Puppeteer
            </p>
          </div>
        </div>

        {/* Fill-in lines */}
        <div className="bg-[#f3f0ea] px-8 py-8">
          <dl className="space-y-6">
            {["Date", "Place", "Time"].map((label) => (
              <div key={label} className="flex items-baseline gap-4">
                <dt className="wordmark w-[4.6rem] shrink-0 text-right text-[0.85rem] tracking-[0.16em] text-[#1b1b1b]">
                  {label}:
                </dt>
                <dd className="flex-1">
                  <input
                    type="text"
                    aria-label={label}
                    className="w-full border-0 border-b-2 border-[#1b1b1b]/50 bg-transparent pb-1 font-display text-2xl text-[#1b1b1b] outline-none focus:border-[#9b1622] print:placeholder-transparent"
                    placeholder=""
                  />
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#1b1b1b]/15 pt-5">
            <p className="text-sm text-[#4b423b]">
              Southern gospel music · clean family humor · ventriloquist puppets
            </p>
            <p className="text-sm font-semibold text-[#9b1622]">
              www.foresterministries.com · {SITE.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="no-print mx-auto mt-8 max-w-[8.5in] text-center">
        <p className="text-sm leading-relaxed text-ivory/50">
          Type your details into the lines above, then print. Need a different photo, size,
          or a finished poster with your details already on it?{" "}
          <Link
            href="/contact?about=poster#message"
            className="text-brass-light underline underline-offset-2"
          >
            Send Stephen a message
          </Link>{" "}
          and he&rsquo;ll take care of it.
        </p>
        <Link
          href="/promote"
          className="mt-6 inline-block text-sm text-ivory/40 hover:text-ivory/70 transition-colors"
        >
          ← Back to promotion materials
        </Link>
      </div>
    </main>
  );
}
