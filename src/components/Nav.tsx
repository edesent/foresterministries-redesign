"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/config/site";

type Item = { label: string; href: string };
type Group = { label: string; children: Item[] };
type Entry = Item | Group;

const isGroup = (e: Entry): e is Group => "children" in e;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/92 backdrop-blur-md shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)] py-2"
          : "bg-gradient-to-b from-ink/90 via-ink/55 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group"
          aria-label={`${SITE.name} — home`}
        >
          <Image
            src="/brand/sf-monogram.png"
            alt=""
            width={512}
            height={512}
            priority
            className={`w-auto transition-all duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] ${
              scrolled ? "h-9" : "h-11"
            }`}
          />
          <span className="hidden sm:block leading-none">
            <span className="wordmark block text-ivory text-[0.95rem] sm:text-[1.05rem] font-semibold">
              Stephen Forester
            </span>
            <span className="wordmark block text-brass/80 text-[0.5rem] sm:text-[0.56rem] mt-1 tracking-[0.34em]">
              Ministries
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-0.5">
          {(NAV as Entry[]).map((entry) =>
            isGroup(entry) ? (
              <div key={entry.label} className="relative group">
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[0.9rem] font-medium whitespace-nowrap transition-colors ${
                    entry.children.some((c) => active(c.href))
                      ? "text-brass-light"
                      : "text-ivory/80 group-hover:text-brass-light"
                  }`}
                >
                  {entry.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="min-w-56 rounded-2xl bg-ink-2 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] ring-1 ring-ivory/10">
                    {entry.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block rounded-xl px-3.5 py-2.5 text-[0.9rem] font-medium transition-colors ${
                          active(c.href)
                            ? "text-brass-light bg-ivory/[0.07]"
                            : "text-ivory/75 hover:text-brass-light hover:bg-ivory/[0.06]"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                className={`px-3.5 py-2 rounded-full text-[0.9rem] font-medium whitespace-nowrap transition-colors ${
                  active(entry.href)
                    ? "text-brass-light"
                    : "text-ivory/80 hover:text-brass-light"
                }`}
              >
                {entry.label}
              </Link>
            ),
          )}
          <Link href="/contact" className="btn btn-primary btn-sm ml-3 whitespace-nowrap">
            Book Stephen
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2 relative z-50"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className={`w-6 h-0.5 bg-ivory rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-ivory rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-ivory rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[19rem] max-w-[85vw] bg-ink-2 pt-24 px-7 overflow-y-auto pb-12 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col">
          {(NAV as Entry[]).map((entry) =>
            isGroup(entry) ? (
              <li key={entry.label} className="pt-4">
                <p className="eyebrow text-brass/70 text-[0.58rem] pb-1.5">{entry.label}</p>
                {entry.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block py-2.5 pl-3 text-ivory/85 hover:text-brass-light font-medium transition-colors"
                  >
                    {c.label}
                  </Link>
                ))}
              </li>
            ) : (
              <li key={entry.href}>
                <Link
                  href={entry.href}
                  className="block py-2.5 text-ivory/85 hover:text-brass-light font-medium transition-colors"
                >
                  {entry.label}
                </Link>
              </li>
            ),
          )}
          <li className="mt-7">
            <Link href="/contact" className="btn btn-primary w-full">
              Book Stephen
            </Link>
          </li>
          <li className="mt-4 text-center">
            <a
              href={`tel:+1${SITE.phone.replace(/\D/g, "")}`}
              className="text-sm text-ivory/60 hover:text-brass-light transition-colors"
            >
              {SITE.phone}
            </a>
          </li>
        </ul>
      </div>
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm -z-[1]"
        />
      )}
    </nav>
  );
}
