import Link from "next/link";
import Image from "next/image";
import { SITE, ALL_PAGES, phoneTel, mailingAddress } from "@/config/site";

const COLUMNS = [
  {
    title: "The Ministry",
    links: ALL_PAGES.filter((p) =>
      ["/about", "/music", "/puppets", "/beliefs", "/endorsements"].includes(p.href),
    ),
  },
  {
    title: "Visit & Support",
    links: ALL_PAGES.filter((p) =>
      ["/schedule", "/store", "/support", "/faq", "/promote"].includes(p.href),
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-2 text-ivory/60 border-t border-ivory/10">
      <div className="absolute inset-0 grooves opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8 pb-12 border-b border-ivory/10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <Image
                src="/brand/sf-monogram.png"
                alt=""
                width={512}
                height={512}
                className="h-14 w-auto"
              />
              <span className="leading-none">
                <span className="wordmark block text-ivory text-base font-semibold">
                  Stephen Forester
                </span>
                <span className="wordmark block text-brass/80 text-[0.55rem] mt-1.5 tracking-[0.34em]">
                  Ministries
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/55">
              Southern gospel music, clean humor, ventriloquist puppets, and a clear
              presentation of the gospel — in over 100 churches, concerts, and revivals
              a year.
            </p>
            <p className="font-display italic text-brass-light/85 mt-6 text-[1.05rem] leading-relaxed">
              &ldquo;{SITE.verse.text}&rdquo;
              <span className="block not-italic font-sans text-[0.7rem] tracking-[0.18em] uppercase text-ivory/35 mt-2">
                {SITE.verse.ref}
              </span>
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="eyebrow text-brass mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ivory/55 hover:text-ivory transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="eyebrow text-brass mb-4">Get in Touch</h4>
            <a
              href={`tel:${phoneTel}`}
              className="block font-display text-2xl text-ivory hover:text-brass-light transition-colors"
            >
              {SITE.phone}
            </a>
            <p className="text-xs text-ivory/40 mt-1">Call or text</p>
            <Link
              href="/contact#message"
              className="block text-sm text-ivory/70 hover:text-brass-light transition-colors mt-4"
            >
              Send a message
            </Link>
            <p className="text-sm text-ivory/50 mt-4 leading-relaxed">
              {SITE.mailingName}
              <br />
              {mailingAddress}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stephen Forester Ministries on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-ivory/15 text-ivory/70 hover:text-ivory hover:ring-brass/60 transition"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
                  <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                </svg>
              </a>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Book Stephen
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/30">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://www.elijahdesent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ivory/60 transition-colors"
            >
              elijahdesent.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
