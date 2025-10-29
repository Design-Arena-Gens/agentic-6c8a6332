"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  heroSlides,
  searchSuggestions as baseSuggestions,
} from "@/data/travelData";
import Link from "next/link";

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const filteredSuggestions = useMemo(() => {
    if (!query.trim()) {
      return baseSuggestions.slice(0, 4);
    }

    return baseSuggestions
      .filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 6);
  }, [query]);

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {heroSlides.map((item, index) => (
        <Image
          key={item.id}
          src={item.image}
          alt={item.alt}
          priority={index === 0}
          fill
          sizes="100vw"
          className={`absolute inset-0 object-cover transition-opacity duration-700 ease-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 text-center md:text-left">
        <div className="flex flex-col gap-4 md:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Tailored Journeys • Signature Service
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            {slide.title}
          </h1>
          <p className="text-lg uppercase tracking-[0.35em] text-champagne/80">
            {slide.subtitle}
          </p>
          <p className="text-base text-ivory/80 md:text-lg">
            {slide.description}
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-end">
          <div className="relative w-full max-w-xl overflow-hidden rounded-full border border-white/20 bg-midnight/70 p-1 text-left shadow-luxe transition focus-within:border-gold/70 focus-within:bg-midnight/90">
            <label htmlFor="hero-search" className="sr-only">
              Search luxury travel experiences
            </label>
            <input
              id="hero-search"
              type="search"
              className="w-full rounded-full bg-transparent px-6 py-3 text-sm uppercase tracking-[0.35em] text-ivory/80 placeholder:text-ivory/40 focus:outline-none"
              placeholder="Search by destination or experience"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 120)}
              role="combobox"
              aria-autocomplete="list"
              aria-haspopup="listbox"
              aria-expanded={isFocused && filteredSuggestions.length > 0}
              aria-controls="search-suggestions"
            />
            {isFocused && filteredSuggestions.length > 0 && (
              <ul
                id="search-suggestions"
                role="listbox"
                className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 space-y-2 rounded-3xl border border-white/10 bg-dusk/95 p-4 shadow-luxe backdrop-blur"
              >
                {filteredSuggestions.map((suggestion) => (
                  <li key={suggestion}>
                    <button
                      type="button"
                      className="w-full rounded-2xl px-4 py-3 text-left text-xs uppercase tracking-[0.3em] text-ivory/70 transition hover:bg-midnight/60 focus:bg-midnight/60 focus:outline-none"
                      onMouseDown={() => {
                        setQuery(suggestion);
                        setIsFocused(false);
                      }}
                    >
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            href={slide.ctaHref}
            className="rounded-full border border-gold/70 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold transition hover:bg-gold/10"
          >
            {slide.ctaLabel}
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3 md:justify-start">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-12 bg-gold"
                  : "w-6 bg-ivory/30 hover:bg-ivory/60"
              }`}
              aria-label={`View hero slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
