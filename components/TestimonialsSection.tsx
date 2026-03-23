import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "The Monolith Chair has transformed my study. It's rare to find a piece that is both a sculptural statement and incredibly comfortable for long evenings of reading.",
    name: "Julian Thorne",
    title: "Interior Architect",
    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774280421/profile1_l28l0f.svg",
    dark: false,
  },
  {
    id: 2,
    quote:
      "Mirova is the antithesis of fast furniture. The attention to detail in the Lumen Arc lighting is something you have to see in person to truly appreciate the craftsmanship.",
    name: "Elena Rossi",
    title: "Art Curator",
    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774280501/profile2_mhyifj.svg",
    dark: true,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-40 px-6 md:px-20 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        <span className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-secondary mb-16 block text-center md:text-left">
          CUSTOMER TESTIMONIAL
        </span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          {/* Left */}
          <div className="md:col-span-4">
            <h3 className="text-4xl md:text-5xl font-headline leading-[1.2] mb-8">
              Shaped by Those Who <span className="serif-italic">Live</span>{" "}
              With It.
            </h3>
            <p className="text-on-surface-variant font-body text-lg leading-relaxed">
              A home is a collection of stories. Our pieces are designed to
              become the quiet protagonists in your daily rituals, evolving and
              growing more beautiful with every passing year of use.
            </p>
          </div>

          {/* Right — Cards */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`p-12 flex flex-col justify-between h-full ${
                  t.dark
                    ? "bg-[#1A1A18] text-white"
                    : "bg-surface-container-low"
                }`}
              >
                <div>
                  <span
                    className={`material-symbols-outlined mb-8 scale-150 block ${
                      t.dark ? "text-white/40" : "text-secondary"
                    }`}
                  >
                    format_quote
                  </span>
                  <p
                    className={`text-xl font-headline leading-relaxed italic mb-12 ${
                      t.dark ? "text-white" : "text-on-surface"
                    }`}
                  >
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    width={48}
                    height={48}
                    alt={t.name}
                    className="w-12 h-12 object-cover grayscale rounded-full"
                    src={t.image}
                  />
                  <div>
                    <h5
                      className={`font-label text-[0.75rem] uppercase tracking-wider font-semibold ${
                        t.dark ? "text-white" : "text-on-surface"
                      }`}
                    >
                      {t.name}
                    </h5>
                    <p
                      className={`font-label text-[0.625rem] uppercase tracking-widest ${
                        t.dark ? "text-white/50" : "text-on-surface-variant"
                      }`}
                    >
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
