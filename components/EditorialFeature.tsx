import Image from "next/image";
import Link from "next/link";
import { FadeText } from "./FadeText";

const EditorialFeature = () => {
  return (
    <section className="py-40 bg-surface-container-low px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
        <div className="md:col-span-5 md:pr-12">
          <FadeText
            as="span"
            delay={0}
            className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-secondary mb-6 block"
          >
            The Philosophy
          </FadeText>

          {/* h3 kept as raw JSX to preserve the serif-italic span on "Artistry" */}
          <h3 className="text-4xl font-headline leading-tight mb-8">
            Reduction as <span className="serif-italic">Artistry</span>.
          </h3>

          <FadeText
            as="p"
            delay={0.1}
            className="text-on-surface-variant leading-relaxed mb-10 text-lg"
          >
            Each Mirova piece is a dialogue between raw material and refined
            geometry. We believe that true luxury does not shout; it breathes
            within the quiet spaces of a well-considered home.
          </FadeText>

          <Link
            className="inline-block font-label text-[0.6875rem] uppercase tracking-[0.1rem] text-on-surface border-b border-on-surface/20 pb-2 hover:border-on-surface transition-all"
            href="#"
          >
            Discover the Atelier
          </Link>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 gap-8">
          <div className="pt-24 relative aspect-[3/4]">
            <Image
              className="object-cover"
              alt="Detail of a textured stone chair back"
              src="/images/feauture 1.svg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              className="object-cover"
              alt="Minimalist wooden furniture detail in sunlight"
              src="/images/feauture 2.svg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFeature;
