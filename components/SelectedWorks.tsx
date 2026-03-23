"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { products } from "../utils/data";

export default function SelectedWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  // Show all products now that we have a carousel
  const featured = products;

  return (
    <section className="py-20 md:py-40 px-6 md:px-20 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 flex-col md:flex-row md:mb-16 gap-6 md:gap-0">
        <div>
          <h3 className="text-4xl font-headline">Selected Works</h3>
        </div>

        <div className="flex gap-4 self-end  md:self-auto">
          <button
            onClick={() => scroll("left")}
            className="p-4 border border-outline-variant/20 hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">west</span>
          </button>

          <button
            onClick={() => scroll("right")}
            className="p-4 border border-outline-variant/20 hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 no-scrollbar pb-8 -mx-2 px-2 md:-mx-6 md:px-6 smooth-scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        {featured.map((product) => (
          <div
            key={product.id}
            className="min-w-[85vw] sm:min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start"
          >
            <Link
              href={`/product/${product.slug}`}
              className="group cursor-pointer block"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-surface-bright mb-6 relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[0.625rem] tracking-widest text-on-surface-variant uppercase mb-1">
                    {product.category}
                  </p>
                  <h4 className="text-lg font-headline truncate pr-4">
                    {product.name}
                  </h4>
                </div>

                <p className="text-secondary whitespace-nowrap">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
