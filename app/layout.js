import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import AuthSessionProvider from "./components/AuthSessionProvider";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
import PatternBackground from "./components/PatternBackground";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth font-sans ${inter.className}`}
    >
      <body
        className="
          bg-white dark:bg-gray-950
          text-gray-900 dark:text-gray-100
          transition-colors duration-500 antialiased
          min-h-screen flex flex-col
          overflow-x-hidden no-scrollbar
        "
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthSessionProvider>

            {/* 🌈 Global Pattern Background */}
            <PatternBackground>

              <ToastContainer
                position="top-right"
                reverseOrder={false}
                autoClose={3000}
              />

              <Navbar />

              <main className="flex-grow pt-16 relative z-10">
                {children}
              </main>

              <Analytics />
              <Footer />

            </PatternBackground>

          </AuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
