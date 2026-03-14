import { motion } from 'framer-motion'
import React from "react";
//import ImageLoader from '../../components/ImageLoader';

import './sass.scss'
import { Helmet } from 'react-helmet';


function Home({ firstLunch }) {

  return (
    <>
      <Helmet>
        <title>Jérémy PATAPY</title>
      </Helmet>
      <div
        className="Home"
      /*as={motion.div}
      initial={initial}
      animate={animate}
      transition={{
        duration: 6,
        delay: 0,
        ease: [0, 0.3, 0.71, 0.2, 1.01],
      }}*/
      >

        <div className="center">
          <div className="flex">
            <h1>
              <motion.span
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={1}
                style={{ display: "flex" }}
                initial={firstLunch ? { width: '0', opacity: 0 } : ''}
                animate={{ width: '100%', opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
              >
                <span>P</span>
                <span>A</span>
                <span>T</span>
                <span>A</span>
                <span>P</span>
                <span>Y</span>
              </motion.span>
              <motion.span
                className="nickname"
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                dragElastic={1}
                style={{ display: "flex" }}
                initial={firstLunch ? { width: '0', opacity: 0 } : ''}
                animate={{ width: '100%', opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.9,
                }}

              >
                <span>J</span>
                <span>é</span>
                <span>r</span>
                <span>é</span>
                <span>m</span>
                <span>y</span>
              </motion.span>
            </h1>
            <motion.img
              initial={firstLunch ? { scale: 0 } : ''}
              animate={{ scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.9,
              }}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={1}
              src="/me.jpg"
              alt=""
            /></div>

          <motion.a
            initial={firstLunch ? { opacity: 0, y: 20 } : ''}
            animate={{ opacity: 1, y: 0 }}

            transition={{
              delay: 1.8,
              duration: 0.9,
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}


            href="/CV 2026.pdf"
            target="_blank"
            className='btnCV' >Télécharger mon CV</motion.a>
        </div>
      </div>
    </>
  )
}

export default Home
