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

  // Only show the first 3 featured products
  const featured = products.slice(0, 3);

  return (
    <section className="py-40 px-6 md:px-20">
      {/* Header */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <h3 className="text-4xl font-headline">Selected Works</h3>
        </div>

        <div className="flex gap-4">
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

      {/* Grid */}
      <div
        ref={scrollRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        {featured.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group cursor-pointer"
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
                <h4 className="text-lg font-headline">{product.name}</h4>
              </div>

              <p className="text-secondary">
                ${product.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
