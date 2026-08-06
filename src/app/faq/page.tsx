import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { FAQS } from "@/config/content";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "Common Questions",
  description:
    "How far Stephen Forester travels, what he charges, whether he preaches, what kind of music he sings, and whether the puppets come along. Straight answers for pastors.",
};

export default function Faq() {
  // Google shows these as a rich result on the search page.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <PageHero
          eyebrow="For pastors"
          title="Common questions"
          subtitle="The things pastors ask before they call. If your question isn't here, just pick up the phone."
        />

        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-3xl mx-auto px-6">
            <div className="space-y-5">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i, 5) * 70}>
                  <details className="group card-dark overflow-hidden" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-start gap-4 p-7">
                      <span className="mt-0.5 shrink-0 font-display text-lg font-semibold text-crimson-bright">
                        Q
                      </span>
                      <h2 className="flex-1 font-display text-xl sm:text-2xl font-semibold text-ivory leading-snug">
                        {f.q}
                      </h2>
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-1 h-5 w-5 shrink-0 text-brass transition-transform duration-300 group-open:rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </summary>
                    <div className="px-7 pb-7 pl-[3.6rem]">
                      <p className="leading-relaxed text-ivory/68">{f.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <div className="rounded-2xl border border-brass/25 bg-brass/[0.06] p-8 text-center">
                <h2 className="font-display text-2xl font-semibold text-ivory">
                  Still wondering about something?
                </h2>
                <p className="mt-3 text-ivory/65 leading-relaxed">
                  Stephen answers his own phone. Call or text him and ask.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                  <a href={`tel:${phoneTel}`} className="btn btn-primary">
                    {SITE.phone}
                  </a>
                  <Link href="/contact" className="btn btn-outline">
                    Send a message
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
