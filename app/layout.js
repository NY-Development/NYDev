import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

// Enhanced Metadata for SEO and Social Sharing
export const metadata = {
  title: {
    default: "NYDev | Modern Web & App Development",
    template: "%s | NYDev",
  },
  description: "NY Development builds high-performance, modern web and mobile solutions for startups and established businesses using Next.js, React, and more.",
  keywords: ["NYDev", "NextJS", "React Development", "Web Development", "Mobile App Development", "NYC Tech"],
  authors: [{ name: "NYDev Team" }],
  openGraph: {
    title: "NYDev - Modern Solutions for Your Business",
    description: "We design and build modern, scalable web and mobile applications.",
    url: "https://www.nydev.com", // Replace with your actual domain
    siteName: "NYDev",
    images: [
      {
        url: "/images/og-image.jpg", // Create a professional OG image
        width: 1200,
        height: 630,
        alt: "NYDev Logo and Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NYDev",
    description: "We design and build modern, scalable web and mobile applications.",
    creator: "@nydev_handle", // Your Twitter handle
  },
};

export default function RootLayout({ children }) {
  return (
    // Use font-sans for Inter and scroll-smooth for anchor links
    <html 
        lang="en" 
        suppressHydrationWarning
        className="scroll-smooth font-sans"
    >
      <head>
        {/* Viewport Meta Tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preconnect for Google Fonts - for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Link to a modern, clean font like Inter */}
        <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
            rel="stylesheet" 
        />
        
        {/* Favicon - ensure you create a quality favicon.ico */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      {/* Body Classes:
        - overflow-y-scroll prevents scrollbar jumping by reserving space.
        - flex flex-col min-h-screen ensures footer sticks to the bottom. 
      */}
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 
                       transition-colors duration-500 antialiased min-h-screen 
                       flex flex-col overflow-y-scroll">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* main flex-grow ensures content fills space above the footer */}
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}