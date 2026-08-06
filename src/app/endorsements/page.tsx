import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ENDORSEMENTS } from "@/config/content";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "What Pastors Say",
  description:
    "Pastors across Michigan and beyond on what it's like to have Stephen Forester minister at their church — musically sound, biblically sound, and well received every time.",
};

export default function Endorsements() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Endorsements"
          title="What pastors say"
          subtitle="From churches that have had Stephen back year after year."
          image="/photos/wide-2019-a.jpg"
          imagePosition="50% 25%"
        />

        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="columns-1 lg:columns-2 gap-7 [column-fill:_balance]">
              {ENDORSEMENTS.map((e, i) => (
                <Reveal
                  as="figure"
                  key={e.name}
                  delay={Math.min(i, 5) * 70}
                  className="mb-7 break-inside-avoid"
                >
                  <div className="card-dark p-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-crimson-bright/75"
                      fill="currentColor"
                    >
                      <path d="M9.6 6C7 7.2 5.2 9.7 5.2 12.6c0 2.7 1.7 4.4 3.9 4.4 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3-3.2-.3 0-.7 0-1 .2.4-1.4 1.7-2.6 3.2-3.2L9.6 6Zm8.2 0c-2.6 1.2-4.4 3.7-4.4 6.6 0 2.7 1.7 4.4 3.9 4.4 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3-3.2-.3 0-.7 0-1 .2.4-1.4 1.7-2.6 3.2-3.2L17.8 6Z" />
                    </svg>
                    <blockquote className="mt-5 leading-relaxed text-ivory/72">
                      {e.quote}
                    </blockquote>
                    <figcaption className="mt-6 pt-6 border-t border-ivory/10">
                      <span className="block font-display text-xl font-semibold text-ivory">
                        {e.name}
                      </span>
                      <span className="block text-xs uppercase tracking-[0.14em] text-brass/75 mt-2">
                        {e.church} · {e.city}
                      </span>
                    </figcaption>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-crimson-deep py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson-deep to-ink/80" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory">
                &ldquo;If you have not booked Stephen Forester, you should do so soon.&rdquo;
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
