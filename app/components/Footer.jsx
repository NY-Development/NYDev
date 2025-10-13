import Link from "next/link";
import { Github, Youtube, Instagram, Mail, ChevronRight } from "lucide-react";

// Define footer navigation links
const quickLinks = [
  { name: "Updates", href: "/updates" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Feedback", href: "/feedback" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Careers", href: "/careers" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t dark:border-gray-800 pt-16">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
          
          {/* Column 1: Logo & Mission (Takes 2 columns on mobile/tablet) */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <Link href="/" className="text-3xl font-extrabold tracking-tight hover:text-white text-indigo-600 dark:text-indigo-400">
              NY<span className="hover:text-indigo-600 text-gray-900 dark:text-gray-100">Dev</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
              Building high-performance, impactful digital solutions with Next.js and modern stacks. Your partner in innovation.
            </p>

            {/* Social Links - Increased size and cleaner hover effect */}
            <div className="flex items-center gap-4 pt-2">
              <SocialIcon Icon={Github} href="https://github.com/NY-Development" label="GitHub" colorClass="hover:text-gray-700 dark:hover:text-gray-300" />
              <SocialIcon Icon={Youtube} href="https://www.youtube.com/@NYDev-t6p" label="YouTube" colorClass="hover:text-red-600 dark:hover:text-red-400" />
              <SocialIcon Icon={Instagram} href="https://www.instagram.com/nydevofficial" label="Instagram" colorClass="hover:text-pink-500 dark:hover:text-pink-400" />
              <SocialIcon Icon={Mail} href="mailto:yamlaknegash96@gmail.com" label="Email" colorClass="hover:text-indigo-600 dark:hover:text-indigo-400" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <FooterSection title="Quick Links">
            {quickLinks.map((link) => <FooterLink key={link.name} {...link} />)}
            <FooterLink name="Contact" href="/contact" />
          </FooterSection>

          {/* Column 3: Legal & Info */}
          <FooterSection title="Information">
            {legalLinks.map((link) => <FooterLink key={link.name} {...link} />)}
            <FooterLink name="FAQs" href="/faq" />
          </FooterSection>
          
          {/* Column 4: Contact/Location (Example) */}
          <FooterSection title="Headquarters">
            <address className="text-sm not-italic space-y-1 text-gray-600 dark:text-gray-400">
              <p>Arada Subcity, King James Street</p>
              <p>Addis Ababa, Ethiopia</p>
              <p className="pt-2">+251973626204</p>
            </address>
          </FooterSection>

        </div>
        
        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-800"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-500 py-6">
          &copy; {currentYear} NY Development. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// --- Utility Components for Cleaner Code ---

const SocialIcon = ({ Icon, href, label, colorClass }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`p-2 rounded-full text-gray-500 dark:text-gray-400 ${colorClass} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
    >
        <Icon className="w-6 h-6" />
    </a>
);

const FooterSection = ({ title, children }) => (
    <div className="space-y-4 col-span-1">
        <h3 className="text-md font-semibold text-gray-900 dark:text-gray-100 tracking-wider">
            {title}
        </h3>
        <ul className="space-y-2">
            {children}
        </ul>
    </div>
);

const FooterLink = ({ name, href }) => (
    <li>
        <Link 
            href={href} 
            className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
            <ChevronRight className="w-3 h-3 mr-1 flex-shrink-0" />
            {name}
        </Link>
    </li>
);