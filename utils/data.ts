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
    price: 200,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232046/4ba779ea-2292-4c66-8768-aa1045a619f1.png",
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
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231945/53186111-96da-4d5c-a9a1-3151bb5605c2.png",
        alt: "Side view",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232276/9728904a-34ac-4a2f-bac9-b187bfde0f28.png",
        alt: "Detail",
      },
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
        price: 299,
        image: "/images/hero.svg",
        alt: "Deep blue velvet chair with oak legs",
      },
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 599,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228349/table_1_ieuzvz.png",
        alt: "Travertine table",
      },
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 80,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232577/851637fe-ac6b-4866-9560-a18eb45f4d5f.png",
        alt: "Pendant light",
      },
    ],
  },

  {
    id: "2",
    slug: "travertine-plinth",
    category: "Living",
    name: "TRAVERTINE PLINTH TABLE",
    price: 599,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228349/table_1_ieuzvz.png",
    alt: "Raw Roman travertine plinth side table with natural fossil veining",
    featured: true,

    tagline: "A fragment of ancient earth, shaped into form",
    description:
      "Hewn from a single block of Roman travertine, this plinth table exposes the raw soul of the stone — its voids, its veins, its millions of years of geological memory — and places it unapologetically at the heart of the room. No two pieces are alike. Each void, each fossil trace, each mineral shift is unrepeatable.",

    materials: "Roman Travertine · Brushed Limestone · Fossil Grey Finish",
    dimensions: "H 45cm · W 40cm · D 40cm · Weight approx. 28kg",
    careInstructions:
      "Seal with a natural stone sealant annually. Wipe spills immediately with a soft damp cloth. Avoid acidic liquids — citrus, wine, and vinegar will etch the surface.",
    sustainability:
      "Sourced exclusively from reclaimed quarry offcuts. Zero synthetic finishes or chemical treatments. Each slab is a rescued fragment.",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228349/table_3_ikzk9b.png",
        alt: "Full top-down view — natural fossil veining",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228344/table_2_rgbpgo.jpg",
        alt: "Close-up detail — raw stone voids and mineral layers",
      },
    ],

    atelierNote:
      "Each plinth is unique — no two stones share the same surface.",
    atelierImage: "/images/stone_detail.jpg",

    rating: 5,
    reviewCount: 18,

    related: [
      {
        slug: "vessel-chair",
        name: "Vessel Chair",
        tagline: "A body-formed oak lounge silhouette",
        price: 200,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232046/4ba779ea-2292-4c66-8768-aa1045a619f1.png",
        alt: "Travertine table",
      },
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 80,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232577/851637fe-ac6b-4866-9560-a18eb45f4d5f.png",
        alt: "Pendant light",
      },
    ],
  },

  {
    id: "3",
    slug: "lumen-arc",
    category: "Lighting",
    name: "LUMEN ARC LAMP",
    price: 70,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232577/851637fe-ac6b-4866-9560-a18eb45f4d5f.png",
    alt: "Minimal brass arc pendant light",
    featured: true,

    tagline: "Minimal brass arc pendant",
    description:
      "Desk Table Light, Wood Bedside Lamp, Bedroom Light, Tablelamp, Wood Lamp, Rustic Design, Handcrafted Base, Modern Style",

    materials: "Brushed Brass · Aged Bronze · Matte Black",
    dimensions: "H 120cm (adjustable) · Ø 18cm shade",
    careInstructions:
      "Dust with a dry cloth. Polish with a brass-safe cloth quarterly.",
    sustainability:
      "Recycled brass alloy. Designed for standard E27 LED bulbs.",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232626/1360be6c-19d7-46c9-a8e2-6dcaddb0ad9a.png",
        alt: "Full pendant",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232663/833e7535-6bdd-4e51-87c7-1173416f29c8.png",
        alt: "Shade detail",
      },
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
        price: 299,
        image: "/images/hero.svg",
        alt: "Deep blue velvet chair with oak legs",
      },
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 599,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228349/table_1_ieuzvz.png",
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
    price: 299,

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
        price: 599,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232046/4ba779ea-2292-4c66-8768-aa1045a619f1.png",
        alt: "Travertine table",
      },
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 80,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232577/851637fe-ac6b-4866-9560-a18eb45f4d5f.png",
        alt: "Pendant light",
      },
    ],
  },

  {
    id: "5",
    slug: "silica-vase",
    category: "Decor",
    name: "SILICA VASE",
    price: 150,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774230667/silica-vase_1_ol6afd.svg",
    alt: "Hand-blown frosted glass vase",
    featured: true,

    tagline: "Captured breath in frosted glass",
    description:
      "The Silica Vase is a study in fragility and form. Hand-blown by master glassmakers, its frosted exterior diffuses light, while the asymmetrical silhouette reflects the spontaneity of its creation.",

    materials: "Frosted Borosilicate Glass",
    dimensions: "H 30cm · W 15cm · D 15cm",
    careInstructions:
      "Hand wash only with mild soap and warm water. Do not use abrasive sponges.",
    sustainability: "Made from 100% recycled glass.",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774230664/silica-vase_3_rltsao.svg",
        alt: "Vase detail",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774230663/silica-vase_w_vyptnr.svg",
        alt: "Vase top view",
      },
    ],

    atelierNote:
      "Each vase features unique variations in thickness and opacity.",
    atelierImage: "/images/placeholder_glassblowing.jpg",

    rating: 4.8,
    reviewCount: 15,

    related: [
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 599,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228349/table_1_ieuzvz.png",
        alt: "Travertine table",
      },
    ],
  },

  {
    id: "6",
    slug: "obsidian-mirror",
    category: "Decor",
    name: "OBSIDIAN MIRROR",
    price: 420,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231072/3dbbfbc1-84ae-4539-96a3-b90a0670e1b3.png",
    alt: "Round mirror with a blackened burned wood frame",
    featured: true,

    tagline: "Reflection framed by fire",
    description:
      "Oak Asymmetical Mirror, Oak İrregular Mirror, Irregular Wooden Mirror, Asymmetrical Entryway Mirror, Wooden Framed Asymmetrical Mirror",

    materials: "Oak Wood, Mirror",
    dimensions: "20 W x 30 H x 0.75 D 1.77 inches",
    careInstructions:
      "Clean glass with a streak-free cleaner. Dust the wooden frame gently; do not rub.",
    sustainability:
      "Ash sourced from wind-fallen trees. All-natural preservation technique.",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231141/82d9f04a-470b-447a-9a4e-a535bf01942d.png",
        alt: "Mirror edge detail",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231176/600dfafb-69e8-4e32-b61a-e82b1170883b.png",
        alt: "Mirror in room",
      },
    ],

    atelierNote:
      "The charring process leaves a deeply textured, crackled surface unique to every frame.",
    atelierImage: "/images/placeholder_yakisugi.jpg",

    rating: 5,
    reviewCount: 8,

    related: [
      {
        slug: "lumen-arc",
        name: "Lumen Arc",
        tagline: "Minimal brass pendant",
        price: 80,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774232577/851637fe-ac6b-4866-9560-a18eb45f4d5f.png",
        alt: "Pendant light",
      },
    ],
  },

  {
    id: "7",
    slug: "linen-lumbar",
    category: "Textiles",
    name: "LINEN LUMBAR CUSHION",
    price: 95,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231426/e85e9f3d-29cf-4acd-ac76-539ccedbeb2d.png",
    alt: "Long rectangular linen cushion in natural beige",
    featured: true,

    tagline: "Tactile comfort in raw linen",
    description:
      "Linen Cushion Cover in various sizes, square and lumbar pillow custom size, 39 colours.",

    materials: "100% Linen, 39 Colors",
    dimensions: "L 90cm · W 35cm",
    careInstructions:
      "Machine wash cover on cold, gentle cycle. Tumble dry low or line dry.",
    sustainability:
      "Linen requires significantly less water to cultivate than cotton. Cruelty-free sourced down.",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231472/3ee9e1ec-0dac-4fa5-8109-d2cb2fe6109f.png",
        alt: "Cushion fabric detail",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231537/3f89c014-600d-4566-9bf8-976a57d321e9.png",
        alt: "Cushion on sofa",
      },
    ],

    atelierNote:
      "The fabric is washed with stones post-weaving for immediate softness.",
    atelierImage: "/images/placeholder_weaving.jpg",

    rating: 4.5,
    reviewCount: 42,

    related: [
      {
        slug: "monolith-chair",
        name: "Monolith Chair",
        tagline: "Ocean velvet wrapped in tapered oak",
        price: 299,
        image: "/images/hero.svg",
        alt: "Velvet chair",
      },
    ],
  },

  {
    id: "8",
    slug: "cast-iron-candlestick",
    category: "Decor",
    name: "CAST IRON CANDLESTICK",
    price: 65,

    image:
      "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231656/ed15af56-1338-4d2a-8cb4-f2ffd7d743bd.png",
    alt: "Minimalist brutalist cast iron candlestick holder",
    featured: true,

    tagline: "Brutalist geometry for the table",
    description:
      "A heavy, unapologetic object. Poured into sand molds, these cast iron candlesticks possess a raw, pitted surface that anchors any dining setting with industrial gravity.",

    materials: "Sand-Cast Iron",
    dimensions: "H 12cm · Base Ø 8cm",
    careInstructions:
      "Wipe with a dry cloth. If rust appears, buff lightly with steel wool and season with oil.",
    sustainability:
      "Recycled scrap iron. Indestructible design built to outlast generations.",

    thumbnails: [
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231713/c70be2d6-f892-4ccd-8353-5cd5221f9ceb.png",
        alt: "Candlestick texture",
      },
      {
        src: "https://res.cloudinary.com/dgmh3elio/image/upload/v1774231744/0dea9cd7-89c1-40fe-97db-ce383f982422.png",
        alt: "Candlestick holding lit candle",
      },
    ],

    atelierNote:
      "Small imperfections and sand marks from the casting process are intentionally preserved.",
    atelierImage: "/images/placeholder_foundry.jpg",

    rating: 4.9,
    reviewCount: 27,

    related: [
      {
        slug: "travertine-plinth",
        name: "Travertine Plinth",
        tagline: "Raw earth-formed table",
        price: 599,
        image:
          "https://res.cloudinary.com/dgmh3elio/image/upload/v1774228349/table_1_ieuzvz.png",
        alt: "Travertine table",
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
