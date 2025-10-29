"use client";

import { FormEvent, useState } from "react";

const socials = [
  { label: "Instagram", href: "https://instagram.com", handle: "@eclatjourneys" },
  { label: "Pinterest", href: "https://pinterest.com", handle: "/eclatjourneys" },
  { label: "LinkedIn", href: "https://linkedin.com", handle: "/company/eclatjourneys" },
];

export function SiteFooter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="sticky bottom-0 z-30 border-t border-white/10 bg-midnight/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Insider Dispatch
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Join the Éclat Circle</h2>
          <p className="mt-3 text-sm text-ivory/70">
            Receive limited-release itineraries, invitation-only events, and
            privileged partner access.
          </p>
        </div>
        <form
          className="flex w-full max-w-lg flex-col gap-3 md:flex-row"
          onSubmit={handleSubmit}
          aria-label="Newsletter subscription form"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="enter your email"
            className="w-full rounded-full border border-white/20 bg-dusk/60 px-6 py-3 text-sm uppercase tracking-[0.3em] text-ivory/70 placeholder:text-ivory/30 focus:border-gold/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full border border-gold/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold transition hover:bg-gold/10"
          >
            {submitted ? "Subscribed" : "Join"}
          </button>
        </form>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="uppercase tracking-[0.35em]">
            © {new Date().getFullYear()} Éclat Journeys. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold"
                >
                  <span className="uppercase tracking-[0.3em]">
                    {social.label}
                  </span>
                  <span className="ml-2 text-xs text-ivory/40">
                    {social.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
