"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "@/assets/logo/pickbleplay-logo.png";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Find Courts", "About", "Contact", "Download App"];
  const leftNav = navItems.slice(0, 2);
  const rightNav = navItems.slice(2);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating Glass Navbar */}
      <header
        className={`
          fixed z-50 left-1/2 -translate-x-1/2
          transition-all duration-300 ease-in-out
          ${scrolled ? "top-0 w-full rounded-none" : "top-6 w-[85%] rounded-full"}
          bg-black/70 backdrop-blur-md text-white shadow-lg
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          {/* Left Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {leftNav.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className="font-medium hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <Image
                src={Logo}
                alt="Pickbleplay Logo"
                className="object-contain w-28 h-auto rounded-full"
                priority
              />
            </Link>
          </div>

          {/* Right Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {rightNav.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className="font-medium hover:text-blue-400 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden absolute right-6 text-white">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 bg-black/80 backdrop-blur-md text-white">
            {navItems.map((item, idx) => (
              <li key={idx} className="w-full">
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className="block w-full py-2 hover:text-blue-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Spacer so content isn’t hidden under fixed navbar */}
      <div className="h-28" />

      {/* Page Content */}
      {children && <main>{children}</main>}
    </>
  );
}
