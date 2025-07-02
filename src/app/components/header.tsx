"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#009AE4] text-white shadow-md px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/Double T.png"
          alt="Double T Logo"
          width={100}
          height={100}
          className="h-16 w-auto"
        />
        <ul className="hidden md:flex space-x-6 ml-6">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:underline${
                  pathname === link.href
                    ? " text-yellow-300 font-bold underline"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/contact-us"
          className={`hover:underline${
            pathname === "/contact-us"
              ? " text-yellow-300 font-bold underline"
              : ""
          }`}
        >
          Contact Us
        </Link>
        <a
          href="tel:8881234567"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Call Now - 667-352-9204
        </a>
        {/* <a
          href="tel:8881234567"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Call Now - 667-298-5327
        </a> */}
      </div>

      <button
        className="md:hidden flex items-center px-2 py-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#009AE4] z-50 flex flex-col items-center md:hidden shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 w-full items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  href={link.href}
                  className={`block py-2 hover:underline w-full${
                    pathname === link.href
                      ? " text-yellow-300 font-bold underline"
                      : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="w-full text-center">
              <a
                href="tel:8881234567"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow inline-block mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Call Now - (888) 1234567
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
