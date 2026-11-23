import { SectionHeading } from "@/components/ui/SectionHeading";
import { season } from "@/lib/content/club";

const week = [
  { day: "Mon", items: ["U13, U15, U17 training · 17:30"] },
  { day: "Tue", items: ["U6 to U12 training · 17:30", "Seniors training · 18:30"] },
  { day: "Wed", items: ["U13, U15, U17 training · 17:30"] },
  { day: "Thu", items: ["U6 to U12 training · 17:30", "Seniors training · 18:30"] },
  { day: "Fri", items: [] },
  { day: "Sat", items: ["Senior matches · 14:00"], match: true },
  { day: "Sun", items: ["Youth matches · 08:00 to 14:00"], match: true },
];

/**
 * The club's weekly rhythm. This becomes the full match centre (fixtures and
 * results) once fixtures can be entered in the admin portal; the club does
 * not publish any fixtures or results today.
 */
export function MatchDays() {
  return (
    <section
      id="match-days"
      aria-labelledby="match-days-title"
      className="relative overflow-hidden bg-forest-900 py-24 text-white md:py-32"
    >
      <div className="absolute inset-0 bg-pitch-lines" aria-hidden="true" />
      <div className="relative container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="match-days-title"
            tone="dark"
            eyebrow="Match centre"
            title="The week at Forest Hills"
            intro={`The season runs from ${season.runs}, with pre-season training from ${season.preSeason}.`}
          />
          <p className="max-w-xs text-sm text-white/60">
            Fixtures and results will be published here during the season.
          </p>
        </div>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {week.map((d) => (
            <li
              key={d.day}
              className={`flex min-h-40 flex-col rounded-2xl p-5 ${
                d.match
                  ? "bg-floodlight text-ink"
                  : d.items.length
                    ? "bg-white/[0.07] ring-1 ring-white/10"
                    : "border border-dashed border-white/15"
              }`}
            >
              <span className="font-display text-3xl font-extrabold uppercase">
                {d.day}
              </span>
              {d.match ? (
                <span className="mt-1 text-xs font-bold tracking-[0.18em] uppercase">
                  Match day
                </span>
              ) : null}
              <ul className="mt-auto space-y-2 pt-6 text-sm leading-snug">
                {d.items.length ? (
                  d.items.map((item) => <li key={item}>{item}</li>)
                ) : (
                  <li className="text-white/45">No scheduled sessions</li>
                )}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
