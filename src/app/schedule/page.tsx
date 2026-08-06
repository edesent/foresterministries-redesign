import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EventRow from "@/components/EventRow";
import { eventsByMonth, upcomingEvents } from "@/config/schedule";
import { SITE, phoneTel } from "@/config/site";

// Past dates fall off on their own — re-check every hour.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tour Schedule",
  description:
    "Upcoming concerts, services, and revival meetings with Stephen Forester across Michigan, Indiana, New York, and beyond. Everyone is welcome.",
};

export default function Schedule() {
  const months = eventsByMonth();
  const total = upcomingEvents().length;
  const states = Array.from(new Set(upcomingEvents().map((e) => e.state)));

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="On the road"
          title="Tour schedule"
          subtitle="Check back often for new dates. It is always a good idea to call ahead before traveling a long distance."
          image="/photos/wide-2019-a.jpg"
          imagePosition="50% 30%"
        />

        {/* Summary strip */}
        <section className="bg-ink-2 border-b border-ivory/10">
          <div className="max-w-6xl mx-auto px-6 py-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            <span className="text-sm text-ivory/65">
              <strong className="font-display text-2xl text-brass-light align-middle mr-2">
                {total}
              </strong>
              upcoming dates
            </span>
            <span className="hidden sm:block h-4 w-px bg-ivory/15" />
            <span className="text-sm text-ivory/65">
              {states.join(" · ")}
            </span>
            <span className="hidden sm:block h-4 w-px bg-ivory/15" />
            <span className="text-sm text-ivory/65">
              Want a date of your own?{" "}
              <Link href="/contact" className="text-brass-light underline underline-offset-2">
                Book Stephen
              </Link>
            </span>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ink py-16 sm:py-20 grain">
          <div className="absolute inset-0 spotlight opacity-50" />
          <div className="relative max-w-4xl mx-auto px-6">
            {months.length === 0 ? (
              <Reveal>
                <div className="card-dark p-10 text-center">
                  <h2 className="font-display text-3xl font-semibold text-ivory">
                    The next season is being scheduled
                  </h2>
                  <p className="mt-4 text-ivory/60 leading-relaxed">
                    New dates are added here as they are confirmed. To get on the calendar,
                    call or text Stephen at{" "}
                    <a href={`tel:${phoneTel}`} className="text-brass-light">
                      {SITE.phone}
                    </a>
                    .
                  </p>
                  <Link href="/contact" className="btn btn-primary mt-8">
                    Book Stephen
                  </Link>
                </div>
              </Reveal>
            ) : (
              months.map((m, mi) => (
                <div key={m.key} className={mi === 0 ? "" : "mt-16"}>
                  <Reveal className="flex items-center gap-5">
                    <h2 className="wordmark text-brass text-sm sm:text-base whitespace-nowrap">
                      {m.label}
                    </h2>
                    <span className="flex-1 rule-brass" />
                    <span className="text-xs text-ivory/40 whitespace-nowrap">
                      {m.events.length} {m.events.length === 1 ? "date" : "dates"}
                    </span>
                  </Reveal>

                  <ul className="mt-6 space-y-4">
                    {m.events.map((e, i) => (
                      <Reveal as="li" key={`${e.date}-${e.venue}`} delay={Math.min(i, 4) * 70}>
                        <EventRow event={e} />
                      </Reveal>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Booking */}
        <section className="relative overflow-hidden bg-ink-2 py-16 sm:py-20 border-t border-ivory/10">
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <p className="eyebrow text-brass">Booking</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-ivory">
                Interested in a date for your church?
              </h2>
              <p className="mt-4 text-ivory/60 leading-relaxed">
                Stephen books church services, concerts, revivals, banquets, and
                children&rsquo;s programs. Call or text him directly — he answers his own
                phone.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href={`tel:${phoneTel}`} className="btn btn-primary">
                  {SITE.phone}
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
