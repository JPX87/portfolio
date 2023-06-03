import React from 'react';
import { useParams } from 'react-router-dom';


import { projectList } from './data';
import Error from '../../components/Error';
import ImageLoader from '../../components/ImageLoader';
import { Helmet } from 'react-helmet';

import './aProjet.scss'
import { useEffect } from 'react';

const css = `
.Menu{
    height: 0;
    padding: 0;
    /*transition: all .3s;
    transform: translate(0,-200%) !important;*/
}
`

const AProjet = () => {

    const listeProjectsUrl = (projectList.flatMap(project => project.urlProject))

    let { projet } = useParams();

    const aProjet = projectList.find(item => item.urlProject === projet);


    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    //Verifier si un element est visible
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //Fonction Diapo
    function Diapofunct(Diapo, timer, id) {
        //On met au diapo à 0
        var iElement = 0;

        //Temps entre chaque image en ms
        //const timer = 1500;

        //Initialisation numDiapo
        const numDiapo = {};

        //On hover
        var onHover = 0;

        //On revient tout en haut
        //Diapo = document.getElementById('Diapo');


        var lenghtElement = Diapo.getElementsByTagName('img').length
        lenghtElement += Diapo.getElementsByTagName('video').length

        //Debug
        //console.log(`Id : ${id} | Longueur : ${lenghtElement}`);

        Diapo.getElementsByClassName('medias')[0].scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        //Boutton
        // On récupère les deux flèches
        var next = Diapo.querySelector("#gauche");
        var prev = Diapo.querySelector("#droite");

        // On met en place les écouteurs d'évènements sur les flèches
        next.addEventListener("click", function () { numDiapo.var -= 1 });
        prev.addEventListener("click", function () { numDiapo.var += 1 });

        //Avancement
        var avancement = Diapo.getElementsByClassName('avancement')[0];
        avancement.innerText = ` ${iElement + 1}/${lenghtElement}`;

        // On gère l'arret et la reprise du diapo
        Diapo.addEventListener("mouseover", function () { onHover = 1 });
        Diapo.addEventListener("mouseout", function () { onHover = 0 });

        //Changement variable numDiapo
        Object.defineProperty(numDiapo, 'var', {
            get: function () { return iElement; },
            set: function (i) {
                //Debug
                //console.log(`Id : ${id} | Photos : ${i}`);
                iElement = i;
                Diapo.getElementsByClassName('medias')[0].scrollTo({
                    top: 0,
                    left: Diapo.offsetWidth * i,
                    behavior: 'smooth'
                });

                if (numDiapo.var >= lenghtElement) { numDiapo.var = 0; }
                if (numDiapo.var < 0) { numDiapo.var = lenghtElement - 1; }

                avancement.innerText = ` ${iElement + 1}/${lenghtElement}`;
            }
        });

        //Fonction pour swipe les diapos
        Diapofunct.prototype.swipe = async function () {
            await sleep(timer);
            while (true) {
                if (!onHover && isInViewport(Diapo) && !checkVideoPlaying('Diapo')) {
                    numDiapo.var += 1;
                }
                await sleep(timer);
            }
        }

        //Debug
        //console.log(this);

        //On lance la fontion swipe
        Diapofunct.prototype.swipe();
    }

    function checkVideoPlaying(div) {
        if (document.getElementById(div)) {
            const videos = document.getElementById(div).getElementsByTagName('video');
            for (let i = 0; i < videos.length; i++) {
                if (!videos[i].paused) {
                    return true;
                }
            }
        }
        return false;
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 300
        })

        var Diapos = document.getElementById('Diapo');

        new Diapofunct(Diapos, 3000, "1");


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (listeProjectsUrl.includes(projet)) {

        return (
            <>
                <Helmet>
                    <title>Jérémy PATAPY - Projet {aProjet.name}</title>
                </Helmet>

                <div className='unProjet'>
                    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" defer="" />

                    <div className="general">
                        <span to="/Projets/" className='back' onClick={(() => { window.history.back() })}>
                            <img src="/Journey/arrow-right.svg" alt="" />
                            Retour
                        </span>
                        <h1>{aProjet.name}:</h1>

                        {aProjet.urlImage === undefined || aProjet.urlImage === "" ? (
                            <svg width="250px" height="250px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="var(--text1-color)" d="M7.828 5l-1-1H22v15.172l-1-1v-.69l-3.116-3.117-.395.296-.714-.714.854-.64a.503.503 0 0 1 .657.046L21 16.067V5zM3 20v-.519l2.947-2.947a1.506 1.506 0 0 0 .677.163 1.403 1.403 0 0 0 .997-.415l2.916-2.916-.706-.707-2.916 2.916a.474.474 0 0 1-.678-.048.503.503 0 0 0-.704.007L3 18.067V5.828l-1-1V21h16.172l-1-1zM17 8.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 8.5zm-1 0a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm5.646 13.854l.707-.707-20-20-.707.707z" />
                                <path fill='none' d="M0 0h24v24H0z" />
                            </svg>
                        ) : (
                            <ImageLoader src={"/Projets/" + aProjet.urlImage} relative={true} alt="" />
                        )}

                        <div className="detail">
                            <h4>Language & framework :</h4>
                            {aProjet.language.map((lang) => (
                                <ImageLoader className="logo" src={"/logo/" + lang} alt="" key={lang} />

                            ))}
                            <h4>Année(s) de réalisation : </h4>
                            {aProjet.year.length === 1 ? (aProjet.year[0]) : (aProjet.year[0] + " - " + aProjet.year[aProjet.year.length - 1])}

                            <h4 style={{ marginBottom: "5px" }}>Fichiers & Lien(s)</h4>

                            <ul>
                                {aProjet.Files ? (
                                    <li>
                                        <a href={"/Projets/" + aProjet.urlProject + "/" + aProjet.Files}>
                                            <img src="/Projets/pdf.svg" alt="" style={{ height: "30px" }} />
                                            <span style={{ position: 'relative', top: '7px' }}>{aProjet.Files}
                                            </span>
                                        </a>
                                    </li>
                                ) : ''}


                                {aProjet.link === false || aProjet.link === undefined ? (
                                    <li>
                                        <img src='/Projets/github.svg' alt="" style={{ height: "30px" }} />
                                        <span style={{ position: 'relative', top: '-14px' }}>Projet privé</span>
                                    </li>
                                ) : (
                                    <li>
                                        <a href={aProjet.link}>
                                            <img src='/Projets/github.svg' alt="" style={{ height: "30px" }} />
                                            <span style={{ position: 'relative', top: '7px' }}>Lien Gitub</span>
                                        </a>
                                    </li>
                                )}
                            </ul>

                        </div>

                    </div>
                    <div className="autre">
                        <h2>Description du projet : </h2>
                        <p>{aProjet.Description}</p>

                        {aProjet.Note ? (
                            <p className='note'>
                                <h2>Note : </h2>
                                {aProjet.Note}
                            </p>

                        ) : ''}

                        <h2>Les missions : </h2>
                        <ul>
                            {aProjet.Mission.map((aMission) => (
                                <li key={aMission + Math.random()}>{aMission}</li>
                            ))}
                        </ul>

                        {aProjet.Competences ? (
                            <>
                                <h2>Compétences mobilisées sur ce projet : </h2>
                                <ul>
                                    {aProjet.Competences.map((aCompetence) => (
                                        <li key={aCompetence + Math.random()}>{aCompetence}</li>
                                    ))}
                                </ul>
                            </>
                        ) : ''}



                        <h2>Les medias : </h2>

                        <div className={aProjet.portraitMode ? "Diapo portrait" : "Diapo"} id='Diapo' style={{
                            '--with': '1820px',
                            '--height': '550px'
                        }}>
                            <div className="medias">
                                {aProjet.Media.map((aMedia) => (
                                    <div className="media" key={aMedia + Math.random()}>
                                        {aMedia.split(".")[aMedia.split(".").length - 1] === "mp4" ?
                                            (<video src={"/Projets/" + aProjet.urlProject + "/" + aMedia} controls={true}></video>)
                                            : (<img src={"/Projets/" + aProjet.urlProject + "/" + aMedia} alt="" ></img>)}
                                    </div>
                                ))}

                            </div>
                            <div className="control">
                                <button className="las" id="gauche"></button>
                                <button className="las" id="droite"></button>
                                <span className="avancement">...</span>
                            </div>
                        </div>

                    </div>
                    <style>
                        {css}
                    </style>
                </div>
            </>
        )
    } else {
        return (<Error />)
    }
}

export default AProjet;