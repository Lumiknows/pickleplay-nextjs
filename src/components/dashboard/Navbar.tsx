"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Find Courts", "Join Session", "About", "Contact", "Download App"];

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
          ${scrolled ? "top-0 w-full rounded-none" : "top-6 w-full rounded-full"}
          text-white
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center relative">

          {/* Logo (left) */}
          <div className="text-white font-bold text-xl z-10">
            PicklePlay
          </div>

          {/* Desktop Menu (perfectly centered) */}
          <ul className="hidden md:flex items-center gap-10 w-full absolute left-1/2 -translate-x-1/4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className={`
                    font-medium transition-colors px-4 py-2 rounded-full
                    ${
                      item === "Download App"
                        ? "bg-white text-black shadow-md hover:bg-white/90"
                        : "hover:text-blue-400"
                    }
                  `}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger (right) */}
          <div className="md:hidden ml-auto text-white">
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
                  className={`
                    block w-full py-2 px-4 rounded-full transition-colors
                    ${
                      item === "Download App"
                        ? "bg-green-500 hover:bg-green-600 text-white text-center shadow-md"
                        : "hover:text-blue-400"
                    }
                  `}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
      {/* Page Content */}
      {children && <main>{children}</main>}
    </>
  );
}
