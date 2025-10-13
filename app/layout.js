import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth font-sans ${inter.className}`}>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 
                       transition-colors duration-500 antialiased min-h-screen 
                       flex flex-col overflow-y-auto no-scrollbar">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
