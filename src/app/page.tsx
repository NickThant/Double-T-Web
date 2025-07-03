"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Home: React.FC = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setShowUp(scrollY + windowHeight >= docHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-gray-800">

     
      <div
        className="relative bg-cover bg-center text-white pt-0 pb-12 px-4 text-center flex flex-col justify-end mt-[-16px]"
        style={{
          backgroundImage: "url('/Home.png')",
          width: "100%",
          height: "850px",
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: "400px",
          position: "relative",
          top: "-16px"
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] w-40 md:w-60">
          <Image
            src="/Double T Home.png"
            alt="Double T Logo"
            width={240}
            height={240}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="z-10 mt-64">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Enjoy more free time while we handle the mess.
          </h1>
          <p className="text-base md:text-lg mb-6">
            Contact us today for a free quote or to schedule your first clean!
          </p>
          <Link href="/contact-us">
            <button className="bg-[#28A745] hover:bg-[#009AE4] text-white font-bold py-2 px-6 rounded shadow-lg border-2 border-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <section className="py-12 px-4 max-w-6xl mx-auto bg-white">
          <h2 className="text-xl md:text-2xl text-center font-bold text-[#1c84c3] mb-10">
            Cleaning Services for Residential Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div className="flex justify-center">
              <Image
                src="/Home 2.jpeg"
                alt="Modern Bathroom"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>
                Looking for a reliable and professional cleaning service you can trust?
                At Double T House Cleaning Service, we specialize in delivering top-quality
                cleaning solutions for homes and businesses. Whether you need a one-time deep
                clean or regular maintenance, our team is here to make your space shine.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p style={{ fontSize: "20px" }}>
                Whether you&apos;re a busy homeowner needing a sparkling clean kitchen and bathroom,
                or a business looking to maintain a spotless, professional environment,
                we&apos;ve got you covered. Our trained and vetted cleaning professionals use the latest
                tools and eco-friendly products to leave your space fresh, sanitized, and welcoming.
              </p>
              <p className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow">
                <Link href="/contact-us">Contact Us</Link> for more details!!!
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/Home 3.jpg"
                alt="Clean Kitchen"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white py-12 px-4">
        <h2 className="text-xl md:text-2xl text-center font-bold text-[#1c84c3] mb-10">
          Reviews from our customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array(3).fill(0).map((_, i) => (
            <div
              key={i}
              className="bg-[#00bcd4] p-6 rounded-xl shadow-lg text-white flex flex-col justify-between"
            >
              <div className="flex mb-4 text-yellow-400 text-lg">
                {Array(5).fill(0).map((_, star) => (
                  <FaStar key={star} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-4">
                There is no better feeling than walking into a super clean home, and knowing that someone else
                took time to do it. Totally worth the expense, as this gives me time for other things that are important!
              </p>

              <div className="font-bold text-sm text-white">Mickens Jolly</div>
            </div>
          ))}
        </div>
      </section>

      {!showUp && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-[#009AE4] text-white rounded-full p-3 shadow-lg animate-bounce md:hidden"
          style={{ opacity: 0.85 }}
          onClick={() => {
            window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
      {showUp && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-[#009AE4] text-white rounded-full p-3 shadow-lg animate-bounce md:hidden"
          style={{ opacity: 0.85 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Scroll up"
        >
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Home;
