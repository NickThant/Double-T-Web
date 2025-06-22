import React from 'react';
import Link from 'next/link';
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact-us" },
];
const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#009AE4] text-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src="/Double T.png" 
            alt="Double T Logo"
            className="h-20 w-auto" 
          />
        </div>
        
        <ul className="flex space-x-6 ml-10">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
        <a
          href="tel:8881234567"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow"
        >
          Call Now - (888) 1234567
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
