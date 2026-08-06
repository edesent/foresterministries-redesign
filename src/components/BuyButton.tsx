import type { Product } from "@/config/store";
import { usesStripe } from "@/config/store";

/**
 * The "Buy" button for one product.
 *
 * It reads the product from src/config/store.ts and sends the buyer to
 * whichever checkout that product is set up for:
 *
 *   • a Stripe payment link, if `stripeUrl` has been filled in, OR
 *   • the product's PayPal button (either style), if it hasn't.
 *
 * That's the whole PayPal → Stripe switch: paste a Stripe link into the
 * product and this button follows it. See the notes at the top of
 * src/config/store.ts.
 */
export default function BuyButton({
  product,
  className = "",
  label,
}: {
  product: Product;
  className?: string;
  label?: string;
}) {
  const text = label ?? `Buy · $${product.price}`;
  const btn = `btn btn-primary w-full ${className}`;

  // ---- Stripe (once a payment link is pasted in) ----
  if (usesStripe(product)) {
    return (
      <a
        href={product.stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        {text}
        <CardIcon />
      </a>
    );
  }

  // ---- PayPal: newer payment link ----
  if (product.paypal.kind === "link") {
    return (
      <form
        action={`https://www.paypal.com/ncp/payment/${product.paypal.paymentId}`}
        method="post"
        target="_blank"
        className="w-full"
      >
        <button type="submit" className={btn}>
          {text}
          <CardIcon />
        </button>
      </form>
    );
  }

  // ---- PayPal: classic hosted button ----
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
      className="w-full"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={product.paypal.buttonId} />
      <input type="hidden" name="currency_code" value="USD" />
      <button type="submit" className={btn}>
        {text}
        <CardIcon />
      </button>
    </form>
  );
}

function CardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 opacity-80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="2.5" />
      <path d="M2 10h20" />
    </svg>
  );
}
