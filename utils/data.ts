// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type Thumbnail = {
  src: string;
  alt: string;
};

export type RelatedProduct = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;

  category: string;
  name: string;
  price: number;

  image: string;
  alt: string;
  featured: boolean;

  tagline: string;
  description: string;

  materials: string;
  dimensions: string;
  careInstructions: string;
  sustainability: string;

  thumbnails: Thumbnail[];

  atelierNote: string;
  atelierImage: string;

  rating: number;
  reviewCount: number;

  related: RelatedProduct[];
};

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "1",
    slug: "vessel-chair",
    category: "Seating",
    name: "VESSEL CHAIR",
    price: 3100,

    image: "/images/vessel_chair.jpg",
    alt: "Modern sculptural lounge chair",
    featured: true,

    tagline: "A body-formed oak lounge silhouette",
    description:
      "The Vessel Chair is shaped around the human form, with a gently curved seat and high backrest carved from a single slab of solid oak.",

    materials: "Solid Natural Oak · Dark Walnut · Bleached Ash",
    dimensions: "H 85cm · W 72cm · D 80cm · Seat H 42cm",
    careInstructions: "Wipe with a dry cloth. Treat annually with natural oil.",
    sustainability: "FSC-certified oak. Three trees replanted per chair.",

    thumbnails: [
      { src: "/images/thumb1.jpg", alt: "Side view" },
      { src: "/images/thumb2.jpg", alt: "Detail" },
      { src: "/images/thumb4.jpg", alt: "In room" },
    ],

    atelierNote: "Each chair undergoes sixty hours of hand-finishing.",
    atelierImage: "/images/woodworking_detail.jpg",

    rating: 4,
    reviewCount: 31,

    related: [
      {
        slug: "monolith-chair",
        name: "Monolith Chair",
        tagline: "Ocean velvet wrapped in tapered oak",
        price: 2450,
        image: "/images/hero.svg",
        alt: "Deep blue velvet chair with oak legs",
      },
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 1850,
        image: "/images/travertine_plinth.jpg",
        alt: "Travertine table",
      },
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 980,
        image: "/images/lumen_arc.jpg",
        alt: "Pendant light",
      },
    ],
  },

  {
    id: "2",
    slug: "travertine-plinth",
    category: "Living",
    name: "TRAVERTINE PLINTH",
    price: 1850,

    image: "/images/travertine_plinth.jpg",
    alt: "Raw stone side table with natural veining",
    featured: true,

    tagline: "Raw earth-formed stone table",
    description:
      "Hewn from a single block of Roman travertine, this plinth table exposes the raw character of the stone — its voids, its veins, its geological memory — and places it at the center of the room.",

    materials: "Roman Travertine · Brushed Limestone · Fossil Grey",
    dimensions: "H 45cm · W 40cm · D 40cm",
    careInstructions:
      "Seal annually. Wipe with a damp cloth. Avoid acidic liquids.",
    sustainability: "Reclaimed quarry offcuts. Zero synthetic finishes.",

    thumbnails: [
      { src: "/images/thumb1.jpg", alt: "Top view" },
      { src: "/images/thumb2.jpg", alt: "Detail veining" },
      { src: "/images/thumb4.jpg", alt: "In context" },
    ],

    atelierNote:
      "Each plinth is unique — no two stones share the same surface.",
    atelierImage: "/images/stone_detail.jpg",

    rating: 5,
    reviewCount: 18,

    related: [
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 1850,
        image: "/images/travertine_plinth.jpg",
        alt: "Travertine table",
      },
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 980,
        image: "/images/lumen_arc.jpg",
        alt: "Pendant light",
      },
    ],
  },

  {
    id: "3",
    slug: "lumen-arc",
    category: "Lighting",
    name: "LUMEN ARC",
    price: 980,

    image: "/images/lumen_arc.jpg",
    alt: "Minimal brass arc pendant light",
    featured: true,

    tagline: "Minimal brass arc pendant",
    description:
      "The Lumen Arc is a study in restraint — a single curved brass tube, hand-bent and brushed, suspending a frosted glass diffuser that casts a warm, directionless glow across any surface below.",

    materials: "Brushed Brass · Aged Bronze · Matte Black",
    dimensions: "H 120cm (adjustable) · Ø 18cm shade",
    careInstructions:
      "Dust with a dry cloth. Polish with a brass-safe cloth quarterly.",
    sustainability:
      "Recycled brass alloy. Designed for standard E27 LED bulbs.",

    thumbnails: [
      { src: "/images/thumb1.jpg", alt: "Full pendant" },
      { src: "/images/thumb2.jpg", alt: "Shade detail" },
      { src: "/images/thumb4.jpg", alt: "Lit in room" },
    ],

    atelierNote: "Each arc is hand-bent to a tolerance of ±1mm.",
    atelierImage: "/images/brass_detail.jpg",

    rating: 4,
    reviewCount: 24,

    related: [
      {
        slug: "monolith-chair",
        name: "Monolith Chair",
        tagline: "Ocean velvet wrapped in tapered oak",
        price: 2450,
        image: "/images/hero.svg",
        alt: "Deep blue velvet chair with oak legs",
      },
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 1850,
        image: "/images/travertine_plinth.jpg",
        alt: "Travertine table",
      },
    ],
  },

  // ── NEW ─────────────────────────────────────
  {
    id: "4",
    slug: "monolith-chair",
    category: "Seating",
    name: "THE MONOLITH CHAIR",
    price: 2450,

    // Save the uploaded image as /images/monolith_chair.jpg in your /public folder
    image: "/images/hero.svg",
    alt: "Deep ocean-blue velvet dining chair with curved backrest and tapered oak legs",
    featured: true,

    tagline: "Ocean velvet wrapped in tapered oak",
    description:
      "The Monolith Chair commands a room with quiet authority. Its wraparound backrest — upholstered in deep ocean velvet — envelops the sitter in a single continuous curve, while hand-tapered solid oak legs ground the form with warmth and precision.",

    materials:
      "Ocean Blue Velvet · Midnight Teal · Slate Charcoal · Solid Oak Legs",
    dimensions: "H 80cm · W 58cm · D 55cm · Seat H 46cm",
    careInstructions:
      "Brush velvet gently with a soft-bristled brush. Blot spills immediately. Professional clean only.",
    sustainability:
      "FSC-certified oak legs. Velvet woven from recycled PET fibres. Zero chrome tanning.",

    thumbnails: [
      { src: "/images/monolith_thumb1.svg", alt: "Front view" },
      { src: "/images/monolith_thumb2.svg", alt: "Side profile" },
    ],

    atelierNote:
      "The backrest curve is hand-shaped over a steam-bent oak mould — no two are identical.",
    atelierImage: "/images/monolith_atelier.jpg",

    rating: 5,
    reviewCount: 12,

    related: [
      {
        slug: "vessel-chair",
        name: "Vessel Chair",
        tagline: "A body-formed oak lounge silhouette",
        price: 3100,
        image: "/images/vessel_chair.jpg",
        alt: "Modern sculptural lounge chair",
      },
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 1850,
        image: "/images/travertine_plinth.jpg",
        alt: "Travertine table",
      },
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 980,
        image: "/images/lumen_arc.jpg",
        alt: "Pendant light",
      },
    ],
  },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/** Returns a product by slug (case-insensitive, hyphen-normalised) */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug.toLowerCase());
}
