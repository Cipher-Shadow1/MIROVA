"use client";

import { useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Thumbnail } from "../utils/data";

interface ProductImageGalleryProps {
  mainImage: string;
  mainAlt: string;
  thumbnails: Thumbnail[];
}

export function ProductImageGallery({
  mainImage,
  mainAlt,
  thumbnails,
}: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Build the full image list: main image + thumbnails
  // If thumbnails exist, selected index switches between them
  const allImages =
    thumbnails.length > 0
      ? [{ src: mainImage, alt: mainAlt }, ...thumbnails]
      : [{ src: mainImage, alt: mainAlt }];

  const activeImage = allImages[selectedIndex];

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      {/* ── Main Image ── */}
      <div className="bg-surface-container-low w-full overflow-hidden aspect-[4/3] md:aspect-auto md:h-[70vh]">
        <ImageWithFallback
          src={activeImage.src}
          alt={activeImage.alt}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* ── Thumbnails ── */}
      {allImages.length > 1 && (
        <div className="flex flex-row gap-3 md:gap-4 overflow-x-auto pb-2 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`
                relative bg-surface-container-low flex-shrink-0 snap-start
                w-24 h-28 sm:w-36 sm:h-44 md:w-56 md:h-60
                transition-all duration-200
                ${
                  selectedIndex === i
                    ? "ring-1 ring-on-surface opacity-100"
                    : "opacity-50 hover:opacity-80"
                }
              `}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
