// Stephen Forester Ministries — the tour schedule.
//
// HOW TO ADD A DATE
// Copy one of the lines below, paste it in, and change it. Keep the dates in
// YYYY-MM-DD order if you can — but it isn't required, the website sorts them.
//
//   date  — the day of the meeting, as YYYY-MM-DD (e.g. "2026-09-13")
//   venue — the church, campground, or home the meeting is at
//   host  — OPTIONAL. Use when the event has its own name and is hosted
//           somewhere else (e.g. a retreat held at a golf resort)
//   city / state
//   address / zip — OPTIONAL, but nice so people can put it in their GPS
//   time  — how it should read, in plain words ("7:00pm concert")
//   note  — OPTIONAL extra line (guest singers, dinner beforehand, etc.)
//
// PAST DATES DISAPPEAR BY THEMSELVES. Anything older than today drops off the
// schedule page automatically, so you never have to clean up the old ones.
// You can leave them here or delete them, whichever you prefer.

export type Event = {
  date: string;
  venue: string;
  host?: string;
  address?: string;
  city: string;
  state: string;
  zip?: string;
  time?: string;
  note?: string;
};

export const EVENTS: Event[] = [
  {
    date: "2026-08-08",
    venue: "Church of Daniel's Band Campground",
    address: "3362 Croll Rd.",
    city: "Beaverton",
    state: "MI",
    zip: "48612",
    time: "7:00pm concert",
  },
  {
    date: "2026-08-13",
    venue: "Evergreen Golf Resort",
    host: "Living In His Word Senior Retreat",
    address: "7880 Mackinaw Trail",
    city: "Cadillac",
    state: "MI",
    zip: "49601",
    time: "4:30pm service",
  },
  {
    date: "2026-08-14",
    venue: "Evergreen Golf Resort",
    host: "Living In His Word Senior Retreat",
    address: "7880 Mackinaw Trail",
    city: "Cadillac",
    state: "MI",
    zip: "49601",
    time: "9:30am service",
  },
  {
    date: "2026-08-16",
    venue: "Sandusky Full Gospel Church",
    address: "747 S. Sandusky Rd.",
    city: "Sandusky",
    state: "MI",
    zip: "48471",
    time: "10:30am service",
  },
  {
    date: "2026-08-20",
    venue: "Fellowship Baptist Church",
    address: "14046 N. Saginaw Rd.",
    city: "Clio",
    state: "MI",
    zip: "48420",
    time: "6:45pm concert",
    note: "Dinner at 6:00pm, concert afterward.",
  },
  {
    date: "2026-08-23",
    venue: "West Vienna Methodist Church",
    address: "5485 W. Wilson Rd.",
    city: "Clio",
    state: "MI",
    zip: "48420",
    time: "Call for time",
  },
  {
    date: "2026-08-23",
    venue: "First Baptist Church of Grand Blanc",
    address: "6106 S. Saginaw St.",
    city: "Grand Blanc",
    state: "MI",
    zip: "48439",
    time: "6:00pm concert",
  },
  {
    date: "2026-08-29",
    venue: "Richfield Reaching Global Methodist Church",
    address: "10090 E. Coldwater Rd.",
    city: "Davison",
    state: "MI",
    zip: "48423",
    time: "3:00pm – 7:00pm concert",
    note: "With Karalyn Lawler, Jeff & Brenda Glasco, Larenzo Bradford, and The Richfield Reaching Church Band (“The Reachers”).",
  },
  {
    date: "2026-08-30",
    venue: "Newburg Norton Bible Church",
    address: "11256 Hoffman Rd.",
    city: "Marcellus",
    state: "MI",
    zip: "49067",
    time: "11:00am service",
  },
  {
    date: "2026-08-30",
    venue: "Calvary Baptist Church",
    address: "403 E. Van Buren St.",
    city: "Gobles",
    state: "MI",
    zip: "49055",
    time: "6:00pm concert",
  },
  {
    date: "2026-09-06",
    venue: "Bunker Hill Freewill Baptist Church",
    address: "279 W. Broadway St.",
    city: "Bunker Hill",
    state: "IN",
    zip: "46914",
    time: "10:30am service",
  },
  {
    date: "2026-09-11",
    venue: "Springvale Assisted Living & Memory Care",
    address: "4276 Kroger Dr.",
    city: "Swartz Creek",
    state: "MI",
    zip: "48473",
    time: "10:00am concert",
  },
  {
    date: "2026-09-11",
    venue: "Swank Home Assisted Living",
    address: "9412 Miller Rd.",
    city: "Swartz Creek",
    state: "MI",
    zip: "48473",
    time: "3:00pm concert",
  },
  {
    date: "2026-09-13",
    venue: "Flint Baptist Temple",
    address: "1430 E. Bristol Rd.",
    city: "Burton",
    state: "MI",
    zip: "48529",
    time: "10:00am & 11:00am",
    note: "Singing and preaching in both services.",
  },
  {
    date: "2026-09-18",
    venue: "Georgetown & Cambridge Manor",
    address: "151 Port Sheldon St. SW",
    city: "Grandville",
    state: "MI",
    zip: "49418",
    time: "10:00am concert",
  },
  {
    date: "2026-09-18",
    venue: "American House of Holland",
    address: "11911 James St.",
    city: "Holland",
    state: "MI",
    zip: "49424",
    time: "6:00pm concert",
  },
  {
    date: "2026-09-20",
    venue: "Woodbrook Cathedral",
    address: "1739 Providence St. NE",
    city: "Grand Rapids",
    state: "MI",
    zip: "49525",
    time: "10:30am service",
  },
  {
    date: "2026-09-20",
    venue: "Leighton Church",
    address: "4180 2nd St.",
    city: "Caledonia",
    state: "MI",
    zip: "49316",
    time: "6:00pm concert",
  },
  {
    date: "2026-09-25",
    venue: "Lockwood of Burton Retirement Village",
    address: "2173 S. Center Rd.",
    city: "Burton",
    state: "MI",
    zip: "48519",
    time: "2:00pm concert",
  },
  {
    date: "2026-09-27",
    venue: "Bible Baptist Church",
    address: "19101 US-52",
    city: "Metamora",
    state: "IN",
    zip: "47030",
    time: "10:00am service",
  },
  {
    date: "2026-10-03",
    venue: "Lighthouse Missionary Church",
    host: "“Christian Coffee House” concert",
    address: "7824 Rogers Rd.",
    city: "East Jordan",
    state: "MI",
    zip: "49727",
    time: "7:00pm concert",
  },
  {
    date: "2026-10-04",
    venue: "Mancelona Nazarene Church",
    address: "119 W. Main St.",
    city: "Mancelona",
    state: "MI",
    zip: "49659",
    time: "11:00am concert",
  },
  {
    date: "2026-10-04",
    venue: "Pleasant Valley Free Methodist",
    address: "3055 W. Old State Rd.",
    city: "East Jordan",
    state: "MI",
    zip: "49727",
    time: "6:00pm concert",
  },
  {
    date: "2026-10-12",
    venue: "Wendy's Gospel Sing",
    address: "428 W. Main St.",
    city: "Owosso",
    state: "MI",
    zip: "48867",
    time: "7:00pm concert",
  },
  {
    date: "2026-10-17",
    venue: "Royalton Bible Church",
    address: "8457 Bunkerhill Rd.",
    city: "Gasport",
    state: "NY",
    zip: "14067",
    time: "6:00pm concert",
  },
  {
    date: "2026-10-18",
    venue: "Good News Community Church",
    address: "4797 W. Ridge Rd.",
    city: "Spencerport",
    state: "NY",
    zip: "14559",
    time: "10:00am service",
  },
  {
    date: "2026-10-23",
    venue: "The Orchards of Armada Village",
    address: "22600 W. Main St.",
    city: "Armada",
    state: "MI",
    zip: "48005",
    time: "10:00am concert",
  },
  {
    date: "2026-10-23",
    venue: "Devonshire Retirement Village",
    address: "101 Devonshire Dr.",
    city: "Lapeer",
    state: "MI",
    zip: "48446",
    time: "2:00pm concert",
  },
  {
    date: "2026-11-01",
    venue: "Brown City Methodist Church",
    address: "7043 Lincoln St.",
    city: "Brown City",
    state: "MI",
    zip: "48416",
    time: "Call for time",
  },
  {
    date: "2026-11-07",
    venue: "First Baptist Church of Goodrich",
    address: "6116 S. State Rd.",
    city: "Goodrich",
    state: "MI",
    zip: "48438",
    time: "3:00pm concert",
  },
  {
    date: "2026-11-15",
    venue: "Mizpah Missionary Church",
    address: "4631 N. Van Dyke Rd.",
    city: "Cass City",
    state: "MI",
    zip: "48726",
    time: "11:00am service",
  },
  {
    date: "2026-11-20",
    venue: "Connect 55+ of Warsaw",
    address: "5378 Conable Wy.",
    city: "Warsaw",
    state: "NY",
    zip: "14569",
    time: "2:00pm concert",
  },
  {
    date: "2026-11-20",
    venue: "Gateway Community Church",
    host: "Nite Lite Gospel House Concert Series",
    address: "11 Griswold St.",
    city: "Avoca",
    state: "NY",
    zip: "14809",
    time: "6:00pm concert",
  },
  {
    date: "2026-11-21",
    venue: "Independent Baptist Church of Keeseville",
    address: "2030 NY-22",
    city: "Keeseville",
    state: "NY",
    zip: "12944",
    time: "6:00pm concert",
  },
  {
    date: "2026-12-05",
    venue: "Hopewell Church",
    address: "5162 N. Belsay Rd.",
    city: "Flint",
    state: "MI",
    zip: "48506",
    time: "6:00pm concert",
  },
  {
    date: "2026-12-06",
    venue: "Lennon Global Methodist Church",
    address: "1014 Oak St.",
    city: "Lennon",
    state: "MI",
    zip: "48449",
    time: "5:00pm concert",
  },
  {
    date: "2026-12-18",
    venue: "American House of Holland",
    address: "11911 James St.",
    city: "Holland",
    state: "MI",
    zip: "49424",
    time: "6:00pm concert",
  },
  {
    date: "2026-12-27",
    venue: "New Life Assembly of God",
    address: "8240 Carpenter Rd.",
    city: "Flushing",
    state: "MI",
    zip: "48433",
    time: "10:30am service",
  },
];

