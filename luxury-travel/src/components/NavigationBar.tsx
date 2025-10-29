"use client";

import Link from "next/link";
import { useState } from "react";
import {
  destinationMenu,
  offerMenu,
  travelStylesMenu,
  type MenuItem,
} from "@/data/travelData";

type MenuKey = "destinations" | "styles" | "offers" | null;

const menus: Record<Exclude<MenuKey, null>, MenuItem[]> = {
  destinations: destinationMenu,
  styles: travelStylesMenu,
  offers: offerMenu,
};

const menuLabels: Record<Exclude<MenuKey, null>, string> = {
  destinations: "Destinations",
  styles: "Travel Styles",
  offers: "Exclusive Offers",
};

export function NavigationBar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-midnight/75 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="text-xl font-semibold uppercase tracking-[0.4em] text-gold"
        >
          Éclat Journeys
        </Link>
        <nav className="hidden gap-10 text-sm font-medium text-ivory/80 lg:flex">
          {(Object.keys(menus) as Array<Exclude<MenuKey, null>>).map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenMenu(key)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="flex items-center gap-2 uppercase tracking-[0.25em] transition-colors hover:text-gold focus:text-gold focus:outline-none"
                aria-expanded={openMenu === key}
                aria-controls={`${key}-menu`}
                onFocus={() => setOpenMenu(key)}
              >
                {menuLabels[key]}
                <span aria-hidden>▾</span>
              </button>
              <div
                id={`${key}-menu`}
                role="menu"
                className={`absolute left-0 mt-4 w-80 origin-top rounded-2xl border border-white/10 bg-dusk/95 p-4 shadow-luxe backdrop-blur ${
                  openMenu === key
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                } transition-all duration-200 ease-out`}
              >
                <ul className="space-y-3">
                  {menus[key].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block rounded-xl p-3 transition hover:bg-midnight/60 focus:bg-midnight/60 focus:outline-none"
                      >
                        <p className="text-sm uppercase tracking-[0.2em] text-ivory/90">
                          {item.label}
                        </p>
                        {item.description && (
                          <p className="mt-1 text-xs text-ivory/60">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>
        <Link
          href="#booking"
          className="hidden rounded-full border border-gold/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold/10 lg:inline-block"
        >
          Enquire
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-ivory/80 transition hover:text-gold"
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-xl">{open ? "✕" : "☰"}</span>
      </button>
      <div
        className={`absolute inset-x-4 top-[calc(100%+12px)] z-40 origin-top rounded-3xl border border-white/10 bg-dusk/95 p-6 shadow-luxe backdrop-blur transition-all duration-200 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="space-y-6">
          {(Object.keys(menus) as Array<Exclude<MenuKey, null>>).map((key) => (
            <div key={key}>
              <p className="text-xs uppercase tracking-[0.35em] text-gold">
                {menuLabels[key]}
              </p>
              <ul className="mt-3 space-y-3">
                {menus[key].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-xl bg-midnight/40 p-3 text-sm text-ivory/80 transition hover:bg-midnight/70"
                      onClick={() => setOpen(false)}
                    >
                      <p className="font-medium">{item.label}</p>
                      {item.description && (
                        <p className="mt-1 text-xs text-ivory/60">
                          {item.description}
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="#booking"
            className="block rounded-full border border-gold/60 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold/10"
            onClick={() => setOpen(false)}
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
