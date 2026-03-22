import Image from "next/image";
import Link from "next/link";
import { FadeText } from "./FadeText";

export default function HeroSection() {
  return (
    <section className="relative pt-16 md:pt-20 pb-24 md:pb-40 px-4 md:px-20 flex flex-col items-center">
      {/* Headline */}
      <div className="max-w-5xl text-center mb-16 md:mb-24 px-2">
        <FadeText
          as="h1"
          className="text-4xl md:text-7xl font-headline leading-[1.1] tracking-tighter text-on-surface"
        >
          Where Silence Shapes the Finest Forms.
        </FadeText>
      </div>

      {/* Main Image + Floating Card Wrapper */}
      <div className="relative w-full max-w-[1440px] flex flex-col items-center md:block">
        <div className="relative w-full aspect-4/5 md:aspect-video">
          <Image
            className="w-full h-full object-cover"
            alt="Minimalist high-end interior architecture with sunlight and shadows"
            src="./images/hero.svg"
            fill
            sizes="100vw"
            priority
          />
        </div>

        {/* Floating Product Card */}
        <div className="relative md:absolute right-auto md:right-24 -mt-12 md:mt-0 bottom-auto md:-bottom-16 w-[92%] sm:w-[80%] md:w-[400px] bg-surface-container-lowest p-8 md:p-12 shadow-[0_20px_40px_rgba(47,51,49,0.06)] z-10">
          <div className="mb-6 md:mb-8">
            <span className="font-label text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.1rem] text-on-surface-variant block mb-3 md:mb-4">
              New Arrival
            </span>
            <FadeText
              as="h2"
              delay={0.1}
              className="text-xl md:text-2xl font-headline tracking-tight text-on-surface mb-2"
            >
              THE MONOLITH CHAIR
            </FadeText>
            <FadeText
              as="p"
              delay={0.2}
              className="text-base md:text-lg font-body text-secondary"
            >
              $2,450
            </FadeText>
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full py-3.5 md:py-4 bg-primary text-on-primary font-label text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.1rem] transition-all hover:bg-primary-dim">
              ADD TO CART
            </button>
            {/* VIEW ITEM → links to monolith-chair product page */}
            <Link
              href="/product/monolith-chair"
              className="w-full py-3.5 md:py-4 border border-outline-variant/30 text-on-surface font-label text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.1rem] transition-all hover:bg-surface-container-low text-center block"
            >
              VIEW ITEM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
