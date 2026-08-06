import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { BELIEFS, BELIEFS_INTRO } from "@/config/content";

export const metadata: Metadata = {
  title: "What He Believes",
  description:
    "The doctrinal statement of Stephen Forester Ministries — the verbal, plenary inspiration of the Scriptures, salvation through faith in the blood of Christ, and the pre-millennial return of Christ. KJV.",
};

export default function Beliefs() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Doctrinal statement"
          title="What Stephen believes"
          subtitle={BELIEFS_INTRO}
        />

        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-4xl mx-auto px-6">
            <div className="space-y-12">
              {BELIEFS.map((group, gi) => (
                <Reveal as="section" key={group.heading} delay={Math.min(gi, 4) * 80}>
                  <div className="flex items-center gap-5">
                    <h2 className="wordmark text-brass text-sm whitespace-nowrap">
                      {group.heading}
                    </h2>
                    <span className="flex-1 rule-brass" />
                  </div>
                  <ul className="mt-6 space-y-3.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-4">
                        <svg
                          viewBox="0 0 24 24"
                          className="mt-1 h-5 w-5 shrink-0 text-crimson-bright"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[1.05rem] leading-relaxed text-ivory/75">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <div className="card-dark p-8 text-center">
                <p className="font-display text-2xl italic leading-relaxed text-brass-light">
                  &ldquo;For God so loved the world, that he gave his only begotten Son, that
                  whosoever believeth in him should not perish, but have everlasting
                  life.&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ivory/40">
                  John 3:16 (KJV)
                </p>
                <Link href="/contact" className="btn btn-primary mt-8">
                  Talk with Stephen
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
