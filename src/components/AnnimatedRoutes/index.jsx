import React, { useEffect, useState } from 'react'
import ReactSlideRoutes from 'react-slide-routes'
import { Route } from 'react-router-dom'

/*import loadable from '@loadable/component';

const AboutMe = loadable(() => import('../../pages/AboutMe'));
const Projets = loadable(() => import('../../pages/Projets/index'));
const AProjet = loadable(() => import('../../pages/Projets/aProjet'));
const Contact = loadable(() => import('../../pages/Contact'));
const Home = loadable(() => import('../../pages/Home/index'));
const Error = loadable(() => import('../../components/Error'));
const Journey = loadable(() => import('../../pages/Journey'));*/

import About from '../../pages/About'
import Projets from '../../pages/Projets/index'
import AProjet from '../../pages/Projets/aProjet'
import Contact from '../../pages/Contact'
import Home from '../../pages/Home/index'
import Error from '../../components/Error'
import Journey from '../../pages/Journey'
import TechnologyWatch from '../../pages/TechnologyWatch'
import LegalNotice from '../../pages/LegalNotice'

/*import Valadon from '../../pages/Journey/fullscreen/Valadon'
import Alternance from '../../pages/Journey/fullscreen/Alternance'

import { NewtonsCradle } from '@uiball/loaders'*/

//import Worksite from '../../components/worksite'

function AnnimatedRoutes() {
  const [firstLunch, updateFirstLunch] = useState(true)

  useEffect(() => {
    updateFirstLunch(false)
    //console.log('update')
  }, [])

  return (

    <ReactSlideRoutes duration={400} animation={'slide'}>
      <Route path="/" element={<Home firstLunch={firstLunch} />} />
      <Route path="/About" element={<About firstLunch={firstLunch} />} />
      <Route path="/Journey/" element={<Journey firstLunch={firstLunch} />}>

        <Route path="valadon" element />
        <Route path="Alternance" element />
        <Route path="bastiee" element />
        <Route path="stage" element />

        {/*<Route path="valadon" element={<Journey firstLunch={firstLunch} />} />
        <Route path="Alternance" element={<Journey firstLunch={firstLunch} />} />
        <Route path="bastiee" element={<Journey firstLunch={firstLunch} />} />
        <Route path="SLaposte" element={<Journey firstLunch={firstLunch} />} />
        <Route path="SCCI" element={<Journey firstLunch={firstLunch} />} />
        <Route path="SASP" element={<Journey firstLunch={firstLunch} />} />*/}

      </Route>
      <Route path="/Projets/" element={<Projets firstLunch={firstLunch} />} />

      <Route path="/Projets/:projet" element={<AProjet firstLunch={firstLunch} />} />
      {/*<Route path="Affichage_Dynamique" element={<div />} />*/}

      <Route path="/Veille_Technologique" element={<TechnologyWatch firstLunch={firstLunch} />} />

      <Route path="/Contact" element={<Contact firstLunch={firstLunch} />} />

      <Route path="/mentions-legales" element={<LegalNotice firstLunch={firstLunch} />} />

      {/* Page introuvable */}
      <Route path="*" element={<Error />} />

    </ReactSlideRoutes>
  )
}

export default AnnimatedRoutes
