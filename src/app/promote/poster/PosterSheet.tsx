import Image from "next/image";
import { SITE } from "@/config/site";

/**
 * The concert poster itself — one US-letter sheet (8.5 × 11 in, laid out at
 * 96 px/in = 816 × 1056). PosterBuilder scales it to fit the screen and
 * prints it at true size.
 *
 * Designed for a church office printer: a light paper ground with dark type,
 * so it prints crisply in color OR black-and-white and doesn't drain the ink.
 * The few solid color areas carry `print-color-adjust: exact` (in globals.css,
 * `.poster-sheet`), because browsers drop backgrounds when printing unless
 * told otherwise — the old poster's red band printed as white-on-white.
 *
 * Blank fields render as write-in lines, so a church that would rather fill it
 * in with a marker still gets a finished-looking poster.
 */

export type PosterPhoto = {
  id: string;
  label: string;
  src: string;
  alt: string;
  position: string;
};

export const POSTER_PHOTOS: PosterPhoto[] = [
  {
    id: "autumn",
    label: "Guitar & piano",
    src: "/photos/autumn-keyboard.jpg",
    alt: "Stephen Forester with his guitar at a keyboard on a tree-lined path",
    position: "50% 35%",
  },
  {
    id: "studio",
    label: "Studio",
    src: "/photos/studio-instruments.jpg",
    alt: "Stephen Forester at the keyboard with guitars and an open Bible",
    position: "50% 30%",
  },
  {
    id: "puppets",
    label: "With the puppets",
    src: "/photos/puppets-full-cast.jpg",
    alt: "Stephen Forester with his cast of ventriloquist puppets",
    position: "50% 30%",
  },
  {
    id: "bridge",
    label: "Portrait",
    src: "/photos/hero-bridge.jpg",
    alt: "Stephen Forester smiling on a red iron bridge",
    position: "50% 30%",
  },
];

export const EVENT_KINDS: Record<string, string> = {
  concert: "An Evening of Gospel Music",
  sunday: "Special Music This Sunday",
  revival: "Revival Meeting",
  family: "Gospel Music, Puppets & Family Fun",
  banquet: "A Gospel Music Banquet",
  afternoon: "An Afternoon of Gospel Music",
};

export type PosterData = {
  kind: string;
  headline: string;
  date: string; // YYYY-MM-DD
  time: string;
  venue: string;
  address: string;
  city: string;
  note: string;
  photo: string;
};

export const DEFAULT_POSTER: PosterData = {
  kind: "concert",
  headline: "",
  date: "",
  time: "",
  venue: "",
  address: "",
  city: "",
  note: "Free admission · A love offering will be received",
  photo: "autumn",
};

function parseDate(iso: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  // Noon UTC, formatted in UTC: the printed day can't slip across a timezone.
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], 12));
  const f = (o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", { ...o, timeZone: "UTC" }).format(d);
  return { weekday: f({ weekday: "long" }), month: f({ month: "long" }), day: f({ day: "numeric" }) };
}

const INK = "#1d1a18";
const CRIMSON = "#9b1622";

function WriteIn({ width = "100%", height = 30 }: { width?: string; height?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block align-bottom"
      style={{ width, height, borderBottom: `1.5px solid ${INK}55` }}
    />
  );
}

