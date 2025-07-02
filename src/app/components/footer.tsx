import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#009AE4] text-white px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <a
            href="tel:8881234567"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
          >
            Call Now - 667-352-9204
          </a>
          <br></br>
          <a
            href="tel:8881234567"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
          >
            Call Now - 667-298-5327
          </a>
        </div>

        <div className="flex justify-center w-full">
          <ul className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-10 font-semibold whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <div className="font-bold mb-1">Follow Us</div>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <Image
          src="/Double T.png"
          alt="Double T Logo"
          width={100}
          height={100}
        />
      </div>

      <hr className="my-4 border-white/30" />

      <div className="text-center text-sm">
        🚀 Powered by <span className="font-semibold">LooseCannon</span> © 2025
      </div>
    </footer>
  );
};

export default Footer;
