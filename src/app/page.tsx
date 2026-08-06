import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import VideoEmbed from "@/components/VideoEmbed";
import { SITE, phoneTel } from "@/config/site";
import { PILLARS, HOME_STATS, ENDORSEMENTS, ABOUT_INTRO } from "@/config/content";
import { PRODUCTS, findProduct } from "@/config/store";
import { upcomingEvents, formatEventDate } from "@/config/schedule";

// Past dates fall off the schedule on their own — re-check every hour.
export const revalidate = 3600;

const ICONS = {
  note: (
    <path
      d="M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14.5s1.3 2 3.5 2 3.5-2 3.5-2M9 9.5h.01M15 9.5h.01" strokeLinecap="round" />
    </>
  ),
  flame: (
    <path
      d="M12 3s5 4.5 5 9a5 5 0 0 1-10 0c0-1.8.9-3.4 1.8-4.5C9.8 6.2 12 3 12 3Zm0 16a2.5 2.5 0 0 0 2.5-2.5c0-1.6-2.5-4-2.5-4s-2.5 2.4-2.5 4A2.5 2.5 0 0 0 12 19Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Home() {
  const events = upcomingEvents();
  const nextEvents = events.slice(0, 5);
  const next = events[0];
  const featured = findProduct("you-are-loved");
  const otherAlbums = PRODUCTS.filter(
    (p) => p.category === "album" && p.slug !== "you-are-loved",
  );

  return (
    <>
      <Nav />

      <main>
        {/* ══════════════════════════════════════════════════ hero */}
        <section className="relative min-h-[92svh] flex items-end overflow-hidden bg-ink grain">
          <Image
            src="/photos/hero-bridge.jpg"
            alt="Stephen Forester"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_18%] sm:object-[62%_center]"
          />
          {/* Scrims so the type reads. On phones the photo shows through the
              top and the words sit on a dark base; on wider screens the dark
              comes in from the left instead. */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/15 sm:hidden" />
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-ink via-ink/65 to-transparent" />
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-ink/90 via-transparent to-ink/35" />
          <div className="absolute inset-0 spotlight" />

          <div className="relative w-full max-w-7xl mx-auto px-6 pb-14 pt-36 sm:pb-20">
            <div className="max-w-2xl">
              <p className="eyebrow text-brass rise d1 text-[0.62rem] sm:text-[0.7rem]">
                {SITE.roles}
              </p>
              <h1 className="rise d2 mt-6 font-display font-semibold text-ivory text-[3.1rem] leading-[0.95] sm:text-6xl md:text-[4.6rem] tracking-tight [text-shadow:0_4px_40px_rgba(0,0,0,0.7)]">
                Gospel music
                <span className="block text-brass-light italic">for every</span>
                generation
              </h1>
              <p className="rise d3 mt-7 max-w-xl text-lg sm:text-xl leading-relaxed text-ivory/75">
                Southern gospel singing, piano and guitar, a cast of ventriloquist
                puppets, and a clear presentation of the gospel — in over a hundred
                churches, concerts, and revivals a year.
              </p>
              <div className="rise d4 mt-9 flex flex-wrap items-center gap-3.5">
                <Link href="/contact" className="btn btn-primary">
                  Book Stephen
                </Link>
                <Link href="/store" className="btn btn-outline">
                  Hear the music
                </Link>
              </div>
            </div>

            {/* Next date ticker */}
            {next && (
              <Reveal className="mt-14 sm:mt-20">
                <Link
                  href="/schedule"
                  className="group inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-full border border-ivory/15 bg-ink/70 backdrop-blur-sm px-5 py-3 transition-colors hover:border-brass/50"
                >
                  <span className="eyebrow text-brass text-[0.58rem]">Next date</span>
                  <span className="h-4 w-px bg-ivory/20 hidden sm:block" />
                  <span className="text-sm text-ivory/85">
                    <span className="font-semibold text-ivory">
                      {formatEventDate(next.date).month} {formatEventDate(next.date).day}
                    </span>
                    {" — "}
                    {next.venue} · {next.city}, {next.state}
                  </span>
                  <span className="text-sm text-brass-light group-hover:translate-x-0.5 transition-transform">
                    Full schedule →
                  </span>
                </Link>
              </Reveal>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ pillars */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
          <div className="absolute inset-0 grooves opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-brass">What an evening looks like</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                Three things every service has in common
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {PILLARS.map((p, i) => (
                <Reveal as="article" key={p.title} delay={i * 110}>
                  <div className="h-full card-dark card-dark-hover p-8">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/15 ring-1 ring-crimson/35">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7 text-brass-light"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        {ICONS[p.icon]}
                      </svg>
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ivory leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-3.5 leading-relaxed text-ivory/62">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ meet stephen */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28 grain">
          <div className="absolute inset-0 spotlight opacity-70" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-brass/25 via-transparent to-crimson/25 blur-xl" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
                    <Image
                      src="/photos/promo-portrait.jpg"
                      alt="Stephen Forester"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-[50%_18%]"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={120}>
                <p className="eyebrow text-brass">Meet Stephen</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                  A one-man ministry with
                  <span className="italic text-brass-light"> something for everybody</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ivory/70">{ABOUT_INTRO}</p>
                <p className="mt-4 leading-relaxed text-ivory/60">
                  He has been traveling since 2008 and comes on a love-offering basis plus a
                  small travel fee. No event or church is too small or too large.
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                  {HOME_STATS.map((s) => (
                    <div key={s.label}>
                      <dt className="font-display text-4xl font-semibold text-brass-light leading-none">
                        {s.value}
                      </dt>
                      <dd className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-ivory/45 leading-snug">
                        {s.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-10 flex flex-wrap gap-3.5">
                  <Link href="/about" className="btn btn-outline btn-sm">
                    Read his story
                  </Link>
                  <Link href="/music" className="btn btn-outline btn-sm">
                    About the music
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ video */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-24">
          <div className="absolute inset-0 spotlight-crimson opacity-80" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <p className="eyebrow text-brass">Two minutes</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                See the ministry for yourself
              </h2>
              <p className="mt-5 text-ivory/65 max-w-xl mx-auto leading-relaxed">
                Music, humor, puppets, and preaching — here is what it looks like when
                Stephen comes to a church.
              </p>
            </Reveal>
            <Reveal className="mt-11" delay={120}>
              <VideoEmbed
                videoId={SITE.introVideoId}
                title="Ministry introduction"
                poster="/photos/studio-instruments.jpg"
              />
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ music / store */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
          <div className="absolute inset-0 grooves opacity-60" />
          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-brass">The music</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                Six albums, and a hymn or two you haven&rsquo;t heard in years
              </h2>
            </Reveal>

            {featured && (
              <Reveal className="mt-14">
                <div className="card-dark overflow-hidden grid md:grid-cols-2">
                  <div className="relative flex items-center bg-ink">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={featured.image!}
                        alt={`${featured.title} — album cover`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-8 sm:p-10 flex flex-col justify-center">
                    <p className="eyebrow text-brass/85 text-[0.6rem]">
                      Newest release · {featured.kicker}
                    </p>
                    <h3 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-ivory">
                      {featured.title}
                    </h3>
                    <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-ivory/60">
                      {featured.tracks?.map((t, i) => (
                        <li key={t} className="flex gap-2.5">
                          <span className="text-brass/50 tabular-nums w-4 shrink-0 text-right">
                            {i + 1}
                          </span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Link href="/store" className="btn btn-primary">
                        Visit the store
                      </Link>
                      <span className="text-sm text-ivory/50">
                        ${featured.price} · free shipping on every order
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal className="mt-10" delay={100}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {otherAlbums.map((a) => (
                  <Link
                    key={a.slug}
                    href="/store"
                    className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-ivory/10 transition-all duration-300 hover:ring-brass/50 hover:-translate-y-1"
                  >
                    <Image
                      src={a.image!}
                      alt={`${a.title} — album cover`}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-3 left-3.5 right-3 text-sm font-semibold text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                      {a.title}
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ puppets */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6 lg:order-2">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl ring-1 ring-ivory/12 shadow-[var(--shadow-card)]">
                  <Image
                    src="/photos/puppets-full-cast.jpg"
                    alt="Stephen Forester with his cast of ventriloquist puppets"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal className="lg:col-span-6 lg:order-1" delay={110}>
                <p className="eyebrow text-brass">The cast</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                  His parents thought he had
                  <span className="italic text-brass-light"> a split personality</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ivory/70">
                  Now he&rsquo;s putting that crazy mind to use in the ministry. Stephen is
                  an accomplished ventriloquist, and a variety of special characters travel
                  with him — they make an appearance in every single concert.
                </p>
                <p className="mt-4 leading-relaxed text-ivory/60">
                  Their antics are enjoyed by kids and adults alike, and they can carry a
                  full gospel message that applies to people of any age.
                </p>
                <Link href="/puppets" className="btn btn-outline btn-sm mt-8">
                  Meet the puppets
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ endorsements */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-60" />
          <div className="relative">
            <Reveal className="max-w-3xl mx-auto px-6 text-center">
              <p className="eyebrow text-brass">What pastors say</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                &ldquo;If you&rsquo;re not on fire, then your wood is wet&rdquo;
              </h2>
            </Reveal>

            <div className="mt-14 marquee-mask">
              <div className="marquee gap-6">
                {[...ENDORSEMENTS, ...ENDORSEMENTS].map((e, i) => (
                  <figure
                    key={`${e.name}-${i}`}
                    className="w-[21rem] sm:w-[25rem] shrink-0 card-dark p-7 flex flex-col"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7 text-crimson-bright/80"
                      fill="currentColor"
                    >
                      <path d="M9.6 6C7 7.2 5.2 9.7 5.2 12.6c0 2.7 1.7 4.4 3.9 4.4 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3-3.2-.3 0-.7 0-1 .2.4-1.4 1.7-2.6 3.2-3.2L9.6 6Zm8.2 0c-2.6 1.2-4.4 3.7-4.4 6.6 0 2.7 1.7 4.4 3.9 4.4 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.2-3-3.2-.3 0-.7 0-1 .2.4-1.4 1.7-2.6 3.2-3.2L17.8 6Z" />
                    </svg>
                    <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-ivory/72">
                      {e.short}
                    </blockquote>
                    <figcaption className="mt-5 pt-5 border-t border-ivory/10">
                      <span className="block font-display text-lg font-semibold text-ivory">
                        {e.name}
                      </span>
                      <span className="block text-xs uppercase tracking-[0.13em] text-brass/70 mt-1.5">
                        {e.church} · {e.city}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center px-6">
              <Link href="/endorsements" className="btn btn-outline btn-sm">
                Read every endorsement
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ schedule preview */}
        <section className="relative overflow-hidden bg-ink-2 py-20 sm:py-28">
          <div className="relative max-w-6xl mx-auto px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="eyebrow text-brass">On the road</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                  Where Stephen is next
                </h2>
                <p className="mt-4 text-ivory/60 leading-relaxed">
                  Everyone is welcome at any of these. It is always a good idea to call
                  ahead before traveling a long distance.
                </p>
              </div>
              <Link href="/schedule" className="btn btn-outline btn-sm">
                Full tour schedule
              </Link>
            </Reveal>

            {nextEvents.length > 0 ? (
              <Reveal className="mt-12" delay={100}>
                <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
                  {nextEvents.map((e) => {
                    const d = formatEventDate(e.date);
                    return (
                      <li
                        key={`${e.date}-${e.venue}`}
                        className="flex flex-wrap items-baseline gap-x-6 gap-y-1.5 py-5"
                      >
                        <span className="w-24 shrink-0 font-display text-2xl font-semibold text-brass-light">
                          {d.monthShort} {d.day}
                        </span>
                        <span className="flex-1 min-w-[12rem] text-ivory font-medium">
                          {e.venue}
                        </span>
                        <span className="text-sm text-ivory/55">
                          {e.city}, {e.state}
                        </span>
                        <span className="text-sm text-ivory/45 w-40 sm:text-right">
                          {e.time}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ) : (
              <Reveal className="mt-12">
                <p className="text-ivory/60">
                  The next season of dates is being scheduled right now — call or text{" "}
                  <a href={`tel:${phoneTel}`} className="text-brass-light">
                    {SITE.phone}
                  </a>{" "}
                  to get on the calendar.
                </p>
              </Reveal>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════ booking CTA */}
        <section className="relative overflow-hidden bg-crimson-deep py-20 sm:py-24">
          <Image
            src="/photos/autumn-keyboard.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[50%_30%] opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-crimson-deep/95 via-crimson-deep/85 to-ink/90" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <p className="eyebrow text-brass-light">Booking now</p>
              <h2 className="mt-4 font-display text-4xl sm:text-[3.4rem] font-semibold text-ivory leading-[1.08]">
                Have Stephen at your church
              </h2>
              <p className="mt-6 text-lg text-ivory/80 max-w-2xl mx-auto leading-relaxed">
                Church services, concerts, revivals, banquets, children&rsquo;s programs —
                he comes on a love-offering basis plus a small travel fee. No event is too
                large or too small.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href={`tel:${phoneTel}`} className="btn btn-brass">
                  Call or text {SITE.phone}
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Send a message
                </Link>
              </div>
              <p className="mt-7 text-sm text-ivory/55">
                Or email{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brass-light underline underline-offset-2 break-all"
                >
                  {SITE.email}
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
