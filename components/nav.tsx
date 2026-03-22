"use client";

import Link from "next/link";
import React from "react";

export default function Nav() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Marquee */}
      <div className="w-full bg-surface-container-low py-3 flex justify-center items-center overflow-hidden">
        <p className="font-label text-[0.625rem] tracking-[0.2rem] text-on-surface-variant uppercase">
          RESERVED FOR YOUR FIRST ORDER ✦ A 10% WELCOME PRIVILEGE
        </p>
      </div>

      {/* TopAppBar */}
      <header className="sticky top-0 z-50 bg-[#faf9f7]/80 backdrop-blur-xl flex justify-between items-center w-full px-12 md:px-20 py-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex-1">
          <Link
            className="text-2xl font-headline tracking-tighter text-on-surface"
            href="/"
          >
            MIROVA
          </Link>
        </div>

        {/* Navigation Links (Center) */}
        <nav className="hidden md:flex gap-12 flex-1 justify-center">
          <a
            className="font-label text-[0.6875rem] uppercase tracking-[0.1rem] text-[#5f5e5e] hover:text-[#1A1A1A] transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleScroll(e, 'about')}
          >
            About
          </a>
          <a
            className="font-label text-[0.6875rem] uppercase tracking-[0.1rem] text-[#5f5e5e] hover:text-[#1A1A1A] transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleScroll(e, 'collections')}
          >
            Collections
          </a>
          <a
            className="font-label text-[0.6875rem] uppercase tracking-[0.1rem] text-[#5f5e5e] hover:text-[#1A1A1A] transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleScroll(e, 'atelier')}
          >
            Atelier
          </a>
          <a
            className="font-label text-[0.6875rem] uppercase tracking-[0.1rem] text-[#5f5e5e] hover:text-[#1A1A1A] transition-colors duration-300 cursor-pointer"
            onClick={(e) => handleScroll(e, 'testimonials')}
          >
            Testimonials
          </a>
        </nav>

        {/* Actions (Right) */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <button className="text-[#5f5e5e] hover:text-[#1A1A1A] transition-colors flex items-center">
            <span className="material-symbols-outlined">phone</span>
          </button>
          <button className="text-[#5f5e5e] hover:text-[#1A1A1A] transition-colors flex items-center">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
        </div>
      </header>
    </>
  );
}
