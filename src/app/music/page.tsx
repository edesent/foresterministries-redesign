import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import VideoEmbed from "@/components/VideoEmbed";
import { MUSIC_PARAGRAPHS, INSTRUMENTS } from "@/config/content";
import { PRODUCTS } from "@/config/store";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "The Music",
  description:
    "Stephen Forester sings southern and traditional gospel music, and plays piano, guitars, and ocarina. Six recorded albums, formally trained, mixing new songs with the old hymns.",
};

export default function Music() {
  const albums = PRODUCTS.filter((p) => p.category === "album");

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="The music"
          title="Southern gospel, old and new"
          subtitle="New songs mixed with the classic hymns — given new life in fresh ways for all to enjoy."
          image="/photos/studio-instruments.jpg"
          imagePosition="65% 40%"
        />

        {/* Instruments */}
        <section className="bg-ink-2 border-b border-ivory/10">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-7">
              {INSTRUMENTS.map((ins, i) => (
                <Reveal key={ins.name} delay={i * 80}>
                  <div className="text-center sm:text-left">
                    <p className="font-display text-2xl font-semibold text-brass-light">
                      {ins.name}
                    </p>
                    <p className="mt-1.5 text-sm text-ivory/50 leading-snug">{ins.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Long-form */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              <Reveal className="lg:col-span-7">
                <div className="prose-warm prose-lede text-lg text-ivory/72">
                  {MUSIC_PARAGRAPHS.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={120}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
                  <Image
                    src="/photos/promo-tall-5.jpg"
                    alt="Stephen Forester playing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 card-dark p-7">
                  <p className="eyebrow text-brass/85 text-[0.58rem]">Formal training</p>
                  <ul className="mt-4 space-y-3 text-sm text-ivory/65">
                    {[
                      "Studied music in college; sang in college groups and choirs",
                      "Charles Novell School of Music — Murray, Kentucky",
                      "Steve Hurst School of Music — Cleveland, Tennessee",
                    ].map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-bright" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-24">
          <div className="absolute inset-0 spotlight-crimson opacity-70" />
          <div className="relative max-w-4xl mx-auto px-6">
            <Reveal className="text-center">
              <p className="eyebrow text-brass">Listen</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                Hear it for yourself
              </h2>
            </Reveal>
            <Reveal className="mt-10" delay={100}>
              <VideoEmbed
                videoId={SITE.introVideoId}
                title="Ministry introduction"
                poster="/photos/studio-instruments.jpg"
              />
            </Reveal>
          </div>
        </section>

        {/* Discography */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
          <div className="absolute inset-0 grooves opacity-60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-brass">Discography</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                  Six albums
                </h2>
              </div>
              <Link href="/store" className="btn btn-primary btn-sm">
                Visit the store
              </Link>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {albums.map((a, i) => (
                <Reveal key={a.slug} delay={(i % 6) * 70}>
                  <Link href="/store" className="group block">
                    <div className="relative aspect-square overflow-hidden rounded-xl ring-1 ring-ivory/10 transition-all duration-300 group-hover:ring-brass/50">
                      <Image
                        src={a.image!}
                        alt={`${a.title} — album cover`}
                        fill
                        sizes="(max-width: 640px) 50vw, 17vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                    </div>
                    <p className="mt-3 font-display text-lg font-semibold text-ivory leading-snug group-hover:text-brass-light transition-colors">
                      {a.title}
                    </p>
                    <p className="text-xs uppercase tracking-[0.13em] text-ivory/40 mt-1">
                      {a.kicker}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-crimson-deep py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson-deep to-ink/80" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory">
                Bring a concert to your church
              </h2>
              <p className="mt-4 text-ivory/75 leading-relaxed">
                A concert with Stephen features a clear presentation of the gospel in song
                and spoken word, a generous dose of humor, puppets, and many more surprises.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href={`tel:${phoneTel}`} className="btn btn-brass">
                  Call or text {SITE.phone}
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Send a message
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
