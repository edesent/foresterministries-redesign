"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/config/site";

const EVENT_TYPES = [
  "Concert",
  "Sunday service",
  "Revival meeting",
  "Banquet",
  "Children's program / VBS",
  "Retirement home",
  "Poster request",
  "Store order or question",
  "Supporters Club",
  "Something else",
];

// /contact?about=poster (etc.) pre-selects a topic, so the "Email Stephen"
// buttons around the site can land here on the right choice.
const ABOUT: Record<string, string> = {
  poster: "Poster request",
  store: "Store order or question",
  support: "Supporters Club",
};

const field =
  "w-full rounded-xl border border-ivory/15 bg-ink/60 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-brass/60 focus:ring-2 focus:ring-brass/20 outline-none transition";

const labelCls = "block text-sm font-medium text-ivory/85 mb-1.5";

type Status = { state: "idle" | "sending" | "sent" } | { state: "error"; message: string };

/**
 * The form, with the topic pre-selected from ?about=. Reading the query needs
 * a Suspense boundary in Next 16; its fallback is the same form without the
 * preset, so the statically rendered page still ships a complete form.
 */
export default function BookingForm() {
  return (
    <Suspense fallback={<Form preset={null} />}>
      <FormFromUrl />
    </Suspense>
  );
}

function FormFromUrl() {
  const about = useSearchParams().get("about");
  return <Form preset={(about && ABOUT[about]) || null} />;
}

function Form({ preset }: { preset: string | null }) {
  const [picked, setType] = useState<string | null>(null);
  const type = picked ?? preset ?? EVENT_TYPES[0];
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    fetch("/api/form", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setToken(d.token ?? ""))
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type, token }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({
          state: "error",
          message: body.error ?? `Something went wrong. Please call or text ${SITE.phone}.`,
        });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({ state: "error", message: `Couldn't send. Please call or text ${SITE.phone}.` });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="rounded-2xl border border-brass/30 bg-brass/[0.07] p-8 text-center">
        <p className="font-display text-2xl font-semibold text-ivory">Thank you — it’s sent.</p>
        <p className="mt-3 text-ivory/65 leading-relaxed">
          Stephen will get back to you personally. If it’s urgent, call or text{" "}
          <a
            href={`tel:+1${SITE.phone.replace(/\D/g, "")}`}
            className="text-brass-light underline underline-offset-2"
          >
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: hidden from people, filled in by bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Your name</label>
          <input name="name" required className={field} placeholder="Pastor John Smith" />
        </div>
        <div>
          <label className={labelCls}>Church or organization</label>
          <input name="church" className={field} placeholder="Grace Baptist Church" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>City &amp; state</label>
          <input name="location" className={field} placeholder="Lapeer, MI" />
        </div>
        <div>
          <label className={labelCls}>Dates you have in mind</label>
          <input name="dates" className={field} placeholder="A Sunday next spring / flexible" />
        </div>
      </div>

      <div>
        <label className={labelCls}>What’s this about?</label>
        <div className="flex flex-wrap gap-2">
          {EVENT_TYPES.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                type === t
                  ? "bg-crimson text-ivory border-crimson"
                  : "bg-ink/50 text-ivory/70 border-ivory/15 hover:border-brass/50 hover:text-ivory"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Email</label>
          <input
            type="email"
            name="email"
            required
            className={field}
            placeholder="you@church.org"
          />
        </div>
        <div>
          <label className={labelCls}>Phone</label>
          <input name="phone" className={field} placeholder="(810) 555-0100" />
        </div>
      </div>

      <div>
        <label className={labelCls}>Anything else Stephen should know?</label>
        <textarea
          name="message"
          rows={4}
          className={field}
          placeholder="Tell him a little about your church and what you're hoping for."
        />
      </div>

      {status.state === "error" && (
        <p role="alert" className="rounded-xl border border-crimson/40 bg-crimson/10 px-4 py-3 text-sm text-ivory/85">
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="text-xs text-ivory/45 leading-relaxed">
        Your message goes straight to Stephen. Prefer to just talk? Call or text{" "}
        <a
          href={`tel:+1${SITE.phone.replace(/\D/g, "")}`}
          className="text-brass-light underline underline-offset-2"
        >
          {SITE.phone}
        </a>
        .
      </p>
    </form>
  );
}
