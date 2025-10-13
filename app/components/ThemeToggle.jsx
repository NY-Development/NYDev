"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"; // Added for handling hydration

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // State to prevent hydration mismatch errors (common issue with next-themes)
  const [mounted, setMounted] = useState(false); 
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null during the initial render on the client
    return <div className="w-10 h-10 p-2"></div>; 
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Toggle to ${theme} mode`}
      className="cursor-pointer flex items-center justify-center w-10 h-10 p-2 rounded-full 
                 bg-gray-200 dark:bg-gray-800 
                 text-gray-900 dark:text-gray-100 
                 hover:ring-2 hover:ring-indigo-500 transition-all duration-300"
    >
      {/* Increased icon size for better visibility */}
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-indigo-600" />
      )}
    </button>
  );
}