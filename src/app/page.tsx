"use client";

import { motion } from 'framer-motion';
import React from "react";
import Image from 'next/image';

import "./sass.scss";

export default function Home() {
  const firstLunch = true;

  return (
    <div className="Home">
      <div className="center">
        <div className="flex">
          <h1>
            <motion.span
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={1}
              style={{ display: "flex" }}
              initial={firstLunch ? { width: '0', opacity: 0 } : false}
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
              initial={firstLunch ? { width: '0', opacity: 0 } : false}
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
          <motion.div
            initial={firstLunch ? { scale: 0 } : false}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.9,
            }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            style={{ cursor: "pointer" }}
          >
            <Image
              src="/me.jpg"
              alt="Photo de Jérémy Patapy"
              style={{ pointerEvents: "none" }}
              width={150}
              height={150}
            />
          </motion.div>
        </div>

        <motion.a
          initial={firstLunch ? { opacity: 0, y: 20 } : false}
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
          className='btnCV'
        >
          Télécharger mon CV
        </motion.a>
      </div>
    </div>
  );
}
