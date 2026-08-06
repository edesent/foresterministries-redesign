import { SUPPORT } from "@/config/site";

/**
 * The monthly-support button. Uses the ministry's PayPal donate button until a
 * recurring Stripe payment link is pasted into SUPPORT.stripeUrl in
 * src/config/site.ts — then it goes to Stripe instead.
 */
export default function SupportButton({
  label = "Set up monthly support",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const btn = `btn btn-primary ${className}`;

  if (SUPPORT.stripeUrl.trim()) {
    return (
      <a
        href={SUPPORT.stripeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={btn}
      >
        {label}
      </a>
    );
  }

  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_blank"
      className="inline-block"
    >
      <input type="hidden" name="hosted_button_id" value={SUPPORT.paypalDonateButtonId} />
      <button type="submit" className={btn}>
        {label}
      </button>
    </form>
  );
}
