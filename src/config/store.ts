// Stephen Forester Ministries — the store.
//
// THE CDs ARE NOT IN THIS FILE. They live in src/data/albums.json, which has
// its own instructions at the top. This file holds the bundle, the USB drive,
// and the T-shirts.
//
// ────────────────────────────────────────────────────────────────────────────
//  SWITCHING FROM PAYPAL TO STRIPE
// ────────────────────────────────────────────────────────────────────────────
//  Right now every "Buy" button sends people to PayPal, using the same PayPal
//  buttons the old website used. Nothing else has to change for that to work.
//
//  When you're ready to move to Stripe:
//    1. In your Stripe dashboard, create a **Payment Link** for each product.
//       (Products → add product → price → "Create payment link".) You'll get a
//       URL that looks like  https://buy.stripe.com/xxxxxxxxxxxx
//    2. Paste that URL into the `stripeUrl` line for that product below.
//    3. That's it. As soon as a product has a `stripeUrl`, its button goes to
//       Stripe instead of PayPal. Products without one keep using PayPal, so
//       you can move them over one at a time — or all at once.
//
//  Nothing is deleted in the process: the PayPal details stay in this file as a
//  fallback, so you can undo the switch by clearing the `stripeUrl` again.
//
//  For the t-shirts, remember to turn on "Collect customer information →
//  custom field" in the Stripe payment link so buyers can tell you their size.
//  (That's what the current PayPal buttons ask for.)
// ────────────────────────────────────────────────────────────────────────────

import albumsFile from "@/data/albums.json";

export type PayPal =
  // The classic "hosted button" (PayPal → Pay & Get Paid → PayPal buttons)
  | { kind: "hosted"; buttonId: string }
  // PayPal JavaScript SDK hosted button
  | { kind: "hosted-sdk"; hostedButtonId: string }
  // The newer PayPal payment link (pays via /ncp/payment/...)
  | { kind: "link"; paymentId: string };

export type Product = {
  slug: string;
  title: string;
  /** Short line under the title, e.g. "2025 release" */
  kicker: string;
  price: number;
  /** Photo in /public/store */
  image?: string;
  /** For the bundle: a stack of album covers instead of one photo */
  covers?: string[];
  /** Longer description, shown on the card */
  blurb?: string;
  /** Song list for albums */
  tracks?: string[];
  /** Extra note shown right above the buy button */
  buyNote?: string;
  badge?: string;
  featured?: boolean;
  category: "album" | "collection" | "apparel";
  /** Left out only for an album that has a Stripe link and no PayPal button. */
  paypal?: PayPal;
  /** Paste a Stripe Payment Link here to move this product to Stripe. */
  stripeUrl?: string;
};

/* ------------------------------------------------------------------ albums */

type AlbumEntry = {
  title: string;
  subtitle?: string;
  cover: string;
  price?: number;
  badge?: string;
  description?: string;
  songs?: string[];
  paypal?: PayPal;
  stripeUrl?: string;
};

export type Album = {
  slug: string;
  title: string;
  subtitle: string;
  cover: string;
  songs: string[];
  /** The store listing, or null while the album has no buy button yet. */
  product: Product | null;
};

const CD_PRICE = 10;

const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Every CD, newest first, straight from src/data/albums.json. */
export const ALBUMS: Album[] = (albumsFile.albums as AlbumEntry[]).map((a) => {
  const slug = slugify(a.title);
  const cover = a.cover.startsWith("/") ? a.cover : `/store/${a.cover}`;
  const subtitle = a.subtitle?.trim() ?? "";
  const songs = a.songs ?? [];
  const stripeUrl = a.stripeUrl?.trim() ?? "";
  const forSale = Boolean(a.paypal || stripeUrl);

  return {
    slug,
    title: a.title,
    subtitle,
    cover,
    songs,
    product: forSale
      ? {
          slug,
          title: a.title,
          kicker: subtitle,
          price: a.price ?? CD_PRICE,
          image: cover,
          blurb: a.description || undefined,
          tracks: songs.length ? songs : undefined,
          badge: a.badge || undefined,
          category: "album",
          paypal: a.paypal,
          stripeUrl,
        }
      : null,
  };
});

const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen", "twenty",
];

