"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './sass.scss';
import { usePathname } from 'next/navigation';

function Menu() {
  const [menuState, setMenuState] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pathname = usePathname()

  useEffect(() => {
    const MemoDarkMode = () => {
      const localDark = window.localStorage.getItem('DarkMode');
      if (localDark !== undefined && localDark !== null) {
        return JSON.parse(localDark);
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    setIsDarkMode(MemoDarkMode());
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
    }
    window.localStorage.setItem('DarkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  const size = useWindowSize();

  useEffect(() => {
    !menuState ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden');
  }, [menuState, size]);

  return (
    <header className={menuState ? 'Menu active' : 'Menu'}>
      <span id="bMenu">
        <Link href="/" onClick={() => setMenuState(false)}>
          <h1>PATAPY Jérémy</h1>
        </Link>
        <div className={menuState ? 'button active' : 'button'} id="btn" onClick={() => setMenuState(!menuState)}>
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      </span>

      <div className="relativeMenu">
        <nav>
          <Link href="/" className={pathname == "/" ? "active" : ""} onClick={() => setMenuState(false)}>
            <span>Accueil</span>
          </Link>
          <Link href="/about" className={pathname == "/about" ? "active" : ""} onClick={() => setMenuState(false)}>
            <span>A propos de moi</span>
          </Link>
          <Link href="/journey" className={pathname == "/journey" ? "active" : ""} onClick={() => setMenuState(false)}>
            <span>Mon parcours</span>
          </Link>
          <Link href="/projets" className={pathname == "/projets" ? "active" : ""} onClick={() => setMenuState(false)}>
            <span>Mes projets</span>
          </Link>
          <Link href="/technology-watch" className={pathname == "/technology-watch" ? "active" : ""} onClick={() => setMenuState(false)}>
            <span>Veille Technologique</span>
          </Link>
          <Link href="/contact" className={pathname == "/contact" ? "active" : ""} onClick={() => setMenuState(false)}>
            <span>Contact</span>
          </Link>

          <span onClick={() => { setDarkMode(!darkMode) }} className={darkMode ? 'dark' : 'light'}>
            <svg width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect width="48" height="48" fill="none" />
                <g>
                  <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z" id="gauche" />
                  <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z" id="droite" />
                </g>
              </g>
            </svg>
          </span>
        </nav>
      </div>
    </header>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{ width: number | undefined; height: number | undefined }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default Menu;
