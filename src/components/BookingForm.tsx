"use client";

import { useState } from "react";
import { SITE } from "@/config/site";

const EVENT_TYPES = [
  "Concert",
  "Sunday service",
  "Revival meeting",
  "Banquet",
  "Children's program / VBS",
  "Retirement home",
  "Something else",
];

const field =
  "w-full rounded-xl border border-ivory/15 bg-ink/60 px-4 py-3 text-ivory placeholder:text-ivory/30 focus:border-brass/60 focus:ring-2 focus:ring-brass/20 outline-none transition";

const labelCls = "block text-sm font-medium text-ivory/85 mb-1.5";

export default function BookingForm() {
  const [type, setType] = useState(EVENT_TYPES[0]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || "");

    const subject = `Booking inquiry — ${type}${get("church") ? ` (${get("church")})` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Church / organization: ${get("church")}`,
      `City & state: ${get("location")}`,
      `Type of event: ${type}`,
      `Dates in mind: ${get("dates")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
        <label className={labelCls}>What are you planning?</label>
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

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send inquiry
      </button>

      <p className="text-xs text-ivory/45 leading-relaxed">
        This opens your email app with the details already filled in. Prefer to just talk?
        Call or text{" "}
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
