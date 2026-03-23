"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f1] w-full pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 px-12 md:px-24 w-full mb-24">
        {/* Brand */}
        <div>
          <Link
            className="text-lg font-headline tracking-tighter text-[#1A1A1A] block mb-6"
            href="/"
          >
            MIROVA
          </Link>
          <p className="text-sm text-[#5f5e5e] leading-relaxed max-w-xs">
            Curated furniture and objects for the modern atelier. Crafting
            silence into form since 2018.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <span className="font-label text-[0.625rem] uppercase tracking-widest text-on-surface-variant mb-2">
            Explore
          </span>
          <Link
            className="text-[#5f5e5e] hover:underline underline-offset-8 transition-all w-fit"
            href="https://www.instagram.com/abdou.rah9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>
          <Link
            className="text-[#5f5e5e] hover:underline underline-offset-8 transition-all w-fit"
            href="https://rahmoun-rayan-abderrahim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinterest
          </Link>
          <Link
            className="text-[#5f5e5e] hover:underline underline-offset-8 transition-all w-fit"
            href="https://rahmoun-rayan-abderrahim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Journal
          </Link>
          <Link
            className="text-[#5f5e5e] hover:underline underline-offset-8 transition-all w-fit"
            href="#"
          >
            Terms
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <span className="font-label text-[0.625rem] uppercase tracking-widest text-on-surface-variant mb-2">
            Join the Atelier
          </span>
          <div className="relative w-full border-b border-outline-variant/30 pb-2">
            <input
              className="bg-transparent border-none outline-none  w-full font-label text-[0.6875rem] tracking-widest focus:ring-0 placeholder:text-outline-variant/60 uppercase"
              placeholder="YOUR EMAIL"
              type="email"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-on-surface-variant">
                arrow_forward
              </span>
            </button>
          </div>
          <p className="text-[0.625rem] text-on-surface-variant tracking-wider uppercase">
            Receive rare updates and private collection access.
          </p>
        </div>
      </div>

      <div className="px-12 md:px-24 flex flex-col items-center pt-12 border-t border-outline-variant/10 gap-4">
        <a
          href="https://rahmoun-rayan-abderrahim.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-label text-[0.5625rem] tracking-[0.15rem] text-[#8a8988] uppercase hover:text-[#5f5e5e] transition-colors duration-300"
        >
          Designed & Developed by Rayan Abderrahim Rahmoun
        </a>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <p className="font-label text-[0.625rem] tracking-widest text-[#5f5e5e] uppercase">
          © 2024 MIROVA ATELIER. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <span
            className="font-label text-[0.625rem] tracking-widest text-[#5f5e5e] uppercase cursor-pointer hover:text-on-surface"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top
          </span>
        </div>
        </div>
      </div>
    </footer>
  );
}
