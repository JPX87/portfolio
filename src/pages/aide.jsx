import { useState } from 'react'
import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'

const Titre = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 50px;
`

const RoundTop = styled.svg`
  margin-top: 100px;
  margin-bottom: -5px;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  fill: #564b8f;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 100px 0 10px #0000;
`
const RoundBottom = styled.svg`
  position: relative;
  top: calc(-30vh + 150px);
  fill: #2f294d;
`

/*<Titre
        as={motion.h1}
        initial={{ opacity: 0, scale: 0.5, translateY: -50 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: vDelay }}
        style={{ marginTop: "calc(46vh - 100px)", marginBottom: marge + "vh" }}
    >A propos de moi :</Titre>*/
/*<RoundTop data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        as={motion.svg}
        initial={{ opacity: 0, translateY: 800, rotate: "180deg" }}
        animate={{ opacity: 1, translateY: 0, rotate: "180deg" }}
        transition={{ duration: 1.5, delay: vDelay }}
      >
        <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
  </RoundTop>*/
/*<RoundBottom data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
        as={motion.svg}
        initial={{ opacity: 0, translateY: -200, rotate: "180deg", }}
        animate={{ opacity: 1, translateY: 0, rotate: "180deg", }}
        transition={{ duration: 1, delay: vDelay }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" ></path>
  </RoundBottom>*/

/*  
    const { scrollY } = useScroll()
    const [marge, setMarge] = useState(46);

  scrollY.onChange((y) => {
    //console.log("Height :" + window.innerHeight)
    //console.log("y :" + y * 1.322302158273)
    //console.log(1 - (y / window.innerHeight))
    //setMarge(window.innerHeight / 10 - y / 5)
    setMarge((0.69 - (y / window.innerHeight)) * 70)

  }) */
