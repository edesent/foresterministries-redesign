"use client";

import { useEffect, useId, useRef, useState } from "react";

const SDK_URL =
  "https://www.paypal.com/sdk/js?client-id=BAA9bWQCwo8p9S85J8aIP8PuPeut7HTjyK-8B4XtvW11nEVA43T5BnifO2bzbyNSbUprowAQmzI5H_bBjQ&components=hosted-buttons&enable-funding=venmo&currency=USD";

declare global {
  interface Window {
    paypal?: {
      HostedButtons: (options: { hostedButtonId: string }) => {
        render: (selector: string) => Promise<void> | void;
      };
    };
  }
}

export default function PayPalHostedButton({
  hostedButtonId,
}: {
  hostedButtonId: string;
}) {
  const id = useId().replace(/:/g, "");
  const containerId = `paypal-container-${id}`;
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const rendered = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-paypal-hosted-buttons="true"]',
    );

    const renderButton = () => {
      if (cancelled || rendered.current || !window.paypal?.HostedButtons) return;
      rendered.current = true;
      try {
        void Promise.resolve(
          window.paypal.HostedButtons({ hostedButtonId }).render(
            `#${containerId}`,
          ),
        )
          .then(() => {
            if (!cancelled) setReady(true);
          })
          .catch(() => {
            if (!cancelled) setFailed(true);
          });
      } catch {
        setFailed(true);
      }
    };

    if (window.paypal?.HostedButtons) {
      renderButton();
      return () => {
        cancelled = true;
      };
    }

    if (existing) {
      existing.addEventListener("load", renderButton, { once: true });
      existing.addEventListener("error", () => setFailed(true), { once: true });
      return () => {
        cancelled = true;
        existing.removeEventListener("load", renderButton);
      };
    }

    const script = document.createElement("script");
    script.src = SDK_URL;
    script.async = true;
    script.dataset.paypalHostedButtons = "true";
    script.onload = renderButton;
    script.onerror = () => {
      if (!cancelled) setFailed(true);
    };
    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [containerId, hostedButtonId]);

  return (
    <div className="w-full">
      <div id={containerId} className="min-h-11 w-full" />
      {failed && (
        <p className="mt-2 text-sm text-ivory/60">
          PayPal checkout could not load. Please call or text Stephen to order.
        </p>
      )}
      {!ready && !failed && (
        <p className="mt-2 text-center text-xs text-ivory/45">
          Loading secure PayPal checkout…
        </p>
      )}
    </div>
  );
}
