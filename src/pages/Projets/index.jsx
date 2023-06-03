import { useState } from 'react';

import { Link } from 'react-router-dom';
import ImageLoader from '../../components/ImageLoader';
import { Helmet } from 'react-helmet';

import { projectList } from './data';
import Footer from '../../components/Footer';

import './sass.scss'
//import { useEffect } from 'react';


function Projets({ firstLunch }) {

  // Crée un tableau avec toutes les catégories de tous les projets
  // Enlève les doublons
  const uniqueCategories = [...new Set(projectList.flatMap(project => project.category))];

  // Crée un tableau avec toutes les catégories de tous les années
  // Enlève les doublons
  const uniqueYears = [...new Set(projectList.flatMap(project => project.year))];


  const [filterText, setFilterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYears, setSelectedYears] = useState("all");

  const filteredProjects = projectList.filter(
    (project) =>
      (selectedCategory === "all" || project.category.includes(selectedCategory)) &&
      (selectedYears === "all" || project.year.toString().includes(selectedYears)) &&
      (filterText === "" ||
        project.name.toLowerCase().includes(filterText.toLowerCase()))
  );


  return (
    <>
      <Helmet>
        <title>Jérémy PATAPY - Mes projets</title>
      </Helmet>
      <div className='Projects'>

        <section className='synthese'>
          <h2>Tableau de synthèse épreuve E4</h2>
          <a href='/Projets/PATAPY_Jérémy - Tableau de synthèse-Epreuve E4-BTS SIO 2023.pdf'>Télécharger</a>
        </section>

        <section className='filter'>
          <h2>Filtre :</h2>
          <input type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <h3>Catégories :</h3>
          <select
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">Tous</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <h3>Années :</h3>
          <select
            name="years"
            id="years"
            value={selectedYears}
            onChange={(e) => setSelectedYears(e.target.value)}
          >
            <option value="all">Toutes</option>

            {uniqueYears.map((aYear) => (
              <option key={aYear} value={aYear}>
                {aYear}
              </option>
            ))}
          </select>
        </section>

        <section className='liste'>
          {filteredProjects.map((project) => (
            <div className="aProject" id={project.name} key={project.name}>
              <div className="name"><h1>{project.name}</h1></div>
              {project.urlImage === undefined || project.urlImage === "" ? (
                <svg width="250px" height="250px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="var(--text1-color)" d="M7.828 5l-1-1H22v15.172l-1-1v-.69l-3.116-3.117-.395.296-.714-.714.854-.64a.503.503 0 0 1 .657.046L21 16.067V5zM3 20v-.519l2.947-2.947a1.506 1.506 0 0 0 .677.163 1.403 1.403 0 0 0 .997-.415l2.916-2.916-.706-.707-2.916 2.916a.474.474 0 0 1-.678-.048.503.503 0 0 0-.704.007L3 18.067V5.828l-1-1V21h16.172l-1-1zM17 8.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 8.5zm-1 0a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm5.646 13.854l.707-.707-20-20-.707.707z" />
                  <path fill='none' d="M0 0h24v24H0z" />
                </svg>
              ) : (
                <ImageLoader src={"/Projets/" + project.urlImage} relative={true} alt="" />
              )}
              <div className='detail'>
                <h4>Language & framework :</h4>
                {project.language.map((lang) => (
                  <ImageLoader className="logo" src={"/logo/" + lang} alt="" key={lang} />

                ))}
                <h4>Année(s) de réalisation  : </h4>
                {project.year.length === 1 ? (project.year[0]) : (project.year[0] + " - " + project.year[project.year.length - 1])}

              </div>
              <Link to={"/Projets/" + project.urlProject}>En savoir plus
                <img src="/Journey/arrow-right.svg" alt="" />

              </Link>
            </div>))}

          {filteredProjects.length === 0 ? (<h2>Aucun projet ne correspond au filtre 🫤</h2>) : ''}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Projets
