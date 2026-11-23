import { SectionHeading } from "@/components/ui/SectionHeading";
import { club } from "@/lib/content/club";

export function ClubStory() {
  return (
    <section
      id="club"
      aria-labelledby="club-title"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-site grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="club-title"
            eyebrow="Our story"
            title={`Built on a BMX track. Rooted since ${club.founded}.`}
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate">
            <p>
              {club.origin} Today the club welcomes players of all ages and
              genders, from the youngest Under&nbsp;6s right through to the
              Seniors.
            </p>
            <p>
              Home is the {club.venue.name} at {club.venue.street}. Everyone
              plays in the {club.league} league, and newcomers of every ability
              are welcome.
            </p>
          </div>
        </div>

        <div className="grid content-start gap-6">
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-mist">
            {club.facilities.map((f) => (
              <div key={f.label} className="bg-chalk p-6">
                <dt className="text-sm leading-snug text-slate">{f.label}</dt>
                <dd className="order-first font-display text-6xl font-extrabold text-crest">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <ul className="flex flex-wrap gap-2">
            {club.amenities.map((a) => (
              <li
                key={a}
                className="rounded-full border border-mist px-4 py-2 text-sm font-medium text-forest-900"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-forest-900 p-7 text-white">
            <h3 className="font-display text-sm font-bold tracking-[0.25em] text-pitch uppercase">
              Played for Forest Hills
            </h3>
            <ul className="mt-5 divide-y divide-white/10">
              {club.notablePlayers.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-display text-2xl font-bold uppercase">
                    {p.name}
                  </span>
                  <span className="text-sm text-white/65">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
