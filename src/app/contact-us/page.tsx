import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs: React.FC = () => {
  return (
    <div className="text-gray-800">
      <div
        className="relative h-[200px] md:h-[280px] bg-cover bg-center flex items-center justify-end px-8 md:px-16"
        style={{ backgroundImage: "url('/Contact Us.png')" }} 
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold z-10">Contact Us</h1>
        <div className="absolute inset-0 bg-[#03b2c5] opacity-60 z-0" />
      </div>

      <div className="py-8 px-4 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-[#007cc2]">
          Any question or remarks? Just write us a message!
        </h2>
      </div>

      <div className="bg-white text-gray-800 font-poppins">
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-[#03a9f4] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
        <div className="bg-[#1F5673] text-white p-6 relative h-full">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Contact Information</h3>

        <div className="flex items-center space-x-3">
      <FiPhone />
      <span>+1012 3456 789</span>
        </div>

        <div className="flex items-center space-x-3">
      <FiMail />
      <span>demo@gmail.com</span>
        </div>

        <div className="flex items-start space-x-3">
      <FiMapPin />
      <span>
        132 Dartmouth Street Boston,<br />
        Massachusetts 02156 United States
      </span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-20 h-20 bg-black/80 rounded-tl-full" />
    </div>

          <form className="p-8 space-y-6 bg-[#03a9f4]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white text-sm mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="+1 012 3456 789"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm mb-1">
                What services are you looking for?
              </label>
              <select
                className="w-full bg-transparent border-b border-white text-white text-sm py-1 outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  -- Select a service --
                </option>
                <option className="text-black">House Cleaning</option>
                <option className="text-black">Move In / Move Out</option>
                <option className="text-black">One-Time Deep Clean</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Message</label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none resize-none"
                placeholder="Write your message.."
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-white text-[#03a9f4] font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;