import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ABOUT_INTRO, ABOUT_STORY, ABOUT_FACTS } from "@/config/content";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "About Stephen",
  description:
    "Stephen Forester is a gospel vocalist, instrumentalist, ventriloquist, and ordained preacher from Lapeer, Michigan. He has traveled in full-time music ministry since 2008.",
};

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About"
          title="Stephen Forester"
          subtitle={SITE.roles}
          image="/photos/autumn-keyboard.jpg"
          imagePosition="50% 25%"
        />

        {/* Intro + portrait */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-7">
                <p className="text-xl sm:text-2xl font-display leading-relaxed text-ivory/90">
                  {ABOUT_INTRO}
                </p>
                <div className="mt-8 rule-brass" />
                <div className="prose-warm mt-8 text-ivory/68">
                  {ABOUT_STORY.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal className="lg:col-span-5" delay={120}>
                <div className="sticky top-28 space-y-5">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
                    <Image
                      src="/photos/autumn-tall-1.jpg"
                      alt="Stephen Forester"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <dl className="card-dark divide-y divide-ivory/10">
                    {ABOUT_FACTS.map((f) => (
                      <div key={f.label} className="p-6">
                        <dt className="eyebrow text-brass/85 text-[0.58rem]">{f.label}</dt>
                        <dd className="mt-2 font-display text-xl font-semibold text-ivory leading-snug">
                          {f.value}
                        </dd>
                        <dd className="mt-1.5 text-sm text-ivory/50 leading-relaxed">
                          {f.note}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="bg-ink-2 py-16 sm:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="eyebrow text-brass text-center">Along the way</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { src: "/photos/promo-tall-1.jpg", alt: "Stephen Forester with a guitar" },
                { src: "/photos/promo-tall-5.jpg", alt: "Stephen Forester at the piano" },
                { src: "/photos/autumn-tall-2.jpg", alt: "Stephen Forester outdoors in autumn" },
                { src: "/photos/tall-2019-a.jpg", alt: "Stephen Forester portrait" },
              ].map((p, i) => (
                <Reveal as="figure" key={p.src} delay={i * 90}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-ivory/10">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Where he's from / what he holds to */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
          <div className="absolute inset-0 grooves opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid gap-7 md:grid-cols-3">
              {[
                {
                  title: "Where he's from",
                  body: `Lapeer, Michigan. Stephen and his wife Marie are born-again Christians and active members of ${SITE.homeChurch} in ${SITE.homeChurchCity}.`,
                  href: null,
                  cta: null,
                },
                {
                  title: "What he preaches",
                  body: "Stephen has been preaching since 2009 and was ordained in 2011. He uses the King James Bible, and his sermons focus on Jesus, salvation, and biblical principles.",
                  href: "/beliefs",
                  cta: "Read the doctrinal statement",
                },
                {
                  title: "What it costs",
                  body: "He comes on a love-offering basis plus a small travel fee to cover expenses. No event or church is too small or too large.",
                  href: "/faq",
                  cta: "Common questions",
                },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="h-full card-dark p-8 flex flex-col">
                    <h2 className="font-display text-2xl font-semibold text-ivory">
                      {c.title}
                    </h2>
                    <p className="mt-3.5 leading-relaxed text-ivory/62 flex-1">{c.body}</p>
                    {c.href && (
                      <Link
                        href={c.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-light hover:gap-3 transition-all"
                      >
                        {c.cta}
                        <span aria-hidden>→</span>
                      </Link>
                    )}
                  </div>
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
                Have Stephen at your church
              </h2>
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
