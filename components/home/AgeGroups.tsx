import { SectionHeading } from "@/components/ui/SectionHeading";
import { ageGroups, type AgeGroup } from "@/lib/content/club";

function TeamCard({ group }: { group: AgeGroup }) {
  const senior = group.category === "Senior";
  return (
    <li
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 ${
        senior
          ? "col-span-2 bg-crest text-white sm:col-span-1"
          : "bg-white text-forest-900 ring-1 ring-mist hover:ring-crest"
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-3 -right-2 font-display text-7xl font-extrabold opacity-10 transition group-hover:opacity-20 ${senior ? "text-white" : "text-crest"}`}
      >
        {group.short}
      </span>
      <div>
        <p
          className={`text-xs font-semibold tracking-[0.18em] uppercase ${senior ? "text-white/75" : "text-crest"}`}
        >
          {group.category}
        </p>
        <h3 className="mt-1 font-display text-3xl font-extrabold uppercase">
          {group.label}
        </h3>
      </div>
      <p
        className={`mt-6 text-sm leading-snug ${senior ? "text-white/85" : "text-slate"}`}
      >
        <span className="block font-semibold">{group.training.days}</span>
        {group.training.time}
      </p>
    </li>
  );
}

export function AgeGroups() {
  return (
    <section
      id="teams"
      aria-labelledby="teams-title"
      className="bg-chalk py-24 md:py-32"
    >
      <div className="container-site">
        <SectionHeading
          id="teams-title"
          eyebrow="Teams"
          title="A team for every age"
          intro="Eleven age groups train through the week under the floodlights. Find yours and come and give it a go."
        />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {ageGroups.map((g) => (
            <TeamCard key={g.slug} group={g} />
          ))}
        </ul>
      </div>
    </section>
  );
}
