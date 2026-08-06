# Stephen Forester Ministries — website

The website for **Stephen Forester Ministries** — the gospel music ministry of
Stephen Forester of Lapeer, Michigan. Southern gospel singing, piano and guitar,
ventriloquist puppets, preaching, a tour schedule, and an online store.

Built and maintained by Pastor Eli ([elijahdesent.com](https://www.elijahdesent.com)).
Live on Vercel; every push to `main` redeploys the site in about a minute.

---

## How to make a change (plain English)

Almost everything you'd want to edit lives in **four files** in `src/config/`.
You never have to touch the design or the page layout.

| I want to change… | Edit this file |
| --- | --- |
| Phone, email, mailing address, Facebook link, the verse in the footer | `src/config/site.ts` |
| Any paragraph of wording — the About story, the FAQs, pastor endorsements, what he believes | `src/config/content.ts` |
| Tour dates | `src/config/schedule.ts` |
| Store products, prices, song lists, checkout links | `src/config/store.ts` |

Each file has instructions in comments at the top. Keep the quotes and commas
where they are and you can't break anything.

### Adding a tour date

Open `src/config/schedule.ts`, copy one of the existing blocks, and change it:

```ts
{
  date: "2027-03-14",              // always YYYY-MM-DD
  venue: "Grace Baptist Church",
  address: "123 Main St.",         // optional
  city: "Flint",
  state: "MI",
  zip: "48501",                    // optional
  time: "6:00pm concert",
  note: "Dinner beforehand.",      // optional
},
```

**Past dates disappear on their own.** Anything older than today drops off the
schedule automatically, so old dates never need cleaning up. You can leave them
in the file or delete them, whichever you prefer.

---

## Switching the store from PayPal to Stripe

Right now every buy button goes to PayPal, using the same PayPal buttons the old
website used. To move a product to Stripe:

1. In Stripe, create a **Payment Link** for the product
   (Products → add product → price → *Create payment link*).
   You'll get a URL like `https://buy.stripe.com/xxxxxxxx`.
2. In `src/config/store.ts`, paste it into that product's `stripeUrl` line.
3. Done. As soon as a product has a `stripeUrl`, its button goes to Stripe.
   Products with an empty `stripeUrl` keep using PayPal — so you can move them
   over one at a time, or all at once.

Nothing is deleted along the way: the PayPal details stay in the file, so
clearing `stripeUrl` puts that product back on PayPal.

Two things to remember when you make the Stripe links:

- **T-shirts** need a custom field for the size. In the Stripe payment link,
  turn on *Collect customer information → custom field* and label it
  "Shirt size" — that's what the current PayPal buttons ask for.
- **Shipping is free** and already priced in, so don't add a shipping charge.

Monthly giving works the same way: `SUPPORT.stripeUrl` in `src/config/site.ts`
takes a **recurring** Stripe payment link and overrides the PayPal donate button.

The button logic is in `src/components/BuyButton.tsx` and
`src/components/SupportButton.tsx` — you shouldn't need to open either one.

---

## Conventions for AI agents editing this repo

**Read this before writing code.** This repo is on **Next.js 16**, which has
breaking changes from Next 13/14/15. Common mistakes:

- **App Router only.** Pages live at `src/app/<route>/page.tsx`. There is no
  `pages/` directory and no `getServerSideProps`/`getStaticProps`.
- **`params` and `searchParams` are Promises.** In Next 16 you must await them:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  }
  ```
  The global `PageProps<'/route'>` / `LayoutProps<'/route'>` helpers are also
  available without importing anything.
- **Tailwind CSS v4**, configured entirely in `src/app/globals.css` via
  `@theme inline`. There is **no `tailwind.config.js`** — add new colors and
  fonts to the `@theme` block in that file.
- **Brand colors** are Tailwind classes generated from `@theme`: `ink`, `ink-2`,
  `ink-3`, `crimson`, `crimson-bright`, `crimson-deep`, `brass`, `brass-light`,
  `ivory`, `parchment`. Use these rather than raw hex values.
- **Fonts:** `font-display` (Cormorant Garamond — headings and quotes),
  `font-wordmark` (Cinzel — the logotype and the `.eyebrow` labels), and the
  default sans (Inter) for body text. Loaded in `src/app/layout.tsx` via
  `next/font/google`.
- **Images** use `next/image` with local files from `public/`. No remote image
  hosts are configured in `next.config.ts`, so don't hotlink outside images —
  add the file to `public/photos/` (or `public/store/`) instead.
- **Client components** need `"use client"` at the top of the file. Only
  `Nav`, `Reveal`, `VideoEmbed`, `BookingForm`, and `PosterToolbar` are client
  components; everything else renders on the server.
- **Pages that show tour dates** (`/`, `/schedule`, `/contact`) export
  `export const revalidate = 3600` so expired dates fall off within the hour.
  Keep that line if you edit those files.
- **Reusable CSS classes** defined in `globals.css`: `.btn` + `.btn-primary` /
  `.btn-brass` / `.btn-outline` / `.btn-sm`, `.card-dark`, `.eyebrow`,
  `.wordmark`, `.spotlight`, `.grain`, `.grooves`, `.rule-brass`, `.flourish`,
  `.reveal`, `.rise`, `.marquee`, `.prose-warm`.
- **Photos are real photographs of Stephen.** Never add AI-generated or
  AI-upscaled imagery to this site.

### Commands

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # must pass before pushing — Vercel runs the same build
npm run lint
```

Always run `npm run build` before pushing. Vercel type-checks on deploy, and a
type error means the site does not update.

---

## What's on the site

| Route | Page |
| --- | --- |
| `/` | Home — hero, what a service looks like, meet Stephen, intro video, the music, the puppets, endorsements, next dates, booking |
| `/about` | Stephen's story, family, education, ordination |
| `/music` | Instruments, formal training, the intro video, discography |
| `/puppets` | The ventriloquist ministry |
| `/schedule` | Full tour schedule, grouped by month, self-expiring |
| `/store` | Albums, USB drive, t-shirts — PayPal now, Stripe-ready |
| `/endorsements` | What pastors say |
| `/beliefs` | Doctrinal statement (KJV) |
| `/faq` | Common questions, with FAQ rich-result markup for Google |
| `/support` | The Supporters Club (monthly giving) |
| `/promote` | Free publicity photos for host churches |
| `/promote/poster` | Printable concert poster — type in date/place/time and print |
| `/contact` | Phone, email, mail, and a booking inquiry form |

### The booking form

`src/components/BookingForm.tsx` opens the visitor's email app with the details
pre-filled and sends to the address in `SITE.email`. No server, no API keys, and
nothing to break. If Stephen would rather have inquiries land somewhere else
(Slack, a shared inbox, a spreadsheet), that's a small change to swap in.

---

## SEO

`robots.ts`, `sitemap.ts`, and `manifest.ts` in `src/app/` are generated from
`src/config/site.ts` — adding a page to `ALL_PAGES` there puts it in the sitemap
and the footer at the same time. Page titles and descriptions live in each
page's `export const metadata`.
