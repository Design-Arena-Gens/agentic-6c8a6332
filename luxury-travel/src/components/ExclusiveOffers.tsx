import Link from "next/link";
import { offerMenu } from "@/data/travelData";

const exclusiveInclusions = [
  {
    title: "Signature Upgrades",
    detail:
      "Complimentary suite upgrades, daily breakfast, and spa credits at preferred partner properties.",
  },
  {
    title: "Insider Access",
    detail:
      "After-hours museum entries, private shopping salons, and curated events reserved for Éclat Circle guests.",
  },
  {
    title: "Vip Recognition",
    detail:
      "On arrival amenities, VIP airport assistance, and dedicated on-call concierges in every destination.",
  },
];

export function ExclusiveOffers() {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-midnight py-24"
      aria-labelledby="offers-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(201,166,70,0.14),_transparent_70%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Exclusive Advantages
          </p>
          <h2
            id="offers-heading"
            className="text-3xl font-semibold md:text-5xl"
          >
            Privileges Reserved for Éclat Journeys Clients
          </h2>
          <p className="text-base text-ivory/65 md:max-w-3xl">
            We negotiate with leading hospitality groups to ensure every stay
            is accentuated by thoughtful benefits that heighten the sense of
            occasion.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-dusk/70 p-8 shadow-luxe">
            <p className="text-xs uppercase tracking-[0.35em] text-ivory/50">
              Partner Highlights
            </p>
            <ul className="mt-6 space-y-4 text-sm text-ivory/70">
              {offerMenu.map((offer) => (
                <li
                  key={offer.label}
                  className="rounded-2xl border border-white/5 bg-midnight/50 p-4 transition hover:border-gold/40"
                >
                  <p className="text-sm font-semibold text-ivory">
                    {offer.label}
                  </p>
                  {offer.description && (
                    <p className="mt-2 text-xs text-ivory/60">
                      {offer.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="#booking"
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:gap-4"
            >
              View Booking Window <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-dusk/70 p-8 shadow-luxe">
            <p className="text-xs uppercase tracking-[0.35em] text-ivory/50">
              Elevated Inclusions
            </p>
            <ul className="mt-6 space-y-4 text-sm text-ivory/70">
              {exclusiveInclusions.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-1 inline-flex h-8 min-w-[2.5rem] items-center justify-center rounded-full border border-gold/60 text-[10px] uppercase tracking-[0.35em] text-gold"
                  >
                    ÉJ
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ivory">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-ivory/60">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-ivory/50">
              Terms and availability vary by partner. Consult your advisor for
              the latest details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
