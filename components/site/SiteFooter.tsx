import Link from "next/link";
import { club } from "@/lib/content/club";
import { primaryNav, shopNav } from "@/lib/navigation";
import { Crest } from "./Crest";

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-white/70">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Crest size={64} />
            <p className="font-display text-2xl leading-none font-extrabold tracking-wide text-white uppercase">
              Forest Hills
              <span className="block text-base text-white/60">
                Football Club · Est. {club.founded}
              </span>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Community football for every age, from Under 6 to Seniors, at the{" "}
            {club.venue.name}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold tracking-[0.25em] text-white uppercase">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[...primaryNav, shopNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-[0.25em] text-white uppercase">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>
              {club.venue.street}, {club.venue.suburb}
            </p>
            <p>
              <a href={club.contact.phoneHref} className="hover:text-white">
                {club.contact.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${club.contact.email}`}
                className="hover:text-white"
              >
                {club.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-6 text-xs text-white/50">
          © {club.name}
        </p>
      </div>
    </footer>
  );
}
