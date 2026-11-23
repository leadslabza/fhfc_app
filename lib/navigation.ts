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

/**
 * Where "Register" buttons send people. Until the registration system is
 * built, this opens an email to the club; switch it to the registration
 * route once that exists and every Register button follows.
 */
export const registerHref =
  "mailto:info@fhfc.co.za?subject=Registering%20with%20Forest%20Hills%20FC";
