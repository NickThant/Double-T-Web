import React from "react";
import Image from "next/image";
import { FaHome, FaTruckMoving } from "react-icons/fa";
import { MdCleaningServices } from "react-icons/md";

const Services: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      
      <div
        className="relative h-[200px] md:h-[280px] bg-cover bg-center flex items-center justify-end px-8 md:px-16 mt-[-16px]"
        style={{ backgroundImage: "url('/services 1.png')" }} 
      >
        <h1 className="text-white text-2xl md:text-4xl font-bold z-10 mr-0 md:mr-16 text-right w-full">
          Cleaning Services We Offer
        </h1>
        <div className="absolute inset-0 bg-[#03B2C5] opacity-70 z-0" />
      </div>

      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#007cc2]">
          <div>
            <FaHome className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">House Cleaning & Sanitizing</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <FaTruckMoving className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">Move In / Move Out Cleaning</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <MdCleaningServices className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-lg">One Time Cleaning Services</h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 pb-12">
        <div className="flex justify-center">
          <Image
            src="/Services 2.png" 
            alt="Double T Team"
            width={500}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-[#007cc2] font-bold text-lg mb-3">
            Experience the Deep Clean Your Home Deserves with Double T House Cleaning Service
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            At Double T, we offer thorough home cleaning and sanitizing services
            to clients across the United States and Canada. You can rely on our
            professional team to keep your home spotless—without the stress of
            doing it yourself.
          </p>

          <h3 className="text-[#007cc2] font-bold mb-2">What Matters Most at Double T House Cleaning Service:</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Our Clients:</strong> You&apos;re our top priority. We provide affordable cleaning
              solutions, delivered by skilled and trusted professionals.
            </li>
            <li>
              <strong>The Environment:</strong> We&apos;re committed to sustainability. That&apos;s why we use
              environmentally responsible and safe cleaning products for every job.
            </li>
          </ul>

          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 text-sm rounded-md text-[#007cc2]">
            <strong>Save Time. Save Money. Take the Stress Off Your Shoulders.</strong><br />
            Call Double T House Cleaning Service today at <strong>(888) 658-0659</strong> or fill
            out our online form to receive a free estimated price!!!
          </div>
        </div>
      </section>

      <section className="bg-white-50 py-8 px-6 text-center text-sm">
        <p className="max-w-4xl mx-auto text-gray-700">
          <span className="text-green-600 font-bold">🍃 Experience the Deep Clean Your Home Deserves With Double T House Cleaning Service</span><br />
          At Double T, we provide thorough home cleaning and sanitizing services to clients across the United States and Canada.
          Whether you need regular upkeep or a one-time deep clean, our experienced team delivers exceptional results with attention to every detail.
          You can rely on us to keep your home spotless—without the stress of doing it yourself.
        </p>
      </section>
    </div>
  );
};

export default Services;
