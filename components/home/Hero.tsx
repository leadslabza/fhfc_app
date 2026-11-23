import { Crest } from "@/components/site/Crest";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { club, season } from "@/lib/content/club";
import { TreeLine } from "./TreeLine";

/**
 * Homepage hero. Built from the crest, type and pitch geometry rather than
 * stock photography: the club has no genuine match photos online yet. A real
 * photo can be layered in behind the gradient once the club supplies one.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-forest-950 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-pitch-lines" />
      {/* Floodlight glow */}
      <div className="absolute -top-40 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full bg-crest/30 blur-[140px]" />
      <div className="absolute top-10 left-[-20%] -z-10 h-80 w-80 rounded-full bg-floodlight/10 blur-[120px]" />
      {/* Centre circle */}
      <div className="absolute top-1/2 left-1/2 -z-10 hidden h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] md:block" />

      <div className="container-site grid items-center gap-12 pt-14 pb-28 md:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:pb-36">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
            <span className="h-2 w-2 rounded-full bg-pitch" aria-hidden="true" />
            Est. {club.founded} · {club.venue.suburb}
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(3.6rem,11vw,8.5rem)] leading-[0.85] font-extrabold tracking-tightest uppercase"
          >
            Forest Hills
            <span className="block text-pitch">Football Club</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Community football for every age, from Under&nbsp;6 to Seniors, on
            four floodlit fields at the {club.venue.name}.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/#join">Join the club</ButtonLink>
            <ButtonLink href="/#shop" variant="outline-light">
              Club shop
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto hidden animate-rise [animation-delay:150ms] sm:block">
          <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-crest/40 blur-3xl" />
          <Crest
            size={340}
            preload
            className="shadow-2xl shadow-black/50 ring-8 ring-white/10"
          />
        </div>
      </div>

      {/* Season strip on the hero edge */}
      <div className="relative z-10 container-site -mb-px">
        <dl className="grid grid-cols-2 overflow-hidden rounded-t-2xl bg-white text-ink shadow-xl md:grid-cols-4">
          {[
            ["Season", season.runs],
            ["Youth match days", "Sundays"],
            ["Senior match days", "Saturdays, 14:00"],
            ["Age groups", "U6 to Seniors"],
          ].map(([term, detail]) => (
            <div
              key={term}
              className="border-mist p-5 not-last:border-r max-md:nth-2:border-r-0 max-md:nth-[-n+2]:border-b md:p-6"
            >
              <dt className="text-xs font-semibold tracking-[0.18em] text-slate uppercase">
                {term}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-forest-900 uppercase">
                {detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <TreeLine className="pointer-events-none absolute bottom-0 left-0 -z-10 fill-forest-900 opacity-80" />
    </section>
  );
}
