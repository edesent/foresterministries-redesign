// Stephen Forester Ministries — the basics.
// Everything in this file shows up in more than one place on the website
// (the header, the footer, page titles, Google results). Change it here once
// and it changes everywhere.

export const SITE = {
  name: "Stephen Forester Ministries",
  shortName: "Stephen Forester",
  person: "Stephen Forester",
  roles: "Gospel Singer · Instrumentalist · Puppeteer",
  tagline: "Gospel music for every generation",
  description:
    "The gospel music ministry of Stephen Forester — southern gospel singing, piano and guitar, ventriloquist puppets, and preaching, in over 100 churches, concerts, and revivals a year. Based in Lapeer, Michigan.",

  url: "https://www.foresterministries.com",

  // Contact
  phone: "(810) 358-0518",
  email: "foresterministries@yahoo.com",
  mailingName: "Stephen Forester",
  mailingStreet: "71 S. Elba Rd.",
  mailingCity: "Lapeer",
  mailingState: "MI",
  mailingZip: "48446",

  homeChurch: "Faith Bible Baptist Church",
  homeChurchCity: "Lapeer, Michigan",

  facebookUrl: "https://www.facebook.com/StephenForesterMinistries/",

  // The ministry introduction video (YouTube video ID)
  introVideoId: "Zy6nUnWmUtE",

  // Browser chrome / phone home-screen colors
  backgroundColor: "#12100f",
  themeColorDark: "#12100f",

  verse: {
    text:
      "O sing unto the LORD a new song: sing unto the LORD, all the earth.",
    ref: "Psalm 96:1 (KJV)",
  },
};

// Monthly support (the Supporters Club).
//
// Right now this uses the ministry's existing PayPal donate button. To move
// support giving to Stripe, create a **recurring** Stripe Payment Link and
// paste it into `stripeUrl` below — the button will follow it, exactly like
// the store products do. (See the notes at the top of src/config/store.ts.)
export const SUPPORT = {
  paypalDonateButtonId: "URWW4FBGCGPUJ",
  stripeUrl: "",
  /** Sending a gift directly, PayPal friends-and-family style */
  paypalEmail: "foresterministries@yahoo.com",
  minimumMonthly: 5,
};

// The main menu. Groups become dropdowns on desktop.
export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About Stephen", href: "/about" },
      { label: "The Music", href: "/music" },
      { label: "The Puppets", href: "/puppets" },
      { label: "What He Believes", href: "/beliefs" },
    ],
  },
  { label: "Schedule", href: "/schedule" },
  { label: "Store", href: "/store" },
  {
    label: "More",
    children: [
      { label: "What Pastors Say", href: "/endorsements" },
      { label: "Common Questions", href: "/faq" },
      { label: "Supporters Club", href: "/support" },
      { label: "Promote a Concert", href: "/promote" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// Flat list of every page, used by the footer and the sitemap.
export const ALL_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Stephen" },
  { href: "/music", label: "The Music" },
  { href: "/puppets", label: "The Puppets" },
  { href: "/schedule", label: "Tour Schedule" },
  { href: "/store", label: "Store" },
  { href: "/endorsements", label: "What Pastors Say" },
  { href: "/beliefs", label: "What He Believes" },
  { href: "/faq", label: "Common Questions" },
  { href: "/support", label: "Supporters Club" },
  { href: "/promote", label: "Promote a Concert" },
  { href: "/contact", label: "Contact & Booking" },
];

// ---- Derived helpers ----
export const phoneDigits = SITE.phone.replace(/\D/g, "");
export const phoneTel = `+1${phoneDigits}`;
export const mailingAddress = `${SITE.mailingStreet}, ${SITE.mailingCity}, ${SITE.mailingState} ${SITE.mailingZip}`;
