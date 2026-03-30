"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSelector from '../ThemeSelector';

const list = [
  { name: "Accueil", href: "/" },
  { name: "A propos de moi", href: "/about" },
  { name: "Mon parcours", href: "/journey" },
  { name: "Mes projets", href: "/projets" },
  //{ name: "Veille Technologique", href: "/technology-watch" },
  { name: "Contact", href: "/contact" },
];

export default function Menu() {
  const [menuState, setMenuState] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuState ? 'hidden' : 'auto';
  }, [menuState]);

  const pathname = usePathname();
  useEffect(() => {
    setMenuState(false);
  }, [pathname]);

  return (
    <>
      <header className="relative z-50 font-['Poppins'] font-bold backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 py-4 mx-auto max-w-7xl">
          <div className="lg:hidden">
            <Link href="/">
              <h1 className="text-2xl text-gray-800 dark:text-white">PATAPY Jérémy</h1>
            </Link>
          </div>

          <nav className="hidden border-(--color) border-4 p-2 rounded-lg lg:flex m-auto items-center gap-2">
            {list.map((item) => (
              <MenuItem key={item.href} href={item.href}>{item.name}</MenuItem>
            ))}
            <ThemeSelector />
          </nav>

          <div className="lg:hidden">
            <MenuButton menuState={menuState} onClick={() => setMenuState(!menuState)} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-40 w-full h-full bg-[#FFFD] dark:bg-[#000D] 
          transition-all duration-300 ease-in-out lg:hidden
        ${menuState ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {list.map((item) => (
            <MenuItem key={item.href} href={item.href}>{item.name}</MenuItem>
          ))}
          <ThemeSelector />
        </nav>
      </div>
    </>
  );
}

const MenuButton = ({ menuState, onClick }: { menuState: boolean, onClick: () => void }) => (
  <button className="z-51 w-auto" onClick={onClick}>
    <div className={`block h-1.25 w-12.5 rounded-sm bg-(--color) my-2.5 mx-auto transition-all duration-300 ease-in-out ${menuState ? 'transform translate-y-3.5 rotate-45' : ''}`}></div>
    <div className={`block h-1.25 w-12.5 rounded-sm bg-(--color) my-2.5 mx-auto transition-all duration-300 ease-in-out ${menuState ? 'w-0!' : ''}`}></div>
    <div className={`block h-1.25 w-12.5 rounded-sm bg-(--color) my-2.5 mx-auto transition-all duration-300 ease-in-out ${menuState ? 'transform -translate-y-4 -rotate-45' : ''}`}></div>
  </button>
);

function MenuItem({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`px-3 py-2 text-2xl lg:text-base rounded-md text-gray-700 dark:text-gray-400 tracking-wider
      hover:text-(--color) dark:hover:text-white select-none
      ${pathname === href ? "bg-(--color) text-white dark:text-white hover:text-white" : "border-transparent"}`}>
      {children}
    </Link>
  );
}
