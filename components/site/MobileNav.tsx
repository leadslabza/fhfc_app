"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { NavItem } from "@/lib/navigation";

/** Full-screen menu for small screens. */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute top-1.5 left-0 h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-0 h-0.5 w-5 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-forest-950 bg-pitch-lines px-5 pt-24 pb-10"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {items.map((item, i) => (
              <li
                key={item.href}
                className="animate-rise"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 font-display text-4xl font-extrabold tracking-tight text-white uppercase transition hover:text-pitch"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
