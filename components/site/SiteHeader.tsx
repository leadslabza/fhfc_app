import Link from "next/link";
import { club } from "@/lib/content/club";
import { primaryNav, shopNav } from "@/lib/navigation";
import { Crest } from "./Crest";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 text-white">
      {/* Blur lives on its own layer: backdrop-filter on the header itself
          would trap the fixed mobile menu inside the header box. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 border-b border-white/10 bg-forest-950/90 backdrop-blur-md"
      />
      <div className="container-site flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${club.name} home`}
        >
          <Crest size={44} preload />
          <span className="leading-none">
            <span className="block font-display text-xl font-extrabold tracking-wide uppercase">
              Forest Hills
            </span>
            <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-white/60 uppercase">
              Football Club
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={shopNav.href}
            className="hidden rounded-full bg-crest px-5 py-2.5 font-display text-base font-bold tracking-wide uppercase transition hover:bg-crest-dark sm:inline-flex"
          >
            {shopNav.label}
          </Link>
          <MobileNav items={[...primaryNav, shopNav]} />
        </div>
      </div>
    </header>
  );
}
