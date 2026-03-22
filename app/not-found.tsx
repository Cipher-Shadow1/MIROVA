import Link from "next/link";
import { FadeText } from "../components/FadeText";

export default function NotFound() {
  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-20 pt-24 pb-24">
      <div className="max-w-2xl text-center flex flex-col items-center gap-8">
        <FadeText
          as="h1"
          className="text-4xl md:text-7xl font-headline leading-[1.1] tracking-tighter text-on-surface"
        >
          404
        </FadeText>
        <div className="flex flex-col gap-2">
          <FadeText
            as="h2"
            delay={0.1}
            className="text-xl md:text-2xl font-headline tracking-tight text-on-surface mb-2"
          >
            Page Not Found
          </FadeText>
          <FadeText
            as="p"
            delay={0.2}
            className="text-base md:text-lg font-body text-secondary max-w-md mx-auto"
          >
            The page you are looking for doesn't exist on this professional website. It might have been moved or deleted.
          </FadeText>
        </div>
        
        <div className="mt-4">
          <Link
            href="/"
            className="inline-block px-12 py-3.5 md:py-4 bg-primary text-on-primary font-label text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.1rem] transition-all hover:bg-primary-dim"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
