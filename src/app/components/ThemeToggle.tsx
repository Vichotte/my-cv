"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 border
        ${isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"}
      `}
      aria-label="Cambiar tema"
    >
      {isDark ? <span className="text-lg">☀️</span> : <span className="text-lg">🌙</span>}
    </button>
  );
}
