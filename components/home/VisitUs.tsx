import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { club } from "@/lib/content/club";

export function VisitUs() {
  const details = [
    {
      label: "Ground",
      value: `${club.venue.name}, ${club.venue.street}, ${club.venue.suburb}`,
    },
    { label: "Phone", value: club.contact.phone, href: club.contact.phoneHref },
    {
      label: "Email",
      value: club.contact.email,
      href: `mailto:${club.contact.email}`,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-24 md:py-32"
    >
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-end">
        <SectionHeading
          id="contact-title"
          eyebrow="Visit us"
          title="See you at the ground"
          intro="Questions about joining, coaching or sponsoring? Get in touch, or come down on a match day."
        />
        <div>
          <dl className="divide-y divide-mist border-y border-mist">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr]"
              >
                <dt className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">
                  {d.label}
                </dt>
                <dd className="font-display text-2xl font-bold text-forest-900">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="transition hover:text-crest"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <ButtonLink
            href={club.venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-dark"
            className="mt-8"
          >
            Get directions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
