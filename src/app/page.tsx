import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="text-gray-800">
      <div
        className="bg-cover bg-center text-white py-16 px-4 text-center flex flex-col justify-end"
        style={{
          backgroundImage: "url('/Home.jpg')",
          width: "100%",
          height: "812px",
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: "400px",
          display: "flex"
        }}
      >
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Enjoy more free time while we handle the mess.
          </h1>
          <p className="text-base md:text-lg mb-6">
        Contact us today for a free quote or to schedule your first clean!
          </p>
          <Link href="/contact-us">
        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded">
          Contact Us
        </button>
          </Link>
        </div>
      </div>
      {/* Cleaning Services for Residential Properties */}
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
            <p className="mt-4 text-blue-500 font-semibold">
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

    </div>
  );
};

export default Home;
