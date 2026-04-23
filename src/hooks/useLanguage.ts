"use client";

import { useEffect, useState } from "react";

export function useLanguage() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { lang, toggleLang, mounted };
}
