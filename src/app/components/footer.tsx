import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "FAQs", href: "/faqs" },
{ label: "Contact Us", href: "/contact-us" }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#009AE4] text-white px-6 py-8">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        
       
        <div>
          <div className="font-bold text-lg">Call Now</div>
          <div className="text-xl font-semibold mt-1">0877823187</div>
        </div>

        
        <div className="flex justify-center w-full">
          <ul className="flex flex-row w-full justify-center gap-[1.5in] font-semibold whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
       

        
        <div className="flex flex-col items-center md:items-end">
          <div className="font-bold mb-1">Follow Us</div>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
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
