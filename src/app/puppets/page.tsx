import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { PUPPETS_PARAGRAPHS, PUPPET_NOTES } from "@/config/content";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "The Puppets",
  description:
    "Stephen Forester is an accomplished ventriloquist. His cast of professional puppets appears in every concert, and can carry a full gospel message for children and adults alike.",
};

export default function Puppets() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Ventriloquism"
          title="The cast"
          subtitle="Clean, genuinely funny, and in every single concert."
          image="/photos/puppets-full-cast.jpg"
          imagePosition="50% 30%"
        />

        {/* Big group photo + copy */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-60" />
          <div className="relative max-w-6xl mx-auto px-6">
            <Reveal>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
                <Image
                  src="/photos/puppets-full-cast.jpg"
                  alt="Stephen Forester with his full cast of ventriloquist puppets"
                  fill
                  priority
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-ivory/35">
                The whole company — they all travel
              </p>
            </Reveal>

            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              <Reveal className="lg:col-span-7">
                <div className="prose-warm prose-lede text-lg text-ivory/72">
                  {PUPPETS_PARAGRAPHS.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              </Reveal>
              <Reveal className="lg:col-span-5" delay={120}>
                <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-ivory/12">
                  <Image
                    src="/photos/puppet-duo.jpg"
                    alt="Stephen Forester with one of his puppet characters"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-24">
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid gap-7 md:grid-cols-3">
              {PUPPET_NOTES.map((n, i) => (
                <Reveal key={n.title} delay={i * 100}>
                  <div className="h-full card-dark p-8">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/15 ring-1 ring-crimson/35 font-display text-lg font-semibold text-brass-light">
                      {i + 1}
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-semibold text-ivory leading-snug">
                      {n.title}
                    </h2>
                    <p className="mt-3 leading-relaxed text-ivory/62">{n.body}</p>
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
              <p className="eyebrow text-brass-light">For kids and adults</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory">
                Planning a children&rsquo;s program or VBS?
              </h2>
              <p className="mt-4 text-ivory/75 leading-relaxed">
                The puppets can present a full Bible lesson for the children while the same
                message reaches the parents. Just ask when you book.
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
