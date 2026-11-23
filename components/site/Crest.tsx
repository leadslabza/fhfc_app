import Image from "next/image";
import { club } from "@/lib/content/club";

type Props = { size: number; className?: string; preload?: boolean };

/**
 * The official club crest, taken from the club's website. Shown on a white
 * disc so the green-and-white artwork keeps its contrast on dark sections.
 * Replace the source with a vector master once the club supplies one.
 */
export function Crest({ size, className = "", preload = false }: Props) {
  return (
    <span
      className={`inline-grid shrink-0 place-items-center rounded-full bg-white ${className}`}
      style={{ width: size, height: size, padding: size * 0.04 }}
    >
      <Image
        src="/brand/fhfc-crest.webp"
        alt={`${club.name} crest`}
        width={256}
        height={253}
        preload={preload}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
