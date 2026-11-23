/**
 * Sponsors whose logos appear on the club's current home page (audited
 * 23 Nov 2026). The site does not link to sponsor websites, so none are
 * linked here. Only white logo versions exist, so they are shown on a dark
 * background. Current sponsor status still needs confirming with the club.
 */

export type Sponsor = { name: string; logo: string };

export const sponsors: Sponsor[] = [
  { name: "Delta Fire", logo: "/sponsors/delta-fire.webp" },
  { name: "HPC", logo: "/sponsors/hpc.webp" },
  { name: "Impulse Gateways", logo: "/sponsors/impulse-gateways.webp" },
  { name: "Zephyr", logo: "/sponsors/zephyr.webp" },
  { name: "Oxford", logo: "/sponsors/oxford.webp" },
  { name: "Intellisec", logo: "/sponsors/intellisec.webp" },
];
