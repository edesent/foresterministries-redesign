// Runs before every build (see "prebuild" in package.json). If src/data/albums.json
// has a typo, the build stops here with a plain-English message instead of a
// cryptic error, and the live site keeps showing the last good version.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const file = join(root, "src/data/albums.json");
const raw = readFileSync(file, "utf8");
const problems = [];

let data;
try {
  data = JSON.parse(raw);
} catch (err) {
  const pos = Number(/position (\d+)/.exec(err.message)?.[1]);
  const where = Number.isFinite(pos)
    ? ` near line ${raw.slice(0, pos).split("\n").length}`
    : "";
  fail([
    `albums.json can't be read${where}.`,
    "Usually this is a missing comma between two albums or songs, an extra comma after",
    "the last one, or a missing quote mark.",
    `(${err.message})`,
  ]);
}

const albums = Array.isArray(data?.albums) ? data.albums : null;
if (!albums) fail(['albums.json needs a list called "albums".']);

const PAYPAL_KEYS = { hosted: "buttonId", link: "paymentId", "hosted-sdk": "hostedButtonId" };
const seen = new Set();

albums.forEach((a, i) => {
  const name = typeof a?.title === "string" && a.title.trim() ? `"${a.title}"` : `album #${i + 1}`;
  const say = (msg) => problems.push(`${name}: ${msg}`);

  if (!a?.title?.trim?.()) say('needs a "title".');
  else if (seen.has(a.title.trim().toLowerCase())) say("is in the list twice.");
  else seen.add(a.title.trim().toLowerCase());

  if (!a?.cover?.trim?.()) say('needs a "cover" photo.');
  else {
    const cover = a.cover.startsWith("/") ? a.cover : `/store/${a.cover}`;
    if (!existsSync(join(root, "public", cover)))
      say(`can't find the cover photo ${cover} (upload it to public${cover.slice(0, cover.lastIndexOf("/"))}).`);
  }

  if (a.price !== undefined && (typeof a.price !== "number" || a.price <= 0))
    say('"price" should be a plain number like 10, with no $ and no quote marks.');

  if (a.songs !== undefined && (!Array.isArray(a.songs) || a.songs.some((s) => typeof s !== "string")))
    say('"songs" should be a list of song names in quote marks, like ["First Song", "Second Song"].');

  if (a.paypal !== undefined) {
    const key = PAYPAL_KEYS[a.paypal?.kind];
    if (!key) say(`"paypal" kind should be one of: ${Object.keys(PAYPAL_KEYS).join(", ")}.`);
    else if (!a.paypal[key]?.trim?.()) say(`a "${a.paypal.kind}" PayPal button needs its "${key}".`);
  }

  if (a.stripeUrl && !/^https:\/\//.test(a.stripeUrl))
    say('"stripeUrl" should be the full link, starting with https://');
});

if (problems.length) fail(["albums.json has a problem:", ...problems.map((p) => `  • ${p}`)]);
console.log(`albums.json OK (${albums.length} albums)`);

function fail(lines) {
  console.error(`\n${lines.join("\n")}\n`);
  process.exit(1);
}
