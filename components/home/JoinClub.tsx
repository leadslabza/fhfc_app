import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { club, membership } from "@/lib/content/club";
import { formatRand } from "@/lib/content/shop";

export function JoinClub() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            id="join-title"
            eyebrow="Join the club"
            title="Soccer mad? There's a place for you."
            intro="Seasoned player or complete beginner, every skill level is welcome at Forest Hills. Players, coaches and volunteers all make the club."
          />

          <div className="mt-10 overflow-hidden rounded-2xl bg-forest-900 text-white">
            <div className="flex items-end justify-between gap-4 p-7">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
                  Annual subscription · {membership.seasonLabel}
                </p>
                <p className="mt-2 font-display text-6xl font-extrabold">
                  {formatRand(membership.annualFee)}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Juniors and Seniors
                </p>
              </div>
            </div>
            <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
              {membership.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-forest-900 px-7 py-4 text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 place-items-center rounded-full bg-pitch text-xs font-bold text-forest-950"
                  >
                    ✓
                  </span>
                  {item} included
                </li>
              ))}
            </ul>
            <p className="px-7 py-5 text-sm text-white/65">
              {membership.kitNote} {membership.payment}
            </p>
          </div>
        </div>

        <div className="lg:pt-24">
          <h3 className="font-display text-sm font-bold tracking-[0.25em] text-crest uppercase">
            How to register
          </h3>
          <ol className="mt-6 space-y-4">
            {membership.steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-mist p-6"
              >
                <span className="font-display text-5xl leading-none font-extrabold text-crest/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-forest-900 uppercase">
                    {step.title}
                  </p>
                  <p className="mt-2 leading-relaxed text-slate">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={`mailto:${club.contact.email}?subject=Joining%20Forest%20Hills%20FC`}>
              Email the club
            </ButtonLink>
            <p className="text-sm text-slate">
              Or call{" "}
              <a
                href={club.contact.phoneHref}
                className="font-semibold text-forest-900 underline decoration-crest underline-offset-4"
              >
                {club.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
