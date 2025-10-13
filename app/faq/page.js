// --- FAQPage.jsx ---
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does NYDev provide?",
    answer: "We specialize in end-to-end digital solutions including modern web development (Next.js/React), mobile app development (React Native/Flutter), UI/UX design, and custom, scalable backend software solutions.",
  },
  {
    question: "Do you offer internship or training programs?",
    answer: "Yes! We run selective 12-weeks practical training programs focused on real-world project development, designed to turn aspiring coders into job-ready professionals. Check our Careers page for openings.",
  },
  {
    question: "Can I hire NYDev for a project?",
    answer: "Absolutely. We partner with startups and large enterprises to scope, design, and build complete digital products. Please use our Contact page to schedule an initial consultation.",
  },
  {
    question: "Where is NYDev located?",
    answer: "Our primary team is based in Addis Ababa, Ethiopia, but we operate as a remote-friendly company, collaborating seamlessly with clients and partners globally.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section: Adjusted mb for better vertical rhythm */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-gray-900 dark:text-gray-100">
          <span className="text-indigo-600 dark:text-indigo-400">F.A.Q.</span>
          s
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Everything you need to know about NYDev, our services, and how we work.
        </p>
        
        <div className="space-y-6"> {/* Increased space-y to 6 */}
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-3xl overflow-hidden
                         shadow-xl dark:shadow-black/20 
                         transition-all duration-300
                         ${open === index ? 'border-2 border-indigo-500' : 'border border-gray-200 dark:border-gray-800 hover:border-indigo-400/50'}`}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex justify-between items-center w-full p-6 text-left
                           text-xl font-bold transition-colors duration-300 
                           hover:bg-indigo-50 dark:hover:bg-gray-800 focus:outline-none"
                aria-expanded={open === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-gray-900 dark:text-gray-100 pr-4">{item.question}</span>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 transition-transform ${
                    open === index ? "rotate-180 text-indigo-700 dark:text-indigo-300" : "text-gray-500 dark:text-gray-400"
                  }`}
                />
              </button>
              
              {/* Answer Content - Improved smooth collapse animation */}
              <div 
                  id={`faq-content-${index}`}
                  role="region"
                  className={`grid transition-all duration-500 ease-in-out ${open === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-lg text-gray-700 dark:text-gray-400 leading-relaxed 
                                    border-t border-gray-200 dark:border-gray-800 mx-6"> 
                      {/* Added mx-6 for inset border look */}
                      {item.answer}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}