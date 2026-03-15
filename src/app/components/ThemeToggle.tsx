"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="px-4 py-2 rounded bg-zinc-200 text-black">
        ...
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white"
    >
      {isDark ? "Modo claro" : "Modo oscuro"}
    </button>
  );
}