/** "six" — how many albums there are, as a word, for headings and labels. */
export const ALBUM_COUNT = NUMBER_WORDS[ALBUMS.length] ?? String(ALBUMS.length);
/** "Six" */
export const ALBUM_COUNT_TITLE = ALBUM_COUNT[0].toUpperCase() + ALBUM_COUNT.slice(1);

export const STORE_INFO = {
  cdPrice: CD_PRICE,
  bundlePrice: 30,
  shirtPrice: 20,
  freeShipping: true,
  headline: `${ALBUM_COUNT_TITLE} albums, free shipping, and a hymn or two you haven't heard in years.`,
  orderNote:
    "Order online below, or call and pay by card over the phone — Stephen can also arrange for you to mail a check.",
};

export const PRODUCTS: Product[] = [
  /* ------------------------------------------------------------ collections */
  {
    slug: "all-six-albums",
    title: `All ${ALBUM_COUNT_TITLE} Albums`,
    kicker: "The whole catalog on CD",
    price: 30,
    badge: "Best value",
    featured: true,
    category: "collection",
    image: ALBUMS[0]?.cover,
    blurb:
      `Every album Stephen has recorded — new songs, classic hymns, an instrumental record, and the Christmas album. ${ALBUM_COUNT_TITLE} albums for the price of three CDs.`,
    covers: ALBUMS.map((a) => a.cover),
    paypal: { kind: "hosted", buttonId: "3HJJVRRAWJAL8" },
    stripeUrl: "",
  },
  {
    slug: "usb-drive",
    title: "USB Drive",
    kicker: `All ${ALBUM_COUNT} albums on one drive`,
    price: 30,
    badge: "No CD player? No problem",
    featured: true,
    category: "collection",
    image: "/store/usb-drive.jpg",
    blurb:
      `New car doesn't have a CD player? All ${ALBUM_COUNT} of Stephen's albums come on a single USB drive that plays straight from any car with a USB port. You can also play it on your computer, load the songs into your music library, and put them on your phone.`,
    paypal: { kind: "hosted", buttonId: "F2GQZY9ZMCZGW" },
    stripeUrl: "",
  },

  /* ---------------------------------------------------------------- albums  */
  // From src/data/albums.json — only the ones with a buy button.
  ...ALBUMS.flatMap((a) => (a.product ? [a.product] : [])),

  /* --------------------------------------------------------------- apparel  */
  {
    slug: "shirt-grace-and-mercy",
    title: "“I Found God’s Grace & Mercy” T-Shirt",
    kicker: "Blue · sizes S–3XL",
    price: 20,
    category: "apparel",
    image: "/store/img-9747.jpeg",
    blurb:
      "Share the message of God’s grace and mercy. Soft, comfortable, and true to size with virtually no shrinkage. Available from small all the way to 3XL.",
    buyNote: "Tell us your size at checkout.",
    paypal: { kind: "link", paymentId: "GSHMGE2RY4S64" },
    stripeUrl: "",
  },
  {
    slug: "shirt-you-are-loved",
    title: "“You Are Loved” T-Shirt",
    kicker: "Navy · sizes S–3XL",
    price: 20,
    category: "apparel",
    image: "/store/shirt-you-are-loved.jpg",
    blurb:
      "Soft, comfortable, and true to size with virtually no shrinkage. Available from small all the way to 3XL.",
    buyNote: "Tell us your size at checkout.",
    paypal: { kind: "link", paymentId: "HJ7DGC6HB2SDG" },
    stripeUrl: "",
  },
  {
    slug: "shirt-i-once-was-lost",
    title: "“I Once Was Lost” T-Shirt",
    kicker: "Red · sizes S–3XL",
    price: 20,
    category: "apparel",
    image: "/store/shirt-i-once-was-lost.jpg",
    blurb:
      "Soft, comfortable, and true to size with virtually no shrinkage. Available from small all the way to 3XL.",
    buyNote: "Tell us your size at checkout.",
    paypal: { kind: "link", paymentId: "KFB9VHSGMZP4N" },
    stripeUrl: "",
  },
];

/* ----------------------------------------------------------------- helpers  */

export const byCategory = (c: Product["category"]) =>
  PRODUCTS.filter((p) => p.category === c);

export const findProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

/** True once a Stripe payment link has been pasted in for this product. */
export const usesStripe = (p: Product) => Boolean(p.stripeUrl && p.stripeUrl.trim());
