import { Helmet } from 'react-helmet'

import Footer from '../../components/Footer'

import './sass.scss'

function TechnologyWatch({ firstLunch }) {


  return (
    <>
      <Helmet>
        <title>Jérémy PATAPY - Veille Technologie</title>
      </Helmet>
      <div className='TechnologyWatch'>
        <p>
          <h1>Qu'est-ce que c'est ?</h1>

          La veille technologique a pour objectif principal d'identifier ou de prévoir les innovations dans le domaine d'activité, notamment dans le secteur informatique. <br /><br />
          Celle-ci est indispensable pour rester informer et surtout pour être au courant des failles de sécurité découverte.
        </p>


        <h1 style={{ marginTop: "150px" }}>Mes sources :</h1>

        <section>
          <div>
            <img src="/TechnologyWatch/stackover.png" alt="" />
            <h2>Stackoverflow</h2>
            <p>
              Plateforme est un forum  de question et réponse en ligne pour les développeurs.
            </p>
          </div>
          <div>
            <img src="/TechnologyWatch/doc.png" alt="" />
            <h2>Documentation Technique</h2>
            <p>
              Toutes ressource en ligne pour les informations et instructions relatives à un produit ou à un système.
            </p>
          </div>
          <div>
            <img src="/TechnologyWatch/gActu.png" alt="" />
            <h2>Google actualitées</h2>
            <p>
              Plateforme en ligne fournissant des actualités et des articles provenant de diverses sources à travers le monde.
            </p>
          </div>
          <div>
            <img src="/TechnologyWatch/ytb.png" alt="" style={{ borderRadius: "50px" }} />
            <h2>Reseaux sociaux</h2>
            <p>
              Plateformes en ligne pour se connecter, partager et interagir avec d'autres personnes.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>

  )
}

export default TechnologyWatch
