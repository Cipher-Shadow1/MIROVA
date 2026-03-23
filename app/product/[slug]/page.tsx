// ← NO "use client" here — this stays a server component
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "../../../utils/data";
import { ImageWithFallback } from "../../../components/ImageWithFallback";
import { ProductImageGallery } from "../../../components/Productimagegallery";

// ─────────────────────────────────────────────
// Static Params
// ─────────────────────────────────────────────

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// ─────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Atelier`,
    description: product.tagline,
  };
}

// ─────────────────────────────────────────────
// Star renderer — no interactivity, safe in server component
// ─────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex text-secondary">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[18px]"
          style={{
            fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0",
          }}
        >
          star
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <main className="pt-15 pb-20 md:pt-15 md:pb-20">
      <div className="max-w-[1920px] mx-auto px-5 md:px-20">
        {/* ── Breadcrumb ── */}
        <nav className="mb-8 md:mb-12">
          <ol className="flex items-center gap-1.5 md:gap-2 text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.08rem] md:tracking-[0.1rem] text-on-surface-variant overflow-hidden">
            <li className="hidden sm:block shrink-0">
              <Link
                className="hover:text-secondary transition-colors"
                href="/collections"
              >
                Collections
              </Link>
            </li>
            <li className="hidden sm:block material-symbols-outlined text-[10px] leading-none shrink-0">
              chevron_right
            </li>
            <li className="shrink-0">
              <Link
                className="hover:text-secondary transition-colors"
                href={`/collections/${product.category.toLowerCase()}`}
              >
                {product.category}
              </Link>
            </li>
            <li className="material-symbols-outlined text-[10px] leading-none shrink-0">
              chevron_right
            </li>
            <li className="text-on-surface truncate min-w-0">{product.name}</li>
          </ol>
        </nav>

        {/* ── Hero ── */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-24">
          {/* LEFT: ProductImageGallery is "use client" — handles all interactivity */}
          <div className="md:col-span-7">
            <ProductImageGallery
              mainImage={product.image}
              mainAlt={product.alt}
              thumbnails={product.thumbnails}
            />
          </div>

          {/* RIGHT: Details — pure server rendering, no state needed */}
          <div className="md:col-span-5 flex flex-col pt-0 md:pt-4">
            <span className="text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2rem] md:tracking-[0.25rem] text-on-surface-variant mb-3 md:mb-4">
              {product.category} Collection
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-normal text-on-surface mb-2 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-base md:text-xl font-headline italic text-on-surface-variant mb-5 md:mb-6">
              {product.tagline}
            </p>

            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <StarRating rating={product.rating} />
              <span className="text-[0.625rem] md:text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">
                {product.reviewCount} Reviews
              </span>
            </div>

            <p className="text-3xl sm:text-4xl md:text-5xl font-light text-on-surface mb-6 md:mb-8 tracking-wider">
              دج {product.price}
            </p>

            <div className="h-[1px] w-full bg-outline-variant/20 mb-6 md:mb-8" />

            <p className="text-sm md:text-base font-body text-on-surface-variant leading-relaxed mb-8 md:mb-12 max-w-md">
              {product.description}
            </p>

            <div className="flex flex-col gap-3 md:gap-4">
              <button className="border border-outline-variant/30 text-on-surface py-4 md:py-5 px-8 md:px-10 text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2rem] font-medium hover:bg-surface-container-low transition-all duration-300">
                Bespoke Enquiry
              </button>
              <button className="border bg-on-surface/90 border-outline-variant/30 text-white py-4 md:py-5 px-8 md:px-10 text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.2rem] font-medium hover:bg-on-surface transition-all duration-300">
                Add to Bag
              </button>
            </div>

            {/* ── Accordions ── */}
            <div className="mt-10 md:mt-16 grid grid-cols-1 gap-5 md:gap-6 border-t border-outline-variant/20 pt-6 md:pt-8">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none py-1">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-semibold">
                    Dimensions &amp; Materials
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[20px]">
                    expand_more
                  </span>
                </summary>
                <div className="pt-4 text-sm text-on-surface-variant leading-relaxed">
                  <p>{product.dimensions}</p>
                  <p className="mt-1">Material: {product.materials}</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none py-1">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-semibold">
                    Care Instructions
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[20px]">
                    expand_more
                  </span>
                </summary>
                <div className="pt-4 text-sm text-on-surface-variant leading-relaxed">
                  {product.careInstructions}
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none py-1">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-semibold">
                    Sustainability
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-[20px]">
                    expand_more
                  </span>
                </summary>
                <div className="pt-4 text-sm text-on-surface-variant leading-relaxed">
                  {product.sustainability}
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* ── Related Products ── */}
        {product.related.length > 0 && (
          <section className="mt-20 md:mt-32 border-t border-outline-variant/20 pt-12 md:pt-16">
            <h2 className="text-[0.6875rem] uppercase tracking-[0.25rem] text-on-surface-variant mb-8 md:mb-12">
              You may also like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {product.related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/product/${item.slug}`}
                  className="group flex flex-col gap-3 md:gap-4"
                >
                  <div className="bg-surface-container-low overflow-hidden aspect-[3/4]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <p className="text-[0.625rem] md:text-[0.6875rem] uppercase tracking-widest font-semibold text-on-surface leading-snug">
                      {item.name}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1 italic leading-snug">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-on-surface mt-2 tracking-wider">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
