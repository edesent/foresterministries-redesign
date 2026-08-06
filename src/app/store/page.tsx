import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import BuyButton from "@/components/BuyButton";
import { byCategory, findProduct, STORE_INFO } from "@/config/store";
import { SITE, phoneTel } from "@/config/site";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Stephen Forester's gospel music on CD and USB — six albums including hymns, an instrumental record, and a Christmas album. $10 each or all six for $30, with free shipping. T-shirts also available.",
};

const ORDER_METHODS = [
  {
    title: "Order online",
    body: "Use the buy button under anything on this page. Credit and debit cards are both accepted — you don't need a PayPal account.",
  },
  {
    title: "Order by phone",
    body: `Call or text ${SITE.phone} and pay with your card over the phone.`,
  },
  {
    title: "Mail a check",
    body: `Call ${SITE.phone} and Stephen will arrange for you to mail a check instead.`,
  },
];

export default function Store() {
  const bundle = findProduct("all-six-albums");
  const usb = findProduct("usb-drive");
  const albums = byCategory("album");
  const shirts = byCategory("apparel");

  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="The store"
          title="Take the music home"
          subtitle={STORE_INFO.headline}
          image="/photos/studio-instruments.jpg"
          imagePosition="50% 40%"
        />

        {/* ── how to order ── */}
        <section className="relative overflow-hidden bg-ink-2 py-14">
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {ORDER_METHODS.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-ivory/10 bg-ink/50 p-6">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-crimson/20 ring-1 ring-crimson/40 font-display text-lg font-semibold text-brass-light">
                      {i + 1}
                    </span>
                    <h2 className="mt-4 font-display text-xl font-semibold text-ivory">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/60">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-brass/25 bg-brass/[0.06] px-6 py-4 text-center">
                <span className="text-sm font-semibold text-brass-light uppercase tracking-[0.14em]">
                  Free shipping on all orders
                </span>
                <span className="hidden sm:block h-4 w-px bg-brass/30" />
                <span className="text-sm text-ivory/65">
                  CDs ${STORE_INFO.cdPrice} each · all six for ${STORE_INFO.bundlePrice}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── featured: bundle + usb ── */}
        <section className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 grooves opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="eyebrow text-brass">Start here</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                The whole catalog
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Bundle */}
              {bundle && (
                <Reveal>
                  <div className="h-full card-dark card-dark-hover overflow-hidden flex flex-col">
                    <div className="relative bg-gradient-to-br from-ink-3 to-ink p-8 pb-10">
                      <span className="absolute top-4 left-4 rounded-full bg-crimson px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ivory shadow-lg">
                        {bundle.badge}
                      </span>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {bundle.covers?.map((c) => (
                          <div
                            key={c}
                            className="relative aspect-square overflow-hidden rounded-lg ring-1 ring-ivory/15 shadow-lg"
                          >
                            <Image
                              src={c}
                              alt=""
                              fill
                              sizes="(max-width: 1024px) 30vw, 15vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-8 pt-6">
                      <p className="eyebrow text-brass/85 text-[0.6rem]">{bundle.kicker}</p>
                      <h3 className="mt-2.5 font-display text-3xl font-semibold text-ivory">
                        {bundle.title}
                      </h3>
                      <p className="mt-3.5 leading-relaxed text-ivory/62">{bundle.blurb}</p>
                      <div className="mt-6 pt-5 border-t border-ivory/10 flex items-baseline justify-between">
                        <span className="font-display text-4xl font-semibold text-ivory">
                          ${bundle.price}
                        </span>
                        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-brass/70">
                          Free shipping
                        </span>
                      </div>
                      <div className="mt-auto pt-5">
                        <BuyButton product={bundle} label={`Buy all six · $${bundle.price}`} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* USB */}
              {usb && (
                <Reveal delay={110}>
                  <div className="h-full card-dark card-dark-hover overflow-hidden flex flex-col">
                    <div className="relative aspect-[21/10]">
                      <Image
                        src={usb.image!}
                        alt="Stephen Forester USB drive with six complete albums"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-brass px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#2a1f0b] shadow-lg">
                        {usb.badge}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <p className="eyebrow text-brass/85 text-[0.6rem]">{usb.kicker}</p>
                      <h3 className="mt-2.5 font-display text-3xl font-semibold text-ivory">
                        {usb.title}
                      </h3>
                      <p className="mt-3.5 leading-relaxed text-ivory/62">{usb.blurb}</p>
                      <div className="mt-6 pt-5 border-t border-ivory/10 flex items-baseline justify-between">
                        <span className="font-display text-4xl font-semibold text-ivory">
                          ${usb.price}
                        </span>
                        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-brass/70">
                          Free shipping
                        </span>
                      </div>
                      <div className="mt-auto pt-5">
                        <BuyButton product={usb} label={`Buy the USB drive · $${usb.price}`} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </section>

        {/* ── albums ── */}
        <section id="albums" className="relative overflow-hidden bg-ink-2 py-20 sm:py-24">
          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal>
              <p className="eyebrow text-brass">On CD</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                The albums
              </h2>
              <p className="mt-4 max-w-2xl text-ivory/60 leading-relaxed">
                ${STORE_INFO.cdPrice} each, or all six for ${STORE_INFO.bundlePrice}. Every
                order ships free.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {albums.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 90}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── shirts ── */}
        <section id="shirts" className="relative overflow-hidden bg-ink py-20 sm:py-24 grain">
          <div className="absolute inset-0 spotlight opacity-60" />
          <div className="relative max-w-5xl mx-auto px-6">
            <Reveal className="text-center">
              <p className="eyebrow text-brass">Apparel</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-ivory leading-tight">
                T-shirts
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-ivory/60 leading-relaxed">
                Make a statement about your faith. Soft, comfortable, and true to size with
                virtually no shrinkage — sizes small through 3XL. Tell us your size at
                checkout.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-7 sm:grid-cols-2">
              {shirts.map((p, i) => (
                <Reveal key={p.slug} delay={i * 100}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── help ── */}
        <section className="relative overflow-hidden bg-ink-2 py-16 border-t border-ivory/10">
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ivory">
                Questions about an order?
              </h2>
              <p className="mt-4 text-ivory/60 leading-relaxed">
                Call or text Stephen directly — he handles every order himself.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <a href={`tel:${phoneTel}`} className="btn btn-primary">
                  {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} className="btn btn-outline">
                  Email Stephen
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
