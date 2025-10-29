import Image from "next/image";
import { heroSlides } from "@/data/travelData";

export function DestinationsShowcase() {
  return (
    <section
      className="relative bg-midnight py-24"
      aria-labelledby="destinations-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Handpicked Destinations
          </p>
          <h2
            id="destinations-heading"
            className="text-3xl font-semibold md:text-5xl"
          >
            Where Exceptional Stories Begin
          </h2>
          <p className="text-base text-ivory/65 md:max-w-3xl">
            Explore a curated portfolio that spans iconic coastlines, heritage
            cities, and untamed frontiers—all with Éclat Journeys concierge
            service.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {heroSlides.map((slide) => (
            <article
              key={slide.id}
              id={slide.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-dusk/60 shadow-luxe transition hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="relative h-56">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/25 to-transparent" />
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="text-2xl font-semibold">{slide.title}</h3>
                <p className="text-xs uppercase tracking-[0.3em] text-ivory/50">
                  {slide.subtitle}
                </p>
                <p className="text-sm text-ivory/70">{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
