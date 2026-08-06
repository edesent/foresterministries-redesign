import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PROMOTE_STEPS, PRESS_PHOTOS } from "@/config/content";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Promote a Concert",
  description:
    "Free printable concert posters and high-resolution publicity photos for churches hosting Stephen Forester. Fill in your date, place, and time and print as many as you like.",
};

export default function Promote() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="For host churches"
          title="Promote your concert"
          subtitle="A printable poster and publicity photos, free to use however helps you fill the room."
        />

        {/* Poster */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
              <Reveal className="lg:col-span-5">
                <div className="relative aspect-[8.5/11] overflow-hidden rounded-xl ring-1 ring-ivory/15 shadow-[var(--shadow-card)] bg-ink-2">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="relative flex-1">
                      <Image
                        src="/photos/studio-instruments.jpg"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-crimson-deep to-crimson flex items-center gap-3 px-4 py-3">
                      <Image
                        src="/brand/sf-monogram.png"
                        alt=""
                        width={512}
                        height={512}
                        className="h-9 w-auto"
                      />
                      <span className="wordmark text-ivory text-[0.6rem] leading-[1.5]">
                        Stephen
                        <br />
                        Forester
                        <br />
                        Ministries
                      </span>
                    </div>
                    <div className="bg-parchment px-4 py-4 space-y-2">
                      {["Date", "Place", "Time"].map((l) => (
                        <p
                          key={l}
                          className="wordmark text-[0.55rem] text-ink flex items-baseline gap-2"
                        >
                          {l}:
                          <span className="flex-1 border-b border-ink/40" />
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={110}>
                <p className="eyebrow text-brass">The poster</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                  Print it, fill it in, put it up
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ivory/68">
                  The poster leaves the date, place, and time blank so you can write them in
                  by hand — or type them in on screen before you print.
                </p>

                <ol className="mt-9 space-y-6">
                  {PROMOTE_STEPS.map((s, i) => (
                    <li key={s.title} className="flex gap-5">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson/20 ring-1 ring-crimson/40 font-display font-semibold text-brass-light">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-ivory">
                          {s.title}
                        </h3>
                        <p className="mt-1.5 leading-relaxed text-ivory/62">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/promote/poster" className="btn btn-primary">
                    Open the printable poster
                  </Link>
                  <a href={`mailto:${SITE.email}`} className="btn btn-outline">
                    Ask for a custom poster
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section id="photos" className="relative overflow-hidden bg-ink-2 py-20 sm:py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-brass">Publicity photos</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                Photos you can use
              </h2>
              <p className="mt-4 text-ivory/60 leading-relaxed">
                Right-click any photo to save it for your bulletin, slides, or social media.
                If you need a different crop or a higher resolution, just email Stephen.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {PRESS_PHOTOS.map((p, i) => (
                <Reveal
                  as="figure"
                  key={p.src}
                  delay={(i % 4) * 80}
                  className={p.ratio === "wide" ? "col-span-2" : ""}
                >
                  <a
                    href={p.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl ring-1 ring-ivory/10 transition-all duration-300 group-hover:ring-brass/50 ${
                        p.ratio === "wide" ? "aspect-[3/2]" : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes={p.ratio === "wide" ? "50vw" : "25vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Details to include */}
        <section className="relative overflow-hidden bg-ink py-16 sm:py-20 border-t border-ivory/10">
          <div className="relative max-w-4xl mx-auto px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ivory text-center">
                Wording you can copy
              </h2>
              <div className="mt-8 card-dark p-8">
                <p className="text-ivory/75 leading-relaxed">
                  <span className="font-semibold text-ivory">Stephen Forester</span> is a
                  gospel singer, instrumentalist, and ventriloquist from Lapeer, Michigan.
                  His concerts feature southern gospel music on piano and guitar, clean
                  humor for the whole family, appearances by his puppet characters, and a
                  clear presentation of the gospel of Jesus Christ. Everyone is welcome —
                  bring a friend.
                </p>
                <p className="mt-5 text-sm text-ivory/50">
                  More at www.foresterministries.com · {SITE.phone}
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
