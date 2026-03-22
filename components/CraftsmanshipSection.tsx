import Image from "next/image";
import { FadeText } from "./FadeText";

const craftsmanshipItems = [
  {
    title: "Precision Craftsmanship",
    body: "Every joint, every curve, and every finish is executed with surgical precision by master artisans who have dedicated decades to their craft.",
  },
  {
    title: "Premium Materials",
    body: "We source only the most exceptional raw materials—from sustainable solid woods to rare Italian travertines and full-grain aniline leathers.",
  },
  {
    title: "Minimalist Aesthetics",
    body: "Our design language is one of reduction. We remove the superfluous until only the essence remains, creating pieces that outlast fleeting trends.",
  },
];

export default function CraftsmanshipSection() {
  return (
    <section className="bg-[#1A1A18] text-white w-full overflow-hidden">
      {/* ── Top Marquee — untouched ── */}
      <div className="border-y border-white/10 py-4 flex items-center overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          <p className="font-label text-[0.625rem] tracking-[0.2rem] uppercase px-8">
            Crafting Silence into Form ✦ Traditional Techniques ✦ Modern Soul ✦
            Crafting Silence into Form ✦ Traditional Techniques ✦ Modern Soul
          </p>
          <p className="font-label text-[0.625rem] tracking-[0.2rem] uppercase px-8">
            Crafting Silence into Form ✦ Traditional Techniques ✦ Modern Soul ✦
            Crafting Silence into Form ✦ Traditional Techniques ✦ Modern Soul
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-12 md:px-20 py-40">
        {/* Left */}
        <div className="flex flex-col gap-16">
          {/* h2 kept as raw JSX — has serif-italic span inside */}
          <h2 className="text-4xl md:text-6xl font-headline leading-[1.15] tracking-tight">
            Design Begins With You — and Ends in{" "}
            <span className="serif-italic">Timeless Form.</span>
          </h2>
          <div className="w-full aspect-[4/3] overflow-hidden relative">
            <Image
              className="object-cover grayscale brightness-90 contrast-110"
              alt="Close up of artisan hands working with raw materials"
              src="/images/artisan_hands.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-12">
          {craftsmanshipItems.map((item, i) => (
            <div
              key={item.title}
              className="group border-b border-white/10 pb-8 last:border-0"
            >
              <FadeText
                as="h4"
                delay={i * 0.1}
                className="font-label text-[0.75rem] uppercase tracking-[0.2rem] mb-4 text-white/60 group-hover:text-white transition-colors"
              >
                {item.title}
              </FadeText>
              <FadeText
                as="p"
                delay={i * 0.1 + 0.05}
                className="font-body text-lg text-white/80 leading-relaxed max-w-md"
              >
                {item.body}
              </FadeText>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Marquee — untouched ── */}
      <div className="border-y border-white/10 py-4 flex items-center overflow-hidden whitespace-nowrap">
        <div
          className="flex animate-scroll"
          style={{ animationDirection: "reverse" }}
        >
          <p className="font-label text-[0.625rem] tracking-[0.2rem] uppercase px-8">
            Built for Longevity ✦ Materials of Origin ✦ The Human Touch ✦ Built
            for Longevity ✦ Materials of Origin ✦ The Human Touch
          </p>
          <p className="font-label text-[0.625rem] tracking-[0.2rem] uppercase px-8">
            Built for Longevity ✦ Materials of Origin ✦ The Human Touch ✦ Built
            for Longevity ✦ Materials of Origin ✦ The Human Touch
          </p>
        </div>
      </div>
    </section>
  );
}
