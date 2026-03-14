"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';

import './sass.scss'

import ImageLoader from '../../components/ImageLoader';
import { skillCategories } from '@/data/skills';

// You cannot export metadata from a client component.
// This metadata should be moved to a server component, like a layout or the page if it were a server component.
/*
export const metadata: Metadata = {
  title: 'Jérémy PATAPY - A propos de moi',
};
*/

function About() {
  const [age, setAge] = useState(calculateAge());
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

  const [idFullscreen, setIdFullscreen] = useState(0);

  function isFullScreen(id: number | string) {
    return id === idFullscreen;
  }

  function autoSetidFullscreen(id: number | string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (id === idFullscreen) {
      setIdFullscreen(0);
    } else {
      setIdFullscreen(id as number)
    }
  }

  function getMapLink() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      return `https://www.google.com/maps/place/Limoges/@45.8585218,1.2318865,12z/data=!3m1!4b1!4m6!3m5!1s0x47f934afe6680461:0x10be4a3159364d11!8m2!3d45.833619!4d1.261105!16zL20vMDE4MHls`;
    }

    if (/iPad|iPhone|iPod/i.test(userAgent)) {
      return `https://maps.apple.com/place?address=87000%20Limoges,%20France&auid=6513917944861972760&ll=45.827101,1.259855&lsp=6489&q=Limoges`;
    }

    return `https://www.google.com/maps/place/Limoges/@45.8585218,1.2318865,12z/data=!3m1!4b1!4m6!3m5!1s0x47f934afe6680461:0x10be4a3159364d11!8m2!3d45.833619!4d1.261105!16zL20vMDE4MHls`;
  }

  return (
    <div className='AboutMe'
      onClick={() => setIdFullscreen(0)}
    >
      <motion.div
        className={isFullScreen(1) ? "card fullscreen" : "card normal"}
      >
        <div className="image">
          <ImageLoader src="/me_card.png" alt="" absolute={true} width={200} height={200} />
        </div>

        <div className="content">

          <div className='block first'>
            <span>NOM</span>
            <h1>PATAPY</h1>
          </div>

          <div className='block'>
            <span>Prénoms</span>
            <h1>Jérémy, Nathan</h1>
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
          >
            <span>lieu de naissance</span>
            <a href={getMapLink()}><h1>Limoges</h1>
              <ImageLoader src="/About/limoges2.png" alt="Limoges" className="img" width={200} height={200} />
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
      >
        <h1>Mes compétences : </h1>

        <div className="divSkills">
          {skillCategories.map((category, index) => (
            <div className='dev' key={index}>
              <h2>{category.title}</h2>
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={isFullScreen(category.idStart + skillIndex) ? "elfull fullscreen" : "elfull normal"}
                  onClick={(e) => autoSetidFullscreen(category.idStart + skillIndex, e)}
                >
                  <div className={`${skill.logos?.length !== 1 ? "folder" : ""} ${skill.logos?.length === 2 ? "deux" : ""}`}>
                    {skill.logos && skill.logos.map((logo, logoIndex) => (
                      <ImageLoader key={logoIndex} src={logo.src} alt="" width={50} height={50} className={logo.className} />
                    ))}
                  </div>
                  <h3>{skill.name}</h3>
                  <p dangerouslySetInnerHTML={{ __html: skill.level }}></p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div >
    </div >
  );
}

export default About;
