/**
 * Primary navigation. Until the separate public pages are built (Stage 3),
 * items point at the matching homepage sections so no link is broken.
 */
export type NavItem = { href: string; label: string };

export const primaryNav: NavItem[] = [
  { href: "/#club", label: "Club" },
  { href: "/#teams", label: "Teams" },
  { href: "/#match-days", label: "Match days" },
  { href: "/#join", label: "Join" },
  { href: "/#sponsors", label: "Sponsors" },
  { href: "/#contact", label: "Contact" },
];

export const shopNav: NavItem = { href: "/#shop", label: "Shop" };
