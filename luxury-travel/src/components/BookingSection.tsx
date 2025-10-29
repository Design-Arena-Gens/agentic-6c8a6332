import Image from "next/image";
import Link from "next/link";
import { bookingOptions } from "@/data/travelData";

export function BookingSection() {
  return (
    <section
      id="booking"
      className="relative bg-dusk/80 py-24 backdrop-blur"
      aria-labelledby="booking-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(201,166,70,0.15),transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Booking Suite
          </p>
          <h2
            id="booking-heading"
            className="text-3xl font-semibold md:text-5xl"
          >
            Seamless Access to Our Preferred Partners
          </h2>
          <p className="text-base text-ivory/65 md:max-w-3xl">
            Review transparent pricing, real-time availability, and inclusions
            negotiated exclusively for Éclat Journeys clientele.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {bookingOptions.map((option) => (
            <article
              key={option.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-midnight/60 shadow-luxe transition hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/30 to-transparent" />
                <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-ivory/60">
                    Partnered With
                  </span>
                  <p className="text-lg font-semibold text-ivory">
                    {option.partner}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold">{option.title}</h3>
                  <p className="text-sm text-ivory/60">
                    From{" "}
                    <span className="font-medium text-champagne">
                      {option.priceFrom}
                    </span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-ivory/50">
                    {option.availability}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-ivory/70">
                  {option.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-1 inline-block h-2 w-2 rounded-full bg-gold/80"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-3 rounded-full border border-gold/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold transition hover:bg-gold/10"
                >
                  Book with {option.partner}
                  <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
