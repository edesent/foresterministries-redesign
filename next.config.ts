import type { NextConfig } from "next";
import path from "path";

// ─────────────────────────────────────────────────────────────────────────────
//  LEGACY REDIRECTS — do not delete. See "Legacy redirects" in README.md.
//
//  Before this site, www.foresterministries.com ran on WebStarts. Its pages
//  lived at paths like /events and /what_pastors_are_saying, and its sitemap
//  (which Google has indexed) listed them with a .html ending. These 308s send
//  every one of those old addresses — plus older pages found in the Wayback
//  Machine that churches may still link to — to the matching page here.
//
//  Notes:
//  - Next.js matches redirect sources case-insensitively, so "/Store.html"
//    and "/store.html" are both covered by one entry.
//  - Trailing slashes are stripped by Next.js before these run, so
//    "/events/" is covered by "/events".
//  - /about, /contact and /store kept the same address on the new site, so
//    only their ".html" forms need a redirect.
// ─────────────────────────────────────────────────────────────────────────────
const legacyRedirects = [
  // Home page
  { source: "/index", destination: "/", permanent: true },
  { source: "/index.html", destination: "/", permanent: true },

  // Pages with the same name on the new site (only the .html form changed)
  { source: "/about.html", destination: "/about", permanent: true },
  { source: "/contact.html", destination: "/contact", permanent: true },
  { source: "/store.html", destination: "/store", permanent: true },

  // Pages that were renamed
  { source: "/events", destination: "/schedule", permanent: true },
  { source: "/events.html", destination: "/schedule", permanent: true },
  { source: "/frequently_asked_questions", destination: "/faq", permanent: true },
  { source: "/frequently_asked_questions.html", destination: "/faq", permanent: true },
  { source: "/doctrinal_statement", destination: "/beliefs", permanent: true },
  { source: "/doctrinal_statement.html", destination: "/beliefs", permanent: true },
  { source: "/what_pastors_are_saying", destination: "/endorsements", permanent: true },
  { source: "/what_pastors_are_saying.html", destination: "/endorsements", permanent: true },
  { source: "/musical_backgrounds", destination: "/music", permanent: true },
  { source: "/musical_backgrounds.html", destination: "/music", permanent: true },
  { source: "/puppet_ministry", destination: "/puppets", permanent: true },
  { source: "/puppet_ministry.html", destination: "/puppets", permanent: true },
  { source: "/concert_posters", destination: "/promote", permanent: true },
  { source: "/concert_posters.html", destination: "/promote", permanent: true },
  { source: "/supporters_club_2", destination: "/support", permanent: true },
  { source: "/supporters_club_2.html", destination: "/support", permanent: true },

  // WebStarts store product pages (one was in the old sitemap)
  { source: "/store/product/:slug*", destination: "/store", permanent: true },

  // Older pages (2008–2019) still in the Wayback Machine
  { source: "/schedule.html", destination: "/schedule", permanent: true },
  { source: "/special_events", destination: "/schedule", permanent: true },
  { source: "/special_events.html", destination: "/schedule", permanent: true },
  { source: "/special_events_2", destination: "/schedule", permanent: true },
  { source: "/special_events_2.html", destination: "/schedule", permanent: true },
  { source: "/stephen_forester.html", destination: "/about", permanent: true },
  { source: "/forester_ministries.html", destination: "/about", permanent: true },
  { source: "/joshua_forester.html", destination: "/about", permanent: true },
  { source: "/gospel_music", destination: "/music", permanent: true },
  { source: "/gospel_music.html", destination: "/music", permanent: true },
  { source: "/music_downloads", destination: "/store", permanent: true },
  { source: "/music_downloads.html", destination: "/store", permanent: true },
  { source: "/demo.html", destination: "/music", permanent: true },
  { source: "/comedy.html", destination: "/puppets", permanent: true },
  { source: "/kids_programs", destination: "/puppets", permanent: true },
  { source: "/kids_programs.html", destination: "/puppets", permanent: true },
  { source: "/download_concert_poster", destination: "/promote", permanent: true },
  { source: "/download_concert_poster.html", destination: "/promote", permanent: true },
  { source: "/supporters_club", destination: "/support", permanent: true },
  { source: "/supporters_club.html", destination: "/support", permanent: true },
  { source: "/ministry_updates", destination: "/", permanent: true },
  { source: "/ministry_updates.html", destination: "/", permanent: true },
  { source: "/links.html", destination: "/", permanent: true },
  { source: "/pictures.html", destination: "/promote", permanent: true },
  { source: "/pictures_:n(\\d+).html", destination: "/promote", permanent: true },
  { source: "/more_pictures.html", destination: "/promote", permanent: true },
  { source: "/see_more_pictures.html", destination: "/promote", permanent: true },
  { source: "/gaither_concert_pics.html", destination: "/promote", permanent: true },
  { source: "/bahuga.html", destination: "/", permanent: true },
  { source: "/school_of_gospel_music.html", destination: "/music", permanent: true },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return legacyRedirects;
  },
};

export default nextConfig;
