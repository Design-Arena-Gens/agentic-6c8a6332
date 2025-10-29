import Image from "next/image";
import Link from "next/link";
import { curatedCollections } from "@/data/travelData";

export function CollectionsSection() {
  return (
    <section
      id="collections"
      className="relative bg-midnight py-24 sm:py-32"
      aria-labelledby="collections-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Signature Collections
          </p>
          <h2
            id="collections-heading"
            className="text-3xl font-semibold md:text-5xl"
          >
            Curated Escapes Crafted by Connoisseurs
          </h2>
          <p className="text-base text-ivory/60 md:max-w-3xl">
            Discover itineraries designed for discerning travelers—each journey
            pairs insider access with elevated comfort and understated glamour.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {curatedCollections.map((collection) => (
            <article
              key={collection.id}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-dusk/60 shadow-luxe transition hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-midnight/60 px-4 py-1 text-[10px] uppercase tracking-[0.35em] text-gold">
                  {collection.tag}
                </span>
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="text-2xl font-semibold">{collection.title}</h3>
                <p className="text-sm text-ivory/70">
                  {collection.description}
                </p>
                <Link
                  href={collection.href}
                  className="mt-auto inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:gap-4"
                >
                  Explore
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
