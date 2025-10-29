import Image from "next/image";
import { testimonials } from "@/data/travelData";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-dusk py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(18,57,91,0.8),_rgba(11,26,46,0.95)_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">
            Trusted By Visionaries
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl font-semibold md:text-5xl"
          >
            Stories from Distinguished Travelers
          </h2>
          <p className="text-base text-ivory/70 md:max-w-3xl">
            Our clients return for the discretion, creativity, and flawless
            execution that define Éclat Journeys.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-midnight/60 p-8 transition hover:-translate-y-2 hover:border-gold/50"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gold/40">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ivory">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.25em] text-ivory/60">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <blockquote className="text-sm text-ivory/75">
                {testimonial.quote}
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
