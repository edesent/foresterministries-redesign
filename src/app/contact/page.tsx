import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { SITE, phoneTel, mailingAddress } from "@/config/site";
import { upcomingEvents, formatEventDate } from "@/config/schedule";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book Stephen Forester for a church service, concert, revival, banquet, or children's program. Call or text (810) 358-0518, or send a message. He comes on a love-offering basis.",
};

export default function Contact() {
  const next = upcomingEvents()[0];

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Contact & booking"
          title="Let's find a date"
          subtitle="Feel free to reach out any time — for bookings, questions about the ministry, or a prayer request."
          image="/photos/promo-tall-3.jpg"
          imagePosition="50% 15%"
        />

        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Direct contact */}
              <Reveal className="lg:col-span-5">
                <div className="card-dark p-8">
                  <p className="eyebrow text-brass">Fastest way</p>
                  <a
                    href={`tel:${phoneTel}`}
                    className="mt-4 block font-display text-4xl sm:text-[2.6rem] font-semibold text-ivory hover:text-brass-light transition-colors leading-none"
                  >
                    {SITE.phone}
                  </a>
                  <p className="mt-3 text-sm text-ivory/50">
                    Call or text — Stephen answers his own phone.
                  </p>

                  <div className="mt-8 rule-brass" />

                  <p className="eyebrow text-brass mt-8">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-3 block text-lg text-ivory hover:text-brass-light transition-colors break-all"
                  >
                    {SITE.email}
                  </a>

                  <p className="eyebrow text-brass mt-8">Mail</p>
                  <p className="mt-3 leading-relaxed text-ivory/70">
                    {SITE.mailingName}
                    <br />
                    {mailingAddress}
                  </p>

                  <a
                    href={SITE.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-3 text-sm text-ivory/65 hover:text-brass-light transition-colors"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-ivory/15">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                      </svg>
                    </span>
                    Follow the ministry on Facebook
                  </a>
                </div>

                {/* What to expect */}
                <div className="mt-6 card-dark p-8">
                  <p className="eyebrow text-brass">Good to know</p>
                  <ul className="mt-5 space-y-4 text-[0.97rem] text-ivory/70">
                    {[
                      "Stephen comes on a love-offering basis plus a small travel fee for longer distances.",
                      "No event or church is too small or too large.",
                      "He books services, concerts, revivals, banquets, children's programs, and retirement homes.",
                      "He can sing, or sing and preach, or hold a full revival meeting.",
                    ].map((x) => (
                      <li key={x} className="flex gap-3.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-bright" />
                        <span className="leading-relaxed">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {next && (
                  <div className="mt-6 relative overflow-hidden rounded-2xl ring-1 ring-ivory/12">
                    <Image
                      src="/photos/wide-2019-a.jpg"
                      alt=""
                      width={1800}
                      height={1200}
                      className="h-40 w-full object-cover object-[50%_25%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="eyebrow text-brass text-[0.55rem]">Next date</p>
                      <p className="mt-2 font-display text-xl font-semibold text-ivory leading-snug">
                        {formatEventDate(next.date).month} {formatEventDate(next.date).day} —{" "}
                        {next.venue}
                      </p>
                      <p className="text-sm text-ivory/60">
                        {next.city}, {next.state}
                      </p>
                    </div>
                  </div>
                )}
              </Reveal>

              {/* Form */}
              <Reveal className="lg:col-span-7" delay={120}>
                <div className="card-dark p-8 sm:p-10">
                  <p className="eyebrow text-brass">Booking inquiry</p>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory leading-tight">
                    Tell Stephen about your church
                  </h2>
                  <p className="mt-4 text-ivory/60 leading-relaxed">
                    Fill in whatever you know and he&rsquo;ll follow up personally. Nothing
                    here is required except your name and email.
                  </p>
                  <div className="mt-9">
                    <BookingForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
