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
    date: "2026-11-08",
    venue: "Mizpah Missionary Church",
    address: "4631 N. Van Dyke Rd.",
    city: "Cass City",
    state: "MI",
    zip: "48726",
    time: "11:00am service",
  },
  {
    date: "2026-11-15",
    venue: "Horton Bay Community Church",
    address: "4961 Boyne City Rd.",
    city: "Boyne City",
    state: "MI",
    zip: "49712",
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
    date: "2026-11-30",
    venue: "Flint First Wesleyan Church",
    address: "3825 Davison Rd.",
    city: "Flint",
    state: "MI",
    zip: "48506",
    time: "7:00pm concert",
  },
  {
    date: "2026-12-04",
    venue: "Westview Baptist Church",
    address: "2140 Stephens Rd.",
    city: "Warren",
    state: "MI",
    zip: "48091",
    time: "7:00pm concert",
  },
  {
    date: "2026-12-06",
    venue: "The Table Church",
    address: "Hosted at the Holiday Inn Express, 5278 E. Pickard St.",
    city: "Mt Pleasant",
    state: "MI",
    zip: "48858",
    time: "9:30am service",
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
    date: "2026-12-07",
    venue: "Hopewell Church",
    address: "5162 N. Belsay Rd.",
    city: "Flint",
    state: "MI",
    zip: "48506",
    time: "6:00pm concert",
  },
  {
    date: "2026-12-10",
    venue: "Richfield Reaching Global Methodist Church",
    address: "10090 E. Coldwater Rd.",
    city: "Davison",
    state: "MI",
    zip: "48423",
    time: "6:00pm concert",
  },
  {
    date: "2026-12-11",
    venue: "Bethany Church",
    address: "353 E. Vienna St.",
    city: "Clio",
    state: "MI",
    zip: "48420",
    time: "2:00pm concert",
  },
  {
    date: "2026-12-12",
    venue: "Faith Bible Baptist Church",
    address: "5388 Lippincott Rd.",
    city: "Lapeer",
    state: "MI",
    zip: "48446",
    time: "5:00pm",
    note: "Private seniors dinner concert.",
  },
  {
    date: "2026-12-13",
    venue: "Open Door Baptist Church",
    address: "3464 Cocotte St.",
    city: "Detroit",
    state: "MI",
    zip: "48210",
    time: "11:30am service",
  },
  {
    date: "2026-12-18",
    venue: "Sheldon Meadows Assisted Living",
    address: "4482 Port Sheldon St.",
    city: "Hudsonville",
    state: "MI",
    zip: "49426",
    time: "2:00pm concert",
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
  {
    date: "2027-01-16",
    venue: "1st Baptist Church Of Holbrook",
    address: "360 1st Ave.",
    city: "Holbrook",
    state: "AZ",
    zip: "86025",
    time: "6:00pm concert",
  },
  {
    date: "2027-01-17",
    venue: "Crosslands Bible Church",
    address: "503 NM-371",
    city: "Thoreau",
    state: "NM",
    zip: "87323",
    time: "11:00am service",
  },
  {
    date: "2027-01-17",
    venue: "Valley Baptist Church",
    address: "36772 US-191",
    city: "Sanders",
    state: "AZ",
    zip: "86512",
    time: "6:00pm concert",
  },
  {
    date: "2027-01-23",
    venue: "Quartzsite Alliance Church",
    address: "720 W. Desert Vista St.",
    city: "Quartzsite",
    state: "AZ",
    zip: "85346",
    time: "6:00pm concert",
  },
  {
    date: "2027-01-24",
    venue: "Emmanuel Baptist Church",
    address: "12225 N. 103rd Ave.",
    city: "Sun City",
    state: "AZ",
    zip: "85351",
    time: "4:00pm concert",
    note: "Meeting inside the First Presbyterian Church.",
  },
  {
    date: "2027-01-25",
    venue: "Foothills Assembly Of God",
    address: "12831 E. 41st St.",
    city: "Yuma",
    state: "AZ",
    zip: "85367",
    time: "6:30pm concert",
  },
  {
    date: "2027-01-26",
    venue: "Arizona Community Church",
    address: "9325 S. Rural Rd.",
    city: "Tempe",
    state: "AZ",
    zip: "85284",
    time: "10:00am concert",
  },
  {
    date: "2027-02-06",
    venue: "Immanuel Baptist Church",
    address: "1565 E. Forest Ave.",
    city: "Ypsilanti",
    state: "MI",
    zip: "48198",
    time: "6:00pm concert",
  },
  {
    date: "2027-02-07",
    venue: "Crosspoint Freewill Baptist Church",
    address: "4015 Allen Rd.",
    city: "Allen Park",
    state: "MI",
    zip: "48101",
    time: "11:00am service",
  },
  {
    date: "2027-02-21",
    venue: "Beacon Of Hope Church",
    address: "2109 W. Michigan Ave.",
    city: "Saginaw",
    state: "MI",
    zip: "48638",
    time: "10:00am service",
  },
  {
    date: "2027-03-21",
    venue: "Faith Baptist Church",
    address: "4544 W. M-61",
    city: "Standish",
    state: "MI",
    zip: "48658",
    time: "11:00am service",
  },
  {
    date: "2027-02-12",
    venue: "Springvale Assisted Living & Memory Care",
    address: "4276 Kroger Dr.",
    city: "Swartz Creek",
    state: "MI",
    zip: "48473",
    time: "2:00pm concert",
  },
  {
    date: "2027-04-03",
    venue: "Tri-Valley Baptist Church",
    address: "8385 N. 1900 E. Rd.",
    city: "Bloomington",
    state: "IL",
    zip: "61704",
    time: "6:00pm concert",
  },
  {
    date: "2027-04-04",
    venue: "Tri-Valley Baptist Church",
    address: "8385 N. 1900 E. Rd.",
    city: "Bloomington",
    state: "IL",
    zip: "61704",
    time: "10:30am service",
  },
  {
    date: "2027-04-18",
    venue: "Vanderbilt Community Church",
    address: "455 W. Main St.",
    city: "Vanderbilt",
    state: "MI",
    zip: "49795",
    time: "11:00am service",
  },
  {
    date: "2027-04-25",
    venue: "Cross Timbers Baptist Church",
    address: "12854 US-65",
    city: "Cross Timbers",
    state: "MO",
    zip: "65634",
    time: "11:00am service",
  },
  {
    date: "2027-05-14",
    venue: "American House Of Holland",
    address: "11911 James St.",
    city: "Holland",
    state: "MI",
    zip: "49424",
    time: "6:00pm concert",
  },
  {
    date: "2027-06-10",
    venue: "Long Lake Bible Church",
    address: "11840 Maple St.",
    city: "Long Lake",
    state: "WI",
    zip: "54542",
    time: "6:00pm concert",
  },
  {
    date: "2027-06-11",
    venue: "Primrose Retirement Village",
    address: "2100 Townline Rd.",
    city: "Wausau",
    state: "WI",
    zip: "54403",
    time: "10:00am concert",
  },
  {
    date: "2027-06-13",
    venue: "Little Lake Chapel",
    address: "1761 E St. (1761 M-35)",
    city: "Little Lake",
    state: "MI",
    zip: "49833",
    time: "11:00am service",
  },
  {
    date: "2027-06-20",
    venue: "Nevins Lake Church",
    address: "837 S. Nevins Road",
    city: "Stanton",
    state: "MI",
    zip: "48888",
    time: "6:00pm concert",
  },
  {
    date: "2027-06-25",
    venue: "Springvale Assisted Living & Memory Care",
    address: "4276 Kroger Dr.",
    city: "Swartz Creek",
    state: "MI",
    zip: "48473",
    time: "2:00pm concert",
  },
  {
    date: "2027-07-04",
    venue: "Laman's Landing RV Resort",
    address: "6100 N Beaune Rd.",
    city: "Ludington",
    state: "MI",
    zip: "49431",
    time: "10:00am service",
  },
  {
    date: "2027-07-10",
    venue: "Zion Lutheran Church",
    address: "350 Pearl St.",
    city: "Cadillac",
    state: "MI",
    zip: "49601",
    time: "6:00pm concert",
  },
  {
    date: "2027-08-07",
    venue: "Church Of Daniel's Band Campground",
    address: "3362 Croll Rd.",
    city: "Beaverton",
    state: "MI",
    time: "7:00pm concert",
  },
  {
    date: "2027-09-10",
    venue: "American House Of Holland",
    address: "11911 James St.",
    city: "Holland",
    state: "MI",
    zip: "49424",
    time: "6:00pm concert",
  },
  {
    date: "2027-12-10",
    venue: "American House Of Holland",
    address: "11911 James St.",
    city: "Holland",
    state: "MI",
    zip: "49424",
    time: "6:00pm concert",
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
