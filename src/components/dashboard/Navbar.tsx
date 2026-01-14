"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/assets/logo/pickbleplay-logo.png";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["Home", "Find Courts", "About", "Contact", "Download App"];

  // Split nav items for left and right of logo
  const leftNav = navItems.slice(0, 2);  // First 2 items
  const rightNav = navItems.slice(2);    // Rest

  return (
    <>
      {/* Sticky Navbar */}
      <header className="bg-white sticky top-0 z-50 text-black border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Left Nav Items */}
          <ul className="flex items-center gap-10">
            {leftNav.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Center Logo */}
          <div className="flex-shrink-0 absolute left-170 top-3">
            <Link href="/">
              <Image
                src={Logo}
                alt="Pickbleplay Logo"
                className="object-contain w-35 h-auto"
              />
            </Link>
          </div>

          {/* Right Nav Items */}
          <ul className="flex items-center gap-10">
            {rightNav.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden absolute right-6 text-gray-800">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="focus:outline-none text-2xl"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 text-white font-medium">
            {navItems.map((item, idx) => (
              <li key={idx} className="w-full">
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")}`}
                  className="block w-full py-2 hover:text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Render children below header */}
      {children && <main>{children}</main>}
    </>
  );
}
