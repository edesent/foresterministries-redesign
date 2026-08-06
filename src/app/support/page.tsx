import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SupportButton from "@/components/SupportButton";
import {
  SUPPORT_INTRO,
  SUPPORT_BENEFITS,
  SUPPORT_METHODS,
  SUPPORT_FAQS,
} from "@/config/content";
import { SITE, SUPPORT, phoneTel, mailingAddress } from "@/config/site";

export const metadata: Metadata = {
  title: "Supporters Club",
  description:
    "Join the Stephen Forester Ministries Supporters Club. Monthly supporters receive a free CD when they sign up, a free copy of every new release, and regular updates from the road.",
};

export default function Support() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Partner with the ministry"
          title="The Supporters Club"
          subtitle="Supported by the generosity of God's people, one month at a time."
          image="/photos/autumn-tall-2.jpg"
          imagePosition="50% 20%"
        />

        {/* Intro + benefits */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              <Reveal className="lg:col-span-7">
                <p className="text-xl font-display leading-relaxed text-ivory/88">
                  {SUPPORT_INTRO}
                </p>
                <div className="mt-9 rule-brass" />
                <h2 className="mt-9 eyebrow text-brass">What you receive</h2>
                <ul className="mt-6 space-y-4">
                  {SUPPORT_BENEFITS.map((b, i) => (
                    <li key={b} className="flex gap-4">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-crimson/20 ring-1 ring-crimson/40 text-[0.8rem] font-semibold text-brass-light">
                        {i + 1}
                      </span>
                      <span className="text-[1.05rem] leading-relaxed text-ivory/75">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <SupportButton />
                  <span className="text-sm text-ivory/50">
                    ${SUPPORT.minimumMonthly} a month or more makes you a member
                  </span>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-5" delay={120}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
                  <Image
                    src="/photos/promo-tall-2.jpg"
                    alt="Stephen Forester"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Three ways */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-24">
          <div className="relative max-w-6xl mx-auto px-6">
            <Reveal>
              <p className="eyebrow text-brass">Three ways to give</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                However is easiest for you
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {SUPPORT_METHODS.map((m, i) => (
                <Reveal key={m.title} delay={i * 100}>
                  <div className="h-full card-dark p-8 flex flex-col">
                    <h3 className="font-display text-2xl font-semibold text-ivory leading-snug">
                      {m.title}
                    </h3>
                    <p className="mt-3.5 leading-relaxed text-ivory/62 flex-1">{m.body}</p>

                    <div className="mt-7">
                      {m.action === "paypal" && <SupportButton className="w-full" />}
                      {m.action === "phone" && (
                        <a href={`tel:${phoneTel}`} className="btn btn-outline w-full">
                          {SITE.phone}
                        </a>
                      )}
                      {m.action === "mail" && (
                        <div className="rounded-xl bg-ink/60 ring-1 ring-ivory/10 px-5 py-4 text-sm leading-relaxed text-ivory/70">
                          <span className="block font-semibold text-ivory">
                            {SITE.mailingName}
                          </span>
                          {mailingAddress}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <p className="text-center text-sm text-ivory/50 max-w-2xl mx-auto leading-relaxed">
                You can also send a gift straight from your own PayPal account to{" "}
                <span className="text-brass-light">{SUPPORT.paypalEmail}</span>{" "}
                using the
                &ldquo;send money to friends and family&rdquo; option.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
          <div className="absolute inset-0 grooves opacity-50" />
          <div className="relative max-w-3xl mx-auto px-6">
            <Reveal>
              <p className="eyebrow text-brass">Before you sign up</p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-ivory leading-tight">
                Honest answers
              </h2>
            </Reveal>

            <div className="mt-11 space-y-5">
              {SUPPORT_FAQS.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i, 4) * 70}>
                  <details className="group card-dark overflow-hidden">
                    <summary className="flex cursor-pointer list-none items-start gap-4 p-6">
                      <h3 className="flex-1 font-display text-xl font-semibold text-ivory leading-snug">
                        {f.q}
                      </h3>
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
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-ivory/68">{f.a}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <div className="rounded-2xl border border-brass/25 bg-brass/[0.06] p-8 text-center">
                <p className="text-ivory/70 leading-relaxed">
                  When you sign up online you&rsquo;ll get a follow-up email within 24 hours
                  confirming your subscription and asking which free CD you&rsquo;d like.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                  <SupportButton label="Join the Supporters Club" />
                  <a href={`mailto:${SITE.email}`} className="btn btn-outline">
                    Email Stephen
                  </a>
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
