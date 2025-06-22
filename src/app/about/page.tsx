import Image from "next/image";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
  <div
    className="relative h-[200px] md:h-[280px] bg-cover bg-center flex items-center justify-end px-8 md:px-16"
    style={{ backgroundImage: "url('/About.png')" }}
  >
    <div className="absolute inset-0 bg-[#03B2C5] opacity-70 z-0"></div>

    <h1 className="text-white text-2xl md:text-4xl font-bold z-10 mr-0 md:mr-16 text-right w-full">
      About Us
    </h1>
</div>


      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/About 1.png" 
              alt="Double T Team"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4" style={{ fontSize: 20 }}>
            <p>
              We are a professional cleaning service dedicated to making your home or office spotless.
              Our team is highly trained, friendly, and reliable. With a focus on quality and customer satisfaction,
              we strive to exceed your expectations in every job we do.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
          Our aim is to deliver top-quality cleaning solutions that create cleaner, healthier, and more
          comfortable spaces for our clients. We are committed to excellence, professionalism, and attention
          to detail in every task we undertake.
              </li>
              <li>
          Our purpose is to simplify our clients&apos; lives by taking the burden of cleaning off their shoulders.
          Whether it's a home, office, or commercial space, we believe a clean environment contributes to well-being, productivity, and peace of mind.
          
              </li>
            </ul>
          </div>
        </div>

      

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4" style={{ fontSize: 20 }}>
              <p>
          At Double T Cleaning Service Company, we believe a cleaner space leads to a clearer mind. Founded with a passion
          for cleanliness, reliability, and customer satisfaction, Double T has become a trusted name in professional
          cleaning services across residential, commercial, and industrial sectors.
        </p>
            <p>
              With a team of trained professionals, eco-friendly cleaning solutions, and a commitment to excellence,
              we deliver tailored services that meet the unique needs of every client. Whether it's a one-time deep
              clean, regular maintenance, or specialized disinfection, we approach every job with precision and care.
            </p>
            <p>
              Our name, Double T, stands for <strong>Trust & Thoroughness</strong> — the two pillars that define our
              service. We are fully insured, quality-driven, and always ready to go the extra mile to ensure your satisfaction.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/About 2.png" 
              alt="Double T Vacuum"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
