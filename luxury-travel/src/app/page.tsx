import { CollectionsSection } from "@/components/CollectionsSection";
import { DestinationsShowcase } from "@/components/DestinationsShowcase";
import { HeroCarousel } from "@/components/HeroCarousel";
import { NavigationBar } from "@/components/NavigationBar";
import { ParallaxFeature } from "@/components/ParallaxFeature";
import { BookingSection } from "@/components/BookingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { ExclusiveOffers } from "@/components/ExclusiveOffers";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main className="flex flex-col">
        <HeroCarousel />
        <Highlights />
        <DestinationsShowcase />
        <CollectionsSection />
        <ParallaxFeature />
        <ExclusiveOffers />
        <BookingSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}

function Highlights() {
  return (
    <section
      id="highlights"
      className="relative bg-dusk/70 py-20 backdrop-blur-md"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(246,241,231,0.12),_transparent_65%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        {[
          {
            id: "adventure",
            title: "Adventure & Exploration",
            description:
              "Helicopter glacier picnics, desert kite surfing, and polar expeditions guided by leading naturalists.",
          },
          {
            id: "wellness",
            title: "Wellness Retreats",
            description:
              "Immersive thalassotherapy, Ayurvedic sanctuaries, and restorative spa rituals curated by wellness directors.",
          },
          {
            id: "culinary",
            title: "Culinary Journeys",
            description:
              "Chef’s table residencies, vineyard buyouts, and market foraging with Michelin-starred culinarians.",
          },
          {
            id: "heritage",
            title: "Heritage & Culture",
            description:
              "Private palace access, curator-led museum evenings, and intimate encounters with master artisans.",
          },
        ].map((item) => (
          <article
            key={item.title}
            id={item.id}
            className="rounded-3xl border border-white/10 bg-midnight/60 p-8 shadow-luxe transition hover:-translate-y-2 hover:border-gold/50"
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-sm text-ivory/70">{item.description}</p>
            <Link
              href="#offers"
              className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold transition hover:gap-4"
            >
              Learn More <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
