"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const defaultClassName = "w-36 h-16 sm:w-16 sm:h-8";

function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Résout l'erreur d'hydratation entre le serveur et le client avec next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log("Toggling theme. Current theme is:", theme);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Affiche un espace vide en attendant le montage côté client
  if (!mounted) {
    return <div className={defaultClassName} aria-hidden="true" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      id="themeSelector"
      className={`relative inline-flex items-center p-1 rounded-full bg-transparent border-2 border-(--color) cursor-pointer 
        transition-all duration-300 ease-in-out hover:shadow-[0_0_8px_var(--color)] focus:outline-none
        ${defaultClassName}`}
      onClick={toggleTheme}
      aria-label="Changer de thème"
    >
      <div
        className={`relative flex items-center justify-center w-12 h-12 sm:w-5 sm:h-5 rounded-full bg-(--color) 
          transition-transform duration-500 ease-in-out ${isDark ? 'translate-x-20 sm:translate-x-8' : 'translate-x-0'
          }`}
      >
        {/* Icône Soleil (Clair) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`absolute w-5 h-5 sm:w-3.5 sm:h-3.5 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 text-black' : 'opacity-100 rotate-0 text-white'}`}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
        </svg>
        {/* Icône Lune (Sombre) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`absolute w-5 h-5 sm:w-3.5 sm:h-3.5 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 text-black' : 'opacity-0 -rotate-90 text-white'}`}
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      </div>
    </button>
  );
}

export default ThemeSelector;
