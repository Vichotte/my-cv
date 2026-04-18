"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  const isSpanish = lang === "es";

  return (
    <button
      onClick={toggleLang}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center
        transition-all duration-300 border
        ${isSpanish ? "bg-red-600 text-white border-red-600" : "bg-blue-600 text-white border-blue-600"}
      `}
    >
      {isSpanish ? "ES" : "EN"}
    </button>
  );
}
