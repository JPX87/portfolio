//import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ImageLoader from '../../components/ImageLoader';
import Footer from '../../components/Footer';

import './sass.scss'


function About({ firstLunch }) {

  /*

    Age

  */
  const [age, setAge] = useState(calculateAge);
  var birthdate = "2003-07-07T13:10:00"

  function calculateAge() {
    const ageInMilliseconds = Date.now() - Date.parse(birthdate);
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAge(calculateAge());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  /*

    Fullscreen

  */

  const [idFullscreen, setIdFullscreen] = useState(0);

  function isFullScreen(id) {
    return id === idFullscreen;
  }

  function autoSetidFullscreen(id, e) {
    e.stopPropagation();
    if (id === idFullscreen) {
      setIdFullscreen(0);
    } else {
      setIdFullscreen(id)
    }
  }

  useEffect(() => {
    //console.log(idFullscreen)
  }, [idFullscreen])




  /*

  UserAgent | getMapLink

  */


  function getMapLink() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return `https://www.google.com/maps/place/Limoges/@45.8585218,1.2318865,12z/data=!3m1!4b1!4m6!3m5!1s0x47f934afe6680461:0x10be4a3159364d11!8m2!3d45.833619!4d1.261105!16zL20vMDE4MHls`;
    }

    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      return `https://maps.apple.com/place?address=87000%20Limoges,%20France&auid=6513917944861972760&ll=45.827101,1.259855&lsp=6489&q=Limoges`;
    }

    return `https://www.google.com/maps/place/Limoges/@45.8585218,1.2318865,12z/data=!3m1!4b1!4m6!3m5!1s0x47f934afe6680461:0x10be4a3159364d11!8m2!3d45.833619!4d1.261105!16zL20vMDE4MHls`;
  }

  return (
    <>
      <Helmet>
        <title>Jérémy PATAPY - A propos de moi</title>
      </Helmet>

      <div className='AboutMe'
        onClick={() => setIdFullscreen(0)}
      >
        <motion.div
          className={isFullScreen(1) ? "card fullscreen" : "card normal"}
          //onClick={() => autoSetidFullscreen(1)}
          initial={firstLunch ? { y: 200, opacity: 0 } : ''}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.71,
            duration: 0.6,
          }}
        >
          <div className="image">
            <ImageLoader src="/me_card.png" alt="" absolute={true} />
          </div>

          <div className="content">

            <div className='block first'>
              <span>NOM</span>
              <h1>PATAPY</h1>
            </div>

            <div className='block'>
              <span>Prénoms</span>
              <h1>Jérémy,  Nathan</h1>
            </div>

            <div className='flex'>
              <div className='element'>
                <span>SEXE</span>
                <h1>M</h1>
              </div>
              <div className='element'>
                <span>NATIONALITÉ</span>
                <h1>FRA</h1>
              </div>
              <div className='element'>
                <span>DATE DE NAISSANCE</span>
                <h1>07 07 2003</h1>

                <div className="old">
                  {`${age.years} ans ${age.months} mois ${age.days} jours `}
                  <br />
                  {` ${age.hours} h ${age.minutes} et ${age.seconds} s`}
                </div>

              </div>
            </div>

            <div
              className={isFullScreen("map") ? "block map fullscreen" : "block map normal"}
            /*onClick={() => autoSetidFullscreen("map")}*/>
              <span>lieu de naissance</span>
              <a href={getMapLink()}><h1>Limoges</h1>
                <ImageLoader src="/About/limoges2.png" alt="Limoges" className="img" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="fleche">
          <svg width="800px" height="800px" viewBox="-10 0 40 24" xmlns="http://www.w3.org/2000/svg">

            <g id="Complete">
              <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />

              <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.5" x2="19.2" y1="12" y2="12" />
            </g>
          </svg>
        </div>

        <motion.div
          className="skills"
          initial={firstLunch ? { y: 200, opacity: 0 } : ''}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.71,
            duration: 0.6,
          }}
        //onClick={() => autoSetidFullscreen(0)}
        >
          <h1>Mes compétences : </h1>

          <div className="divSkills">

            <div className='dev'>
              <h2>Développeur :</h2>

              <div
                className={isFullScreen(2) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(2, e)}
              >
                <div className="folder">
                  <ImageLoader src="/logo/html.png" alt="" />
                  <ImageLoader src="/logo/css.png" alt="" />
                  <ImageLoader src="/logo/js.png" alt="" />
                  <ImageLoader src="/logo/react.png" alt="" />
                </div>
                <h3>Web - Front</h3>
                <p>
                  html, css : Expert<br />
                  js, React : Débutant
                </p>

              </div>
              <div
                className={isFullScreen(3) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(3, e)}
              >
                <div className="folder">
                  <ImageLoader src="/logo/php.png" alt="" />
                  <ImageLoader src="/logo/symfony.svg" alt="" />
                  <ImageLoader src="/logo/twig.png" alt="" />
                  <ImageLoader src="/logo/MySQL.png" alt="" />
                </div>
                <h3>Web - Back</h3>
                <p>
                  php : Avancé<br />
                  Mysql : Avancé<br />
                  Symfony: Débutant
                </p>
              </div>
              <div
                className={isFullScreen(4) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(4, e)}
              >
                <div className="folder deux">
                  <ImageLoader src="/logo/android.png" className="white" alt="" />
                  <ImageLoader src="/logo/xamarin.png" alt="" />
                </div>
                <h3>Mobile</h3>
                <p>Débutant</p>
              </div>
              <div
                className={isFullScreen(5) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(5, e)}
              >
                <div className="folder deux">
                  <ImageLoader src="/logo/java.png" alt="" />
                  <ImageLoader src="/logo/c.png" alt="" />
                </div>
                <h3>Desktop</h3>
                <p>
                  java : Avancé<br />
                  c# : débutant
                </p>
              </div>
              <div
                className={isFullScreen(6) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(6, e)}
              >
                <ImageLoader src="/logo/vba.png" alt="" />
                <h3>Autre</h3>
                <p>VBA : Débutant</p>
              </div>
            </div>

            <div className='network'>
              <h2>Réseaux :</h2>
              <div
                className={isFullScreen(7) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(7, e)}
              >
                {/* <div className="folder">
                <ImageLoader src="/logo/debian.png" alt="" srcset="" />
                <ImageLoader src="/logo/ubuntu.png" alt="" srcset="" />
                <ImageLoader src="" alt="" srcset="" />
              </div> */}
                <div className="folder deux">
                  <ImageLoader src="/logo/linux.png" alt="" />
                  <ImageLoader src="/logo/windows.png" alt="" />
                </div>
                <h3>OS</h3>
                <p> Avancé </p>
              </div>
              <div
                className={isFullScreen(8) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(8, e)}
              >
                <ImageLoader src="/logo/cisco.png" alt="" srcset="" />
                <h3>Switch</h3>
                <p> Avancé </p>
              </div>
              <div
                className={isFullScreen(9) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(9, e)}
              >
                <ImageLoader src="/logo/proxmox.png" alt="" />
                <h3>Promox</h3>
                <p> Avancé </p>
              </div>
              {/*<div></div>
            <div></div> */}
            </div>

            <div className='language'>
              <h2>Langues :</h2>

              <div
                className={isFullScreen(10) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(10, e)}
              >
                <ImageLoader src="/logo/french.png" alt="" srcset="" />
                <h3>Français</h3>
                <p>Langue marternelle</p>
              </div>
              <div
                className={isFullScreen(11) ? "elfull fullscreen" : "elfull normal"}
                onClick={(e) => autoSetidFullscreen(11, e)}
              >
                <ImageLoader src="/logo/english.jpg" alt="" srcset="" />
                <h3>Anglais</h3>
                <p>Niveau maîtriser B1</p>
              </div>
            </div>
          </div>
        </motion.div >
      </div >
      <Footer />
    </>
  )
}


export default About
