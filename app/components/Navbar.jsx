"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Define the navigation items once for clean mapping
const navItems = [
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses", isNew: true }, // Added isNew flag to Courses
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Feedback", href: "/feedback" },
  { name: "Contact", href: "/contact", isCta: true },
];

// Component for the reusable badge
const NewBadge = () => (
  <span className="ml-2 px-2 py-0.5 text-xs font-bold text-white bg-red-600 rounded-full dark:bg-red-500">
    New
  </span>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full 
                  bg-white/95 dark:bg-gray-950/95 
                  backdrop-blur-sm 
                  shadow-md dark:shadow-xl dark:shadow-gray-900/50 
                  transition-colors duration-300 -mb-20 h-auto"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight 
                      text-indigo-600 dark:text-indigo-400 
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
          aria-label="NYDev Home"
        >
          NY<span className="text-gray-900 dark:text-gray-100">Dev</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 items-center text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                font-medium flex items-center 
                hover:text-indigo-600 dark:hover:text-indigo-400 
                transition-colors duration-200 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1
                ${item.isCta
                  ? 'text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800'
                  : 'text-gray-700 dark:text-gray-300'}
              `}
            >
              {item.name}
              {/* Render badge if isNew is true */}
              {item.isNew && <NewBadge />}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer p-2 rounded-md text-gray-700 dark:text-gray-200 
                        hover:bg-gray-100 dark:hover:bg-gray-800 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out 
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col border-t border-gray-200 dark:border-gray-800 py-4 px-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`
                block text-lg font-medium py-2 px-2 rounded-md 
                hover:bg-indigo-50 dark:hover:bg-gray-800 
                transition-colors duration-200 flex items-center justify-between
                ${item.isCta
                  ? 'text-indigo-600 dark:text-indigo-400 border border-indigo-500'
                  : 'text-gray-700 dark:text-gray-300'}
              `}
            >
              <span className="flex items-center">
                {item.name}
                {/* Render badge in mobile nav */}
                {item.isNew && <NewBadge />}
              </span>

              {/* Keep CTA styling for mobile separate if needed */}
              {item.isCta && <span className="text-sm font-semibold">→</span>}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}