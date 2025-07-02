"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqItems = [
  {
    question: "1. What types of cleaning services do you offer?",
    answer:
      "We offer residential, commercial, deep cleaning, move-in/move-out cleaning, and customized cleaning plans based on your needs.",
  },
  {
    question: "2. Are your cleaners trained and insured?",
    answer:
      "Yes, all of our cleaners are fully trained professionals and covered by insurance for your peace of mind.",
  },
  {
    question: "3. Do I need to provide cleaning supplies?",
    answer:
      "No, our team comes fully equipped with all the necessary cleaning supplies and tools.",
  },
  {
    question: "4. How do I schedule a cleaning?",
    answer:
      "You can schedule a cleaning through our website, mobile app, or by calling our customer service.",
  },
  {
    question: "5. What if I need to cancel or reschedule?",
    answer:
      "Simply contact us at least 24 hours in advance to cancel or reschedule at no extra charge.",
  },
  {
    question: "6. Do I need to be home during the cleaning?",
    answer:
      "It's up to you. You can be home or provide us access instructions. We ensure secure and respectful service.",
  },
  {
    question: "7. How long does a typical cleaning take?",
    answer:
      "A typical cleaning takes between 1.5 to 3 hours depending on the size and condition of your home.",
  },
  {
    question: "8. Is satisfaction guaranteed?",
    answer:
      "Absolutely. If you're not satisfied, we offer free re-cleaning within 24 hours.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-800 bg-white">
      <div
        className="relative h-[200px] md:h-[280px] bg-cover bg-center flex items-center justify-end px-8 md:px-16"
        style={{ backgroundImage: "url('/FAQ.png')" }}
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold z-10">
          Frequently Asked Questions
        </h1>
        <div className="absolute inset-0 bg-[#03b2c5] opacity-60 z-0" />
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="rounded-md overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full bg-[#03a9f4] text-white font-semibold text-left px-6 py-4 flex justify-between items-center"
              >
                {item.question}
                {openIndex === i ? (
                  <FiChevronUp className="text-xl" />
                ) : (
                  <FiChevronDown className="text-xl" />
                )}
              </button>

              {openIndex === i && (
                <div className="bg-[#29b6f6] text-white px-6 py-4 text-sm transition-all duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
