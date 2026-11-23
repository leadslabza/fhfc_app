/**
 * Verified Forest Hills FC information.
 *
 * Every value here was taken from the club's current website (fhfc.co.za,
 * audited 23 Nov 2026). Nothing is invented. This module is the temporary
 * content source for the public site until the admin portal and database
 * take over (Stage 3 onwards).
 */

export const club = {
  name: "Forest Hills Football Club",
  shortName: "Forest Hills FC",
  founded: 1988,
  founder: "Rodney Van Eck",
  origin:
    "The club opened in 1988 on a former BMX track, under the then chairman Rodney Van Eck.",
  venue: {
    name: "Forest Hills Sports Club",
    street: "42 Forest Drive",
    suburb: "Forest Hills",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Forest+Hills+Sports+Club+42+Forest+Drive+Forest+Hills",
  },
  contact: {
    phone: "076 544 3466",
    phoneHref: "tel:+27765443466",
    email: "info@fhfc.co.za",
  },
  league: "GDLFA",
  /** Facilities listed on the club's site. */
  facilities: [
    { value: "2", label: "Full-size fields" },
    { value: "2", label: "Junior fields" },
    { value: "4", label: "Fields under floodlights" },
  ],
  amenities: ["Change rooms", "Clubhouse bar", "Spectator viewing deck"],
  notablePlayers: [
    { name: "Grahame McKenzie", note: "Former Maritzburg City player" },
    {
      name: "Mino Coppola",
      note: "Former club chairman and Durban City goalkeeper",
    },
    {
      name: "John Sanan",
      note: "Former Bush Bucks and African Wanderers player",
    },
  ],
} as const;

export type TrainingSlot = { days: string; time: string };

export type AgeGroup = {
  slug: string;
  label: string;
  short: string;
  category: "Junior" | "Youth" | "Senior";
  training: TrainingSlot;
};

const juniorTraining: TrainingSlot = {
  days: "Tue & Thu",
  time: "17:30 to 18:30",
};
const youthTraining: TrainingSlot = {
  days: "Mon & Wed",
  time: "17:30 to 18:30",
};

const juniors = [6, 7, 8, 9, 10, 11, 12].map<AgeGroup>((age) => ({
  slug: `u${age}`,
  label: `Under ${age}`,
  short: `U${age}`,
  category: "Junior",
  training: juniorTraining,
}));

const youth = [13, 15, 17].map<AgeGroup>((age) => ({
  slug: `u${age}`,
  label: `Under ${age}`,
  short: `U${age}`,
  category: "Youth",
  training: youthTraining,
}));

export const ageGroups: AgeGroup[] = [
  ...juniors,
  ...youth,
  {
    slug: "seniors",
    label: "Seniors",
    short: "SNR",
    category: "Senior",
    training: { days: "Tue & Thu", time: "18:30 to 19:30" },
  },
];

export const season = {
  runs: "April to October",
  preSeason: "mid-February",
};

export const membership = {
  /** Annual subscription for the 2026 season, as published by the club. */
  seasonLabel: "2026 season",
  annualFee: 2100,
  includes: ["Training shirt", "Pair of match socks"],
  kitNote:
    "The club supplies a match jersey and shorts on match days, returned after each game.",
  payment: "EFT only. The club does not accept cash.",
  steps: [
    {
      title: "Complete the club registration form",
      body: "A short online form that gets you onto your team's WhatsApp group.",
    },
    {
      title: "Register with the league",
      body: "Fill in the GDLFA form in duplicate with 4 ID photos and 2 certified copies of your birth certificate. Your age-group coach collects them.",
    },
    {
      title: "Pay your annual subscription",
      body: "Pay by EFT. Your training shirt and match socks are included.",
    },
  ],
};

export const sponsorship = {
  tiers: [
    {
      name: "Club Sponsor",
      body: "Main sponsor of the club, with a minimum commitment of two to three years.",
    },
    {
      name: "Team Sponsor",
      body: "Fund a new match-day kit for one team, from U6 through to the Opens. Ideal for smaller businesses.",
    },
    {
      name: "Pitch-side boards",
      body: "Advertising on signboards around the grounds, for an annual fee.",
    },
  ],
};
