//import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './sass.scss'

function Menu() {
  const [menuState, setmenuState] = useState(false)

  const [darkMode, setdarkMode] = useState(false)

  function MemoDarkMode() {

    var localDark = window.localStorage.getItem('DarkMode')

    if (localDark !== undefined && localDark !== null) {
      return JSON.parse(localDark)
    }

    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const [isDarkMode, setIsDarkMode] = useState(MemoDarkMode());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.getElementById('body').classList.add('dark-mode')
      window.document.getElementById('body').classList.remove('light-mode')
    } else {
      window.document.getElementById('body').classList.remove('dark-mode')
      window.document.getElementById('body').classList.add('light-mode')

    }

    window.localStorage.setItem('DarkMode', darkMode);
  }, [darkMode, isDarkMode])

  useEffect(() => {
    setdarkMode(isDarkMode)
  }, [isDarkMode])

  const size = useWindowSize()

  //console.log(menuState)

  //console.log(size)

  useEffect(() => {
    var app = document.getElementById('body')

    //console.log(menuState)

    !menuState ? (app.style.overflow = 'auto') : (app.style.overflow = 'hidden')
  }, [menuState, size])

  /*useEffect(() => {
    console.log(windowsWith)
  }, [windowsWith])*/

  return (
    <header className={menuState ? 'Menu active' : 'Menu'}>
      <span id="bMenu">
        <NavLink to="/" onClick={() => setmenuState(false)}>
          <h1>PATAPY Jérémy</h1>
        </NavLink>
        <div className={menuState ? 'button active' : 'button'} id="btn" onClick={() => setmenuState(!menuState)}>
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </div>
      </span>

      <div className="relativeMenu">
        <nav
        /*initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0, x }}
        transition={{
          duration: 0.9,
        }}*/
        >
          <NavLink to="/" onClick={() => setmenuState(false)}>
            <span>Accueil</span>
          </NavLink>
          <NavLink to="/About" onClick={() => setmenuState(false)}>
            <span>A propos de moi</span>
          </NavLink>
          <NavLink to="/Journey" onClick={() => setmenuState(false)}>
            <span>Mon parcours</span>
          </NavLink>
          <NavLink to="/Projets" onClick={() => setmenuState(false)}>
            <span>Mes projets</span>
          </NavLink>
          <NavLink to="/Veille_Technologique" onClick={() => setmenuState(false)}>
            <span>Veille Technologique</span>
          </NavLink>
          <NavLink to="/Contact" onClick={() => setmenuState(false)}>
            <span>Contact</span>
          </NavLink>

          <span onClick={() => { setdarkMode(!darkMode) }} className={darkMode ? 'dark' : 'light'}>
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
        {/*<CV
        href="CV.pdf"
        /*as={motion.a}
      target="_blank"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.7 }}*/
        /*
      >
        Télécharger mon CV
      </CV>*/}
      </div>
    </header>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

export default Menu
