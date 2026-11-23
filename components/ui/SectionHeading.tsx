type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  id?: string;
};

/** Eyebrow + display title + optional intro, shared by every section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  id,
}: Props) {
  const dark = tone === "dark";
  return (
    <div className="max-w-2xl">
      <p
        className={`flex items-center gap-3 font-display text-sm font-bold tracking-[0.25em] uppercase ${dark ? "text-pitch" : "text-crest"}`}
      >
        <span aria-hidden="true" className="h-0.5 w-8 bg-current" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-5xl leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl ${dark ? "text-white" : "text-forest-900"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-slate"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