export default function PosterSheet({ data }: { data: PosterData }) {
  const photo = POSTER_PHOTOS.find((p) => p.id === data.photo) ?? POSTER_PHOTOS[0];
  const headline = data.headline.trim() || EVENT_KINDS[data.kind] || EVENT_KINDS.concert;
  const date = parseDate(data.date);

  return (
    <div
      className="poster-sheet relative flex flex-col overflow-hidden bg-[#fbf8f2]"
      style={{ width: 816, height: 1056, color: INK }}
    >
      {/* Photo */}
      <div className="relative h-[452px] shrink-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority
          sizes="816px"
          className="object-cover"
          style={{ objectPosition: photo.position }}
        />
        {/* Fade into the paper so the photo sits on the sheet, not on top of it. */}
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{ background: "linear-gradient(to bottom, rgba(251,248,242,0), #fbf8f2)" }}
        />
      </div>

      {/* Headline + name */}
      <div className="relative mt-3 px-16 text-center">
        <p
          className="wordmark text-[17px] tracking-[0.32em]"
          style={{ color: CRIMSON }}
        >
          {headline}
        </p>
        <div className="mx-auto mt-4 flex items-center justify-center gap-5">
          <span className="h-px w-16" style={{ background: `${INK}40` }} />
          <span className="text-[13px] uppercase tracking-[0.3em]" style={{ color: `${INK}99` }}>
            featuring
          </span>
          <span className="h-px w-16" style={{ background: `${INK}40` }} />
        </div>
        <h1 className="wordmark mt-3 text-[64px] font-bold leading-[0.95] tracking-[0.04em]">
          Stephen Forester
        </h1>
        <p className="mt-4 font-display text-[23px] italic" style={{ color: `${INK}cc` }}>
          Southern gospel singing · piano &amp; guitar · ventriloquist puppets
        </p>
      </div>

      {/* Event details */}
      <div className="mx-16 mt-9 flex items-stretch gap-8">
        {/* Solid crimson when there's a date; an outline on paper when blank,
            so it can be written on with a pen. */}
        <div
          className="flex w-[168px] shrink-0 flex-col items-center justify-center rounded-[6px] py-5 text-center"
          style={
            date
              ? { background: CRIMSON, color: "#fff" }
              : { border: `2px solid ${CRIMSON}`, color: CRIMSON }
          }
        >
          {date ? (
            <>
              <span className="wordmark text-[15px] tracking-[0.24em] text-white/85">
                {date.weekday}
              </span>
              <span className="mt-1 font-display text-[92px] font-semibold leading-[0.9]">
                {date.day}
              </span>
              <span className="wordmark mt-1 text-[19px] tracking-[0.2em]">{date.month}</span>
            </>
          ) : (
            <>
              <span className="wordmark text-[14px] tracking-[0.3em]">Date</span>
              <span className="mt-10 block h-px w-[110px]" style={{ background: `${INK}55` }} />
              <span className="mt-10 block h-px w-[110px]" style={{ background: `${INK}55` }} />
            </>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-[10px]">
          <p className="font-display text-[34px] font-semibold leading-[1.05]">
            {data.time.trim() || (
              <>
                <span className="wordmark mr-3 text-[14px] tracking-[0.2em]" style={{ color: `${INK}99` }}>
                  Time
                </span>
                <WriteIn width="60%" />
              </>
            )}
          </p>
          <p className="font-display text-[31px] font-semibold leading-[1.1]" style={{ color: CRIMSON }}>
            {data.venue.trim() || (
              <>
                <span className="wordmark mr-3 text-[14px] tracking-[0.2em]" style={{ color: `${INK}99` }}>
                  Place
                </span>
                <WriteIn width="66%" />
              </>
            )}
          </p>
          <p className="text-[18px] leading-snug" style={{ color: `${INK}cc` }}>
            {data.address.trim() || data.city.trim() ? (
              <>
                {data.address.trim()}
                {data.address.trim() && data.city.trim() && <br />}
                {data.city.trim()}
              </>
            ) : (
              <WriteIn height={26} />
            )}
          </p>
        </div>
      </div>

      {data.note.trim() && (
        <p className="mx-16 mt-7 text-center font-display text-[22px] italic" style={{ color: `${INK}cc` }}>
          {data.note.trim()}
        </p>
      )}

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between gap-6 border-t px-16 py-6" style={{ borderColor: `${INK}22` }}>
        <div className="flex items-center gap-4">
          {/* The light mark is a white disc with the letters cut out; on a
              crimson disc it reads crisply, where the cream one vanished. */}
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full" style={{ background: CRIMSON }}>
            <Image src="/brand/sf-monogram-light.png" alt="" width={512} height={512} className="h-[50px] w-[50px]" />
          </span>
          <div>
            <p className="wordmark text-[15px] font-bold tracking-[0.14em]">Stephen Forester Ministries</p>
            <p className="text-[13px]" style={{ color: `${INK}99` }}>
              Lapeer, Michigan · Gospel music for every generation
            </p>
          </div>
        </div>
        <p className="text-right text-[15px] font-semibold leading-snug" style={{ color: CRIMSON }}>
          foresterministries.com
          <br />
          <span style={{ color: INK }}>{SITE.phone}</span>
        </p>
      </div>
    </div>
  );
}
