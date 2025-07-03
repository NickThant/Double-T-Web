
"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs: React.FC = () => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantityType, setQuantityType] = useState<'home' | 'office' | null>(null);
  const [quantities, setQuantities] = useState({
    masterBedroom: 0,
    singleBedroom: 0,
    bathroomFull: 0,
    bathroomHalf: 0,
    livingroom: 0,
    kitchen: 0,
    basement: 0,
    workspaces: 0,
    privateOffices: 0,
    conferenceRooms: 0,
    reception: 0,
    breakRoom: 0,
    restrooms: 0,
    hallways: 0,
    copyRooms: 0,
  });
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (["Residential Cleaning", "Move In / Move Out Cleaning", "Airbnb Cleaning"].includes(value)) {
      setShowQuantity(true);
      setQuantityType('home');
    } else if (value === "Office Cleaning") {
      setShowQuantity(true);
      setQuantityType('office');
    } else {
      setShowQuantity(false);
      setQuantityType(null);
    }
  };
  const handleQuantityChange = (key: keyof typeof quantities, delta: number) => {
    setQuantities(prev => {
      const next = { ...prev };
      next[key] = Math.max(0, Math.min(20, next[key] + delta));
      return next;
    });
  };
  const handleQuantityInput = (key: keyof typeof quantities, value: string) => {
    let num = parseInt(value, 10);
    if (isNaN(num)) num = 0;
    num = Math.max(0, Math.min(20, num));
    setQuantities(prev => ({ ...prev, [key]: num }));
  };
  return (
    <div className="text-gray-800">
      <div
        className="relative h-[200px] md:h-[280px] bg-cover bg-center flex items-center justify-end px-8 md:px-16 mt-[-16px]"
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

      <div className="bg-white text-gray-800 font-poppins mt-8">
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="bg-[#03a9f4] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          
        <div className="bg-[#1F5673] text-white p-6 relative h-full">
      <div className="space-y-6 mt-2">
        <h3 className="text-xl font-semibold">Contact Information</h3>

        <div className="flex items-center space-x-3">
      <FiPhone />
      <span>667-352-9204</span>
        </div>
         <div className="flex items-center space-x-3">
          <FiPhone />
        <span>667-298-5327</span>
        </div>

        <div className="flex items-center space-x-3">
      <FiMail />
      <span>doubletcleaninghouse@gmail.com</span>
        </div>

        <div className="flex items-start space-x-3">
      <FiMapPin />
      <span>
        4214 Goodson Court, Belcamp<br />
        Maryland, 21017, USA
      </span>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-20 h-20 bg-black/80 rounded-tl-full" />
    </div>

          <form 
            action="https://formspree.io/f/mkgbpllz" 
            method="POST"
            className="p-8 space-y-6 bg-[#03a9f4]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                
                <label className="block text-white text-sm mb-1">First Name <span className="text-red-500">*</span></label>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="First Name"
                />
              </div>
              <div>
               
                <label className="block text-white text-sm mb-1">Last Name <span className="text-red-500">*</span></label>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="Last Name"
                />
              </div>
              <div>
               
                <label className="block text-white text-sm mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                
                <label className="block text-white text-sm mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-sm py-1 outline-none"
                  placeholder="+1 012 3456 789"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm mb-1">
                What services are you looking for? <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                required
                className="w-full bg-transparent border-b border-white text-white text-sm py-1 outline-none"
                defaultValue=""
                onChange={handleServiceChange}
              >
                <option value="" disabled hidden>
                  -- Select a service --
                </option>
                <option className="text-black">Residential Cleaning</option>
                <option className="text-black">Move In / Move Out Cleaning</option>
                <option className="text-black">Airbnb Cleaning</option>
                <option className="text-black">Office Cleaning</option>
              </select>
            </div>
            {showQuantity && quantityType === 'home' && (
              <div id="quantity-options">
                <label className="block text-white text-sm mb-1 mt-4">Quantity Options <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Master Bedroom</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('masterBedroom', -1)} disabled={quantities.masterBedroom === 0}>-</button>
                      <input type="number" name="masterBedroom" value={quantities.masterBedroom} min={0} max={20} onChange={e => handleQuantityInput('masterBedroom', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('masterBedroom', 1)} disabled={quantities.masterBedroom === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Single Bedroom</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('singleBedroom', -1)} disabled={quantities.singleBedroom === 0}>-</button>
                      <input type="number" name="singleBedroom" value={quantities.singleBedroom} min={0} max={20} onChange={e => handleQuantityInput('singleBedroom', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('singleBedroom', 1)} disabled={quantities.singleBedroom === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Bathroom (Full)</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('bathroomFull', -1)} disabled={quantities.bathroomFull === 0}>-</button>
                      <input type="number" name="bathroomFull" value={quantities.bathroomFull} min={0} max={20} onChange={e => handleQuantityInput('bathroomFull', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('bathroomFull', 1)} disabled={quantities.bathroomFull === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Bathroom (Half)</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('bathroomHalf', -1)} disabled={quantities.bathroomHalf === 0}>-</button>
                      <input type="number" name="bathroomHalf" value={quantities.bathroomHalf} min={0} max={20} onChange={e => handleQuantityInput('bathroomHalf', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('bathroomHalf', 1)} disabled={quantities.bathroomHalf === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Livingroom</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('livingroom', -1)} disabled={quantities.livingroom === 0}>-</button>
                      <input type="number" name="livingroom" value={quantities.livingroom} min={0} max={20} onChange={e => handleQuantityInput('livingroom', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('livingroom', 1)} disabled={quantities.livingroom === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Kitchen</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('kitchen', -1)} disabled={quantities.kitchen === 0}>-</button>
                      <input type="number" name="kitchen" value={quantities.kitchen} min={0} max={20} onChange={e => handleQuantityInput('kitchen', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('kitchen', 1)} disabled={quantities.kitchen === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Basement</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('basement', -1)} disabled={quantities.basement === 0}>-</button>
                      <input type="number" name="basement" value={quantities.basement} min={0} max={20} onChange={e => handleQuantityInput('basement', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('basement', 1)} disabled={quantities.basement === 20}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showQuantity && quantityType === 'office' && (
              <div id="quantity-options-office">
                <label className="block text-white text-sm mb-1 mt-4">Quantity Options <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Workspaces / Desk Area</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('workspaces', -1)} disabled={quantities.workspaces === 0}>-</button>
                      <input type="number" name="workspaces" value={quantities.workspaces} min={0} max={20} onChange={e => handleQuantityInput('workspaces', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('workspaces', 1)} disabled={quantities.workspaces === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Private Offices</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('privateOffices', -1)} disabled={quantities.privateOffices === 0}>-</button>
                      <input type="number" name="privateOffices" value={quantities.privateOffices} min={0} max={20} onChange={e => handleQuantityInput('privateOffices', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('privateOffices', 1)} disabled={quantities.privateOffices === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Conference Rooms / Meeting Rooms</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('conferenceRooms', -1)} disabled={quantities.conferenceRooms === 0}>-</button>
                      <input type="number" name="conferenceRooms" value={quantities.conferenceRooms} min={0} max={20} onChange={e => handleQuantityInput('conferenceRooms', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('conferenceRooms', 1)} disabled={quantities.conferenceRooms === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Reception / Lobby Area</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('reception', -1)} disabled={quantities.reception === 0}>-</button>
                      <input type="number" name="reception" value={quantities.reception} min={0} max={20} onChange={e => handleQuantityInput('reception', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('reception', 1)} disabled={quantities.reception === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Break Room / Kitchenette</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('breakRoom', -1)} disabled={quantities.breakRoom === 0}>-</button>
                      <input type="number" name="breakRoom" value={quantities.breakRoom} min={0} max={20} onChange={e => handleQuantityInput('breakRoom', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('breakRoom', 1)} disabled={quantities.breakRoom === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Restrooms</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('restrooms', -1)} disabled={quantities.restrooms === 0}>-</button>
                      <input type="number" name="restrooms" value={quantities.restrooms} min={0} max={20} onChange={e => handleQuantityInput('restrooms', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('restrooms', 1)} disabled={quantities.restrooms === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Hallways / Common Spaces</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('hallways', -1)} disabled={quantities.hallways === 0}>-</button>
                      <input type="number" name="hallways" value={quantities.hallways} min={0} max={20} onChange={e => handleQuantityInput('hallways', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('hallways', 1)} disabled={quantities.hallways === 20}>+</button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-white text-xs mb-1">Copy / Print Rooms</span>
                    <div className="flex items-center gap-2">
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('copyRooms', -1)} disabled={quantities.copyRooms === 0}>-</button>
                      <input type="number" name="copyRooms" value={quantities.copyRooms} min={0} max={20} onChange={e => handleQuantityInput('copyRooms', e.target.value)} className="w-14 text-center rounded text-black" />
                      <button type="button" className="bg-white text-[#03a9f4] rounded px-2" onClick={() => handleQuantityChange('copyRooms', 1)} disabled={quantities.copyRooms === 20}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
<div>
              <label className="block text-white text-sm mb-1">
                Service Options: <span className="text-red-500">*</span>
              </label>
              <select
                name="serviceOptions"
                required
                className="w-full bg-transparent border-b border-white text-white text-sm py-1 outline-none"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  -- Select a Service Option --
                </option>
                <option className="text-black">Standard Cleaning</option>
                <option className="text-black">Deep Cleaning</option>
              </select>
            </div>
            <div>
              
              <label className="block text-white text-sm mb-1">Message <span className="text-red-500">*</span></label>
              <textarea
                name="message"
                rows={3}
                required
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