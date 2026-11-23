import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { club, sponsorship } from "@/lib/content/club";
import { sponsors } from "@/lib/content/sponsors";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="bg-forest-950 py-24 text-white md:py-32"
    >
      <div className="container-site">
        <SectionHeading
          id="sponsors-title"
          tone="dark"
          eyebrow="Partners"
          title="Backed by local business"
          intro="Thank you to the sponsors who support football at Forest Hills."
        />

        <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {sponsors.map((s) => (
            <li
              key={s.name}
              className="grid h-36 place-items-center bg-forest-950 px-4 transition hover:bg-forest-900"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={220}
                height={220}
                className="h-28 w-auto object-contain opacity-75 brightness-0 invert transition hover:opacity-100"
              />
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 rounded-3xl bg-forest-800 p-8 md:p-12 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <div>
            <h3 className="font-display text-4xl leading-none font-extrabold uppercase">
              Become a sponsor
            </h3>
            <p className="mt-4 text-white/70">
              Put your business in front of the Forest Hills football
              community.
            </p>
            <ButtonLink
              href={`mailto:${club.contact.email}?subject=Sponsorship`}
              variant="light"
              className="mt-6"
            >
              Talk to us
            </ButtonLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {sponsorship.tiers.map((t) => (
              <li key={t.name} className="rounded-2xl bg-white/[0.06] p-5">
                <p className="font-display text-xl font-bold text-pitch uppercase">
                  {t.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {t.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
