"use client";
import Link from "next/link";
import { Award, Zap, Users } from "lucide-react";
import HighlightCard from "./components/HighlightCard";
import Image from "next/image";
// -----------------------------------------------------------------------------
// 🔹 Reusable Component: ValueCard
// -----------------------------------------------------------------------------
const ValueCard = ({ Icon, title, desc }) => (
  <div className="hover:bg-indigo-600 hover:text-white p-8 rounded-xl border border-gray-200 dark:border-gray-800 text-center space-y-4 dark:bg-gray-850 hover:shadow-xl transition-all duration-300">
    <div className="flex justify-center">
      <Icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{desc}</p>
  </div>
);

// -----------------------------------------------------------------------------
// 🔹 Data for Dynamic "What's New" Section
// -----------------------------------------------------------------------------
const highlights = [
  {
    title: "Next.js Masterclass",
    desc: "A hands-on course to master Next.js — build production-ready web apps with real-world projects.",
    img: "/nextjs.png",
    link: "/courses/nextjs-masterclass",
    isComingSoon: true,
    isNew: false,
  },
  {
    title: "AI Integration Toolkit",
    desc: "Easily integrate AI-powered features into your apps using our new developer-friendly toolkit.",
    img: "/ai.png",
    link: "/products/ai-toolkit",
    isComingSoon: true,
    isNew: false,
  },
  {
    title: "NYDev LaunchPad",
    desc: "Our new platform helps startups build and deploy their MVPs in weeks, not months.",
    img: "/launch.png",
    link: "/services/launchpad",
    isComingSoon: true,
    isNew: false,
  },
];

// -----------------------------------------------------------------------------
// 🔹 Main Home Page Component
// -----------------------------------------------------------------------------
export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section
        className="relative flex flex-col items-center justify-center pt-24 min-h-[calc(100vh-64px)] text-center px-6 sm:px-10"
        aria-label="NY Development Introduction"
      >
        <div
          className="absolute inset-0 z-0 opacity-10 dark:opacity-20 transition-opacity duration-500"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, var(--tw-color-indigo-500) 0%, transparent 70%)",
          }}
        ></div>

        <div className="z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-gray-50 leading-tight">
            We Build <span className="text-indigo-600 dark:text-indigo-400">Digital</span> Excellence
          </h1>

          <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 font-light">
            Innovative web and mobile solutions to drive your business forward, crafted by the dedicated team at{" "}
            <strong className="font-extrabold">NYDev</strong>.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </Link>

            <Link
              href="/projects"
              className="inline-block px-10 py-4 text-lg border border-gray-300 dark:border-gray-700 rounded-xl text-indigo-600 dark:text-indigo-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. NEW DYNAMIC "WHAT’S NEW" SECTION */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 sm:px-10 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            🚀 What’s New at NYDev
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            Discover our latest releases, tools, and services — all designed to empower developers and
            businesses in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/updates"
            className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg rounded-xl shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            See All Updates →
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT / MISSION SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto py-24 px-6 sm:px-10" aria-labelledby="mission-heading">
        <div className="text-center mb-16">
          <h2
            id="mission-heading"
            className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-4"
          >
            Your Digital Innovation Partner
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
            We specialize in creating modern, scalable web and mobile applications for businesses ready
            to dominate their digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">Our Story & Mission</h3>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              Founded with a passion for clean code and user-centric design, NYDev started with a simple
              goal: to close the gap between business ideas and cutting-edge technology. We believe the
              right digital tool can transform any company, regardless of size or industry.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              Our mission is to empower businesses with efficient, performant, and reliable digital
              solutions built primarily on the Next.js ecosystem, ensuring future-proof scalability.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">Our Vision</h3>
            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
              To be the leading development firm known for blending technical excellence with transparent,
              collaborative partnerships. We aim to set the standard for digital development quality in
              the NYC tech scene and beyond.
            </p>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                width={700}
                height={10}
                src="/team.jpg"
                alt="NYDev Team working collaboratively"
                className="w-full h-auto object-cover max-h-64"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-20 dark:bg-indigo-900 dark:opacity-30 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE VALUES SECTION */}
      {/* ========================================================================= */}
      <section className="bg-gray-50 dark:bg-gray-950 py-24 px-6 sm:px-10 dark:border-gray-800" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="values-heading" className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              Icon={Zap}
              title="Innovation"
              desc="We constantly explore and adopt the latest technologies to deliver cutting-edge products."
            />
            <ValueCard
              Icon={Award}
              title="Excellence"
              desc="We commit to the highest quality standards in every line of code, design, and deployment."
            />
            <ValueCard
              Icon={Users}
              title="Collaboration"
              desc="Success is built on trust and communication. We work as a unified extension of your team."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