/* ---------------------------------------------------------------- helpers  */

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Parse "2026-09-13" as a local date (not UTC) so it never shifts a day. */
export function parseEventDate(date: string): Date {
  const [y, m, d] = date.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatEventDate(date: string) {
  const d = parseEventDate(date);
  return {
    weekday: WEEKDAYS[d.getDay()],
    weekdayShort: WEEKDAYS[d.getDay()].slice(0, 3),
    month: MONTHS[d.getMonth()],
    monthShort: MONTHS[d.getMonth()].slice(0, 3),
    day: String(d.getDate()),
    year: String(d.getFullYear()),
  };
}

/** Every date from today forward, in order. Yesterday's meetings drop off. */
export function upcomingEvents(): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return EVENTS.filter((e) => parseEventDate(e.date) >= today).sort((a, b) =>
    a.date.localeCompare(b.date),
  );
}

/** Upcoming dates bundled by month, for the schedule page. */
export function eventsByMonth() {
  const groups: { key: string; label: string; events: Event[] }[] = [];
  for (const e of upcomingEvents()) {
    const d = parseEventDate(e.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const label = `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    const last = groups[groups.length - 1];
    if (last && last.key === key) last.events.push(e);
    else groups.push({ key, label, events: [e] });
  }
  return groups;
}

export function mapUrl(e: Event) {
  const q = [e.venue, e.address, `${e.city}, ${e.state} ${e.zip ?? ""}`]
    .filter(Boolean)
    .join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
