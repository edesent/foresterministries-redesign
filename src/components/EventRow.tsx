import { formatEventDate, mapUrl, type Event } from "@/config/schedule";

/** One meeting on the schedule page. */
export default function EventRow({ event }: { event: Event }) {
  const d = formatEventDate(event.date);

  return (
    <div className="group relative flex gap-5 sm:gap-7 rounded-2xl border border-ivory/10 bg-ink-2/70 p-5 sm:p-6 transition-colors hover:border-brass/40 hover:bg-ink-3/70">
      {/* Date block */}
      <div className="shrink-0 w-16 sm:w-[4.75rem] text-center">
        <div className="rounded-xl bg-crimson/15 ring-1 ring-crimson/35 py-2.5">
          <span className="block wordmark text-[0.6rem] text-brass tracking-[0.2em]">
            {d.monthShort}
          </span>
          <span className="block font-display text-3xl font-semibold text-ivory leading-none mt-1">
            {d.day}
          </span>
        </div>
        <span className="block mt-2 text-[0.66rem] uppercase tracking-[0.14em] text-ivory/40">
          {d.weekdayShort}
        </span>
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        {event.host && (
          <p className="eyebrow text-brass/85 text-[0.58rem] mb-1.5">{event.host}</p>
        )}
        <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-ivory leading-snug">
          {event.venue}
        </h3>
        <p className="mt-1.5 text-sm text-ivory/55">
          {event.address && <>{event.address} · </>}
          {event.city}, {event.state} {event.zip}
        </p>
        {event.note && (
          <p className="mt-2.5 text-sm text-ivory/50 leading-relaxed">{event.note}</p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {event.time && (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brass-light">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7.5V12l3 2" strokeLinecap="round" />
              </svg>
              {event.time}
            </span>
          )}
          <a
            href={mapUrl(event)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-ivory/50 hover:text-brass-light transition-colors"
          >
            Directions
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M7 17L17 7M17 7H9m8 0v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
