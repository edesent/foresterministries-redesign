import type { Metadata } from "next";
import PosterBuilder from "./PosterBuilder";

export const metadata: Metadata = {
  title: "Make Your Concert Poster",
  description:
    "A free concert poster for churches hosting Stephen Forester. Type in your date, time, and church, choose a photo, and print it or save it as a PDF.",
  robots: { index: false, follow: true },
};

export default function Poster() {
  return (
    <main className="poster-page min-h-screen bg-ink-2">
      <PosterBuilder />
    </main>
  );
}
