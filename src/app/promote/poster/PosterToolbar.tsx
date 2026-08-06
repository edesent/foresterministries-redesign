"use client";

import Link from "next/link";

export default function PosterToolbar() {
  return (
    <div className="no-print mx-auto flex max-w-[8.5in] flex-wrap items-center justify-between gap-4">
      <Link
        href="/promote"
        className="text-sm text-ivory/50 hover:text-ivory transition-colors"
      >
        ← Promotion materials
      </Link>
      <button onClick={() => window.print()} className="btn btn-primary btn-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M8 14h8v7H8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Print this poster
      </button>
    </div>
  );
}
