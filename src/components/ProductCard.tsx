import Image from "next/image";
import type { Product } from "@/config/store";
import BuyButton from "./BuyButton";
import ExpandableText from "./ExpandableText";

/**
 * Store card. Every card in a row is the same height, and each section sits on
 * the same line across the row: the title gets room for two lines, the
 * description gets a fixed two-line slot (with "Read more" if it runs longer),
 * and the price + buy button are pinned to the bottom.
 */
export default function ProductCard({ product }: { product: Product }) {
  const p = product;

  return (
    <article className="h-full card-dark card-dark-hover overflow-hidden flex flex-col">
      {/* Cover */}
      <div
        className={`relative aspect-square overflow-hidden ${
          p.category === "apparel" ? "bg-white" : "bg-ink"
        }`}
      >
        {p.image && (
          <Image
            src={p.image}
            alt={
              p.category === "apparel"
                ? `${p.title}`
                : `${p.title} — album cover`
            }
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={
              p.category === "apparel" ? "object-contain p-5" : "object-cover"
            }
          />
        )}
        {p.badge && (
          <span className="absolute top-3.5 left-3.5 rounded-full bg-crimson px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ivory shadow-lg">
            {p.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-brass/85 text-[0.6rem]">{p.kicker}</p>
        <h3 className="font-display text-2xl font-semibold text-ivory mt-2.5 leading-tight sm:min-h-[2lh]">
          {p.title}
        </h3>

        {/* Fixed two-line description slot — kept even when there is no
            description, so the song lists all start on the same line. */}
        <div className="mt-3 text-sm leading-relaxed min-h-[2lh]">
          {p.blurb && (
            <ExpandableText text={p.blurb} lines={2} className="text-ivory/60" />
          )}
        </div>

        {p.tracks && (
          <ol className="mt-4 space-y-1 text-sm text-ivory/55">
            {p.tracks.map((t, i) => (
              <li key={t} className="flex gap-2.5">
                <span className="text-brass/50 tabular-nums w-5 shrink-0 text-right">
                  {i + 1}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        )}

        {/* Price + buy, pinned to the bottom of the card */}
        <div className="mt-auto pt-6">
          <div className="pt-5 border-t border-ivory/10 flex items-baseline justify-between gap-3">
            <span className="font-display text-3xl font-semibold text-ivory">
              ${p.price}
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.16em] text-brass/70">
              Free shipping
            </span>
          </div>

          {p.buyNote && (
            <p className="mt-3 text-xs text-ivory/45">{p.buyNote}</p>
          )}

          <div className="pt-4">
            <BuyButton product={p} />
          </div>
        </div>
      </div>
    </article>
  );
}
