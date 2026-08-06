// Stephen Forester Ministries — the store.
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

export type PayPal =
  // The classic "hosted button" (PayPal → Pay & Get Paid → PayPal buttons)
  | { kind: "hosted"; buttonId: string }
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
  paypal: PayPal;
  /** Paste a Stripe Payment Link here to move this product to Stripe. */
  stripeUrl?: string;
};

export const STORE_INFO = {
  cdPrice: 10,
  bundlePrice: 30,
  shirtPrice: 20,
  freeShipping: true,
  headline: "Six albums, free shipping, and a hymn or two you haven't heard in years.",
  orderNote:
    "Order online below, or call and pay by card over the phone — Stephen can also arrange for you to mail a check.",
};

export const PRODUCTS: Product[] = [
  /* ------------------------------------------------------------ collections */
  {
    slug: "all-six-albums",
    title: "All Six Albums",
    kicker: "The whole catalog on CD",
    price: 30,
    badge: "Best value",
    featured: true,
    category: "collection",
    blurb:
      "Every album Stephen has recorded — new songs, classic hymns, an instrumental record, and the Christmas album. Sixty songs for the price of three CDs.",
    covers: [
      "/store/you-are-loved.jpg",
      "/store/never-too-far.jpg",
      "/store/onward-christian-soldiers.jpg",
      "/store/amazing-grace.jpg",
      "/store/a-christmas-hallelujah.jpg",
      "/store/he-wont-fail-you.jpg",
    ],
    paypal: { kind: "hosted", buttonId: "3HJJVRRAWJAL8" },
    stripeUrl: "",
  },
  {
    slug: "usb-drive",
    title: "USB Drive",
    kicker: "All six albums on one drive",
    price: 30,
    badge: "No CD player? No problem",
    featured: true,
    category: "collection",
    image: "/store/usb-drive.jpg",
    blurb:
      "New car doesn't have a CD player? All six of Stephen's albums come on a single USB drive that plays straight from any car with a USB port. You can also play it on your computer, load the songs into your music library, and put them on your phone.",
    paypal: { kind: "hosted", buttonId: "F2GQZY9ZMCZGW" },
    stripeUrl: "",
  },

  /* ---------------------------------------------------------------- albums  */
  {
    slug: "you-are-loved",
    title: "You Are Loved",
    kicker: "2025 release",
    price: 10,
    badge: "Newest",
    category: "album",
    image: "/store/you-are-loved.jpg",
    tracks: [
      "He Knows The Way",
      "Still Amazing",
      "The Last Time I Checked",
      "Beautiful Scars",
      "I Trust You With My Life",
      "Loved",
      "Glory To His Name",
      "What's Coming Next",
      "He's Gonna Come Through",
      "Are You Ready?",
    ],
    paypal: { kind: "link", paymentId: "345K63CHRL2HN" },
    stripeUrl: "",
  },
  {
    slug: "never-too-far",
    title: "Never Too Far",
    kicker: "2023 release",
    price: 10,
    category: "album",
    image: "/store/never-too-far.jpg",
    tracks: [
      "He Gave His Life",
      "Never Too Far",
      "Leap Of Faith",
      "You Can't Outrun Those Prayers",
      "Chasing After You",
      "It Takes A Little Again",
      "I'd Choose You Again",
      "Victory In Jesus",
      "I Am Free",
      "He Chooses To Use Us",
    ],
    paypal: { kind: "hosted", buttonId: "7EWVU7UWRBH5Q" },
    stripeUrl: "",
  },
  {
    slug: "onward-christian-soldiers",
    title: "Onward Christian Soldiers",
    kicker: "Instrumental collection",
    price: 10,
    category: "album",
    image: "/store/onward-christian-soldiers.jpg",
    blurb: "Hymns and gospel songs at the piano — no words, just the melodies.",
    tracks: [
      "Onward Christian Soldiers",
      "God Made A Way",
      "Sweet Hour Of Prayer",
      "I'm Feeling Fine",
      "Just A Closer Walk",
      "Brethren We Have Met To Worship",
      "Without The Lord",
      "He Touched Me",
      "Blood Of Jesus Medley",
    ],
    paypal: { kind: "hosted", buttonId: "CNS98SCWJKHZW" },
    stripeUrl: "",
  },
  {
    slug: "amazing-grace",
    title: "Amazing Grace",
    kicker: "Hymns",
    price: 10,
    category: "album",
    image: "/store/amazing-grace.jpg",
    blurb: "The old hymns, sung the way you remember them.",
    tracks: [
      "Amazing Grace",
      "Blessed Assurance",
      "Leaning On The Everlasting Arms",
      "I'd Rather Have Jesus",
      "He Paid A Debt",
      "'Til The Storm Passes By",
      "God On The Mountain",
      "No One Ever Cared For Me",
      "Beulah Land",
      "Redeemed",
    ],
    paypal: { kind: "hosted", buttonId: "3XNWCNVH9F3WU" },
    stripeUrl: "",
  },
  {
    slug: "a-christmas-hallelujah",
    title: "A Christmas Hallelujah",
    kicker: "Christmas album",
    price: 10,
    category: "album",
    image: "/store/a-christmas-hallelujah.jpg",
    tracks: [
      "Hallelujah",
      "White Christmas",
      "Come & See What's Happening",
      "It's About The Cross",
      "Jesus, What A Wonderful Child",
      "It Came Upon A Midnight Clear",
      "Glory To God In The Highest",
      "Joseph",
      "Fear Not",
      "Still The Greatest Story",
      "Go Tell It On The Mountain",
    ],
    paypal: { kind: "hosted", buttonId: "SHMHWKZ9ENXGN" },
    stripeUrl: "",
  },
  {
    slug: "he-wont-fail-you",
    title: "He Won't Fail You",
    kicker: "2020 release",
    price: 10,
    category: "album",
    image: "/store/he-wont-fail-you.jpg",
    tracks: [
      "He Won't Fail You",
      "She Still Remembers Jesus' Name",
      "Power In The Blood",
      "Why Worry",
      "Thank-You",
      "The Unclouded Day",
      "Now More Than Ever (feat. Marie)",
      "Happy Ending",
      "The Judgement",
      "Get There",
    ],
    paypal: { kind: "hosted", buttonId: "KF76P428DUPYA" },
    stripeUrl: "",
  },

  /* --------------------------------------------------------------- apparel  */
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
