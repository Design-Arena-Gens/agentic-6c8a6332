export function ParallaxFeature() {
  return (
    <section
      id="parallax"
      className="relative isolate overflow-hidden bg-fixed bg-center bg-cover py-32"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=2000&q=80)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.6em] text-gold">
          Elevate Your Perspective
        </p>
        <h2 className="text-3xl font-semibold md:text-5xl">
          Private Jetways & Bespoke Air Service
        </h2>
        <p className="text-base text-ivory/75">
          From Gulfstream charters to seaplane transfers, our aviation
          specialists orchestrate seamless journeys that transform travel time
          into indulgent experiences in the sky.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.35em] text-ivory/70">
          <span className="rounded-full border border-white/20 px-6 py-3">
            Tailored Menus
          </span>
          <span className="rounded-full border border-white/20 px-6 py-3">
            Global Lounges
          </span>
          <span className="rounded-full border border-white/20 px-6 py-3">
            In-flight Spa
          </span>
        </div>
      </div>
    </section>
  );
}
