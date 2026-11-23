import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "light" | "outline-light" | "outline-dark";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-lg font-bold uppercase tracking-wide transition duration-200 hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-crest text-white shadow-lg shadow-crest/25 hover:bg-crest-dark",
  light: "bg-white text-forest-900 hover:bg-mist",
  "outline-light":
    "border border-white/35 text-white hover:border-white hover:bg-white/10",
  "outline-dark":
    "border border-forest-900/25 text-forest-900 hover:border-forest-900 hover:bg-forest-900/5",
};

type Props = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
