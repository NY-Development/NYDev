"use client";

import { Code, Smartphone, Globe, Palette, Server, Megaphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Use Link for the button for semantic navigation

// -----------------------------------------------------------------------------
// 🔹 Service Data
// -----------------------------------------------------------------------------
const services = [
  {
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable web apps using modern technologies like React, Next.js, Node.js, and Django — tailored to your business goals.",
    icon: <Globe className="w-10 h-10 text-white dark:text-gray-100" />,
    image: "/services/web.jpg",
    link: "/services/web",
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop mobile apps that deliver seamless experiences across iOS and Android using React Native and Flutter.",
    icon: <Smartphone className="w-10 h-10 text-white dark:text-gray-100" />,
    image: "/services/mobile.jpg",
    link: "/services/mobile",
  },
  {
    title: "Branding & UI/UX Design",
    description:
      "Our creative team helps you craft unique brand identities, logos, and user interfaces that captivate and engage your audience.",
    icon: <Palette className="w-10 h-10 text-white dark:text-gray-100" />,
    image: "/services/design.jpg",
    link: "/services/design",
  },
  {
    title: "Backend & API Development",
    description:
      "We provide reliable backend solutions with Express, Django, or Node.js — ensuring secure, high-performance APIs for your digital products.",
    icon: <Server className="w-10 h-10 text-white dark:text-gray-100" />,
    image: "/services/api.jpg",
    link: "/services/backend",
  },
  {
    title: "Digital Marketing",
    description:
      "We help your brand grow online through SEO, social media management, and performance marketing strategies that drive measurable results.",
    icon: <Megaphone className="w-10 h-10 text-white dark:text-gray-100" />,
    image: "/services/marketing.jpg",
    link: "/services/marketing",
  },
  {
    title: "Custom Software Solutions",
    description:
      "We create bespoke software solutions for startups and enterprises that automate processes, increase efficiency, and scale easily.",
    icon: <Code className="w-10 h-10 text-white dark:text-gray-100" />,
    image: "/services/custom.jpg",
    link: "/services/custom",
  },
];

// -----------------------------------------------------------------------------
// 🔹 Main Component: ServicesPage
// -----------------------------------------------------------------------------
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-indigo-600 dark:text-indigo-400">Core Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mt-4">
            At <strong className="font-bold">NYDev</strong>, we partner with you to deliver innovative digital solutions — from stunning web apps to scalable backend systems — empowering you to thrive online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl 
                         shadow-xl dark:shadow-2xl dark:shadow-black/50 
                         transition-all duration-500 overflow-hidden 
                         border border-transparent hover:border-indigo-500/50"
            >
              
              {/* Image & Icon Overlay */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Icon Circle & Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-700/70">
                  <div className="p-4 rounded-full bg-indigo-600/90 group-hover:bg-white/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-6 text-base flex-grow">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <Link 
                  href={service.link}
                  className="self-start inline-flex items-center justify-center 
                             bg-indigo-600 text-white px-6 py-3 rounded-xl 
                             text-md font-semibold hover:bg-indigo-700 
                             focus:ring-4 focus:ring-indigo-300 transition-all duration-200 shadow-md"
                >
                  Explore Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}