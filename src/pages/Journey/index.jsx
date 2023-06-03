//import styled from 'styled-components'

//import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import ImageLoader from '../../components/ImageLoader';
import Footer from '../../components/Footer';

import './sass.scss'


function Journey({ firstLunch }) {

    const location = useLocation()

    const [isFullscreen, updateisFullscreen] = useState(false)

    const [isLunch, updateIsLunch] = useState(false)

    //const [memSize, updateMemSize] = useState(useWindowSize())

    const size = useWindowSize()

    const namePage = location.pathname.split('/')[2]

    //console.log(size)

    //const [xp, updateXp] = useState('')

    useEffect(() => {
        if (location.pathname === "/Journey/" || location.pathname === "/Journey") {

            unZoomAndCenterElement('valadon')
            unZoomAndCenterElement('Alternance')
            unZoomAndCenterElement('bastiee')
            unZoomAndCenterElement('stage')
        } else {

            if (firstLunch) {
                updateisFullscreen(true);

            }

            if (!isFullscreen) {
                //namePage = location.pathname.split('/')[2]

                zoomAndCenterElement(namePage)

            }



            //console.log(location.pathname.split('/')[2])
        }
        //console.log(location);
        //console.log("isFullscreen " + isFullscreen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    useEffect(() => {
        if (size.height !== undefined && location.pathname !== "/Journey/" && location.pathname !== "/Journey" && isFullscreen) {
            const element = document.getElementById(location.pathname.split('/')[2])

            //element.style.width = window.innerWidth + "px"
            //element.style.height = window.innerHeight + "px"

            scrollToXp(element)

        }

        // eslint-disable-next-line no-mixed-operators
        /*if ((size.width > 900 && memSize.width < 900) || (size.width < 900 && memSize.width > 900) && (location.pathname !== "/Journey/" && location.pathname !== "/Journey" && isFullscreen)) {
            const element = document.getElementById(location.pathname.split('/')[2])

            reloadzoom(element)
        }*/

        //updateHeight(location.pathname.split('/')[2])




        //console.log(memSize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size])

    //console.log(size)

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function zoomAndCenterElement(id) {
        if (isFullscreen || isLunch) return

        updateIsLunch(true)

        const element = document.getElementById(id);

        //console.log(size)

        /*element.style.width = ""
        element.style.height = ""
        element.style.transform = "";*/

        element.style.zIndex = 20;

        if (window.innerWidth > 900) {

            element.style.width = "100%"
            element.style.border = "none"

            //element.style.height = "100vh"

            await sleep(300)
        }

        // Obtenez les dimensions de l'élément
        const rect = element.getBoundingClientRect();

        //console.log(rect)

        // Calculez le rapport d'aspect de l'élément
        const aspectRatio = rect.width / rect.height;

        // Calculez les dimensions de la fenêtre
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        /*updateMemSize(
            {
                width: window.innerWidth,
                height: window.innerHeight,
            })
        */

        // Calculez la largeur et la hauteur de la zone de zoom en fonction de l'aspect ratio de l'élément
        let zoomWidth = viewportWidth;
        let zoomHeight = zoomWidth / aspectRatio;

        if (zoomHeight > viewportHeight) {
            zoomHeight = viewportHeight;
            zoomWidth = zoomHeight * aspectRatio;
        }

        // Calculez la position de l'élément zoomé pour qu'il soit centré sur l'écran
        const x = ((viewportWidth - zoomWidth) / 2);
        const y = ((viewportHeight - zoomHeight) / 2) - 300;

        // Appliquez le zoom et la positionnement à l'élément
        element.style.borderRadius = "0px"
        element.style.transform = `translate(${x}px, ${y}px) scale(${zoomWidth / rect.width})`;
        //element.style.width = "100vw";

        //element.style.minWidth = `calc(100vw/${zoomWidth / rect.width}`^

        element.style.width = "100%"
        /*if (firstLunch) {
            element.style.height = "100vh"
        }*/

        if (window.innerWidth < 900) {
            await sleep(300)
        }


        //console.log('height'.size)
        element.style.height = window.innerHeight - 58 + "px"
        await sleep(300)

        scrollToXp(element)

        if (window.innerWidth < 900) {
            await sleep(100)
        }

        element.style.zIndex = 20;


        element.classList.add('active')

        //await sleep(300)

        updateisFullscreen(true);

        updateIsLunch(false)


        //await sleep(300)


        //const rect2 = element.getBoundingClientRect();

        //console.log(rect)
        //console.log(element)


        //element.style.position = "fixed"

        //window.scrollTo(0, (rect.height / 2))

        //0, 0 + (rect.height / 2)
    }

    async function unZoomAndCenterElement(id) {
        if (!isFullscreen || isLunch) return

        updateIsLunch(true)

        const element = document.getElementById(id);
        //element.style.zIndex = 20;


        // retirez le zoom et la positionnement à l'élément
        element.style.borderRadius = ""
        element.style.border = ""
        element.style.transform = `translate(0px, 0px) scale(1)`;

        element.classList.remove('active')

        element.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 300
        })

        //scrollToXp(element)

        updateisFullscreen(false);

        await sleep(300)

        element.style.width = ""
        element.style.height = ""

        await sleep(300)

        element.style.zIndex = 1;

        updateIsLunch(false)

        //await sleep(200)


    }

    /*async function updateHeight(id, force) {
        console.log("id : " + id + " force : " + force + " size : " + size.height)

        if (firstLunch) {

            await sleep(9000)

            updateHeight(id, true)
        }


        if (force) {
            document.getElementById(id).style.height = size.height - 58 + "px"
        }

    }
    
    async function reloadzoom(id) {

        await unZoomAndCenterElement(id)

        await zoomAndCenterElement(id)
    }*/

    async function scrollToXp(element) {

        var bodyRect = document.body.getBoundingClientRect(),
            elemRect = element.getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top;

        window.scrollTo({
            top: offset + 3,
            behavior: 'smooth',
            duration: 300
        })

        //console.log(offset)
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

            //document.addEventListener('fullscreenchange', handleResize);

            window.addEventListener('transitionend', () => {
                handleResize();
            });

            // Call handler right away so state gets updated with initial window size
            handleResize()

            // Remove event listener on cleanup
            return () => {
                window.removeEventListener('resize', handleResize)
                document.removeEventListener('fullscreenchange', handleResize);
            }
        }, []) // Empty array ensures that effect is only run on mount

        return windowSize
    }

    /*function getScale(transformString) {
        const regex = /scale\((.*?)\)/;
        const matches = regex.exec(transformString);
        if (matches && matches[1]) {
            const scaleValue = parseFloat(matches[1]);
            if (!isNaN(scaleValue)) {
                return scaleValue;
            }
        }
        return 1;
    }
    
    function isStage(id) {
        //namePage = location.pathname.split('/')[2]
 
        if (namePage === "stage") {
            return id
        } else if (namePage === id) {
            return "/Journey"
        } else {
            return id
        }
    }*/

    const CSS = `body{
    overflow: hidden !important;
  }
  `
    return (
        <>
            <Helmet>
                <title>Jérémy PATAPY - Mon parcours {isFullscreen && namePage !== undefined ? ' | ' + namePage.charAt(0).toUpperCase() + namePage.slice(1) : ''}</title>
            </Helmet>
            <style>
                {isFullscreen ? CSS : ''}
            </style>
            <div className='Journey'>
                {/* <h1 className='year'>Mon Parcours :</h1> */}
                <div className='formations'>
                    <div className='uneFormation'>

                        <h1 className='year'>2021 - 2023</h1>
                        <div className="flex">
                            <Link to='valadon' className="xp valadon" id='valadon'>

                                <Link className='back' to="/Journey">
                                    <img src="/Journey/arrow-right.svg" alt="" />
                                    Retour
                                </Link>

                                <h1 className='nom' >Lycée Suzanne Valadon - Limoges :</h1>
                                <ImageLoader
                                    src="/Journey/logo/valadon_logo.png"
                                    alt=""
                                    className="valadon"
                                />

                                <div className="localisation">
                                    <h2>Localisation :</h2>
                                    <span>
                                        <ImageLoader src="/Journey/map/valadon.png" alt="" />
                                        <span>Limoges</span>
                                        <span
                                            className='carte'
                                            onClick={() => { window.open().location = "https://www.google.com/maps/place/Lyc%C3%A9e+Suzanne+Valadon/@45.8290992,1.2434464,15.06z/data=!4m6!3m5!1s0x47fecb76b72aae99:0xb0f6110bb1ef739a!8m2!3d45.8293885!4d1.2460439!16s%2Fg%2F11h6npmt14" }}
                                        >
                                            Voir sur la carte
                                            <img src="/Journey/arrow-right.svg" alt="" />
                                        </span>
                                    </span>

                                </div>

                                <div className="info">
                                    <h2>Formations : </h2>
                                    <p>
                                        <span>B</span>revet de <span>T</span>echnicien <span>S</span>upérieur <span>S</span>ervices <span>I</span>nformatiques aux <span>O</span>rganisations <br />
                                        <br />
                                        - spécialité : <span>S</span>olution <span>L</span>ogiciel <span>A</span>pplicatif <span>M</span>étier. <br />
                                        <br />

                                        Formation aux développements web et applicatif(Desktop & Mobile)
                                        {/*Durant 2 ans j'ai eux de bonne base en programmation en Web mais aussi en mobile et desktop*/}
                                    </p>
                                </div>

                            </Link>
                            <Link to='Alternance' className="xp laposte  " id='Alternance'>

                                <Link className='back' to="/Journey">
                                    <img src="/Journey/arrow-right.svg" alt="" />
                                    Retour
                                </Link>

                                <h1 className='nom'>La Poste - Plateforme de Limoges :</h1>

                                <ImageLoader src="/Journey/logo/laposte_logo.png" alt="" />

                                <div className="localisation">
                                    <h2>Localisation :</h2>
                                    <span>
                                        <ImageLoader src="/Journey/map/alternance.png" alt="" />
                                        <span>Limoges</span>
                                        <span
                                            className='carte'
                                            onClick={() => {
                                                window.open().location = "https://www.google.com/maps/place/La+Poste+Plateforme+de+Limoges/@45.8574423,1.2684996,13.42z/data=!4m6!3m5!1s0x47f935a64dc73393:0xe73c4a1c7b144e88!8m2!3d45.888629!4d1.2996483!16s%2Fg%2F11qm1wp__v"
                                            }}
                                        >
                                            Voir sur la carte
                                            <img src="/Journey/arrow-right.svg" alt="" />
                                        </span>
                                    </span>
                                </div>

                                <div className="info">
                                    <h2>Projet :</h2>
                                    <p>
                                        Durant 2 ans j'ai été en Alternance à La poste, <br /><br />
                                        j'ai fait plusieurs petits projets dont "l'Affichage Dynamique"<br /><br />
                                        celui-ci à été déployé dans plusieurs régions comme la Charente Maritime, Vienne ou encore les Deux-Sèvres.<br /><br />
                                        {/*<br />*/}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='uneFormation'>
                        <h1 className='year'>2017 - 2021</h1>
                        <div className="flex">
                            <Link to='bastiee' className="xp MaryseBastieL" id="bastiee">

                                <Link className='back' to="/Journey">
                                    <img src="/Journey/arrow-right.svg" alt="" />
                                    Retour
                                </Link>

                                <h1 className='nom'>Lycée Maryse Bastié - Limoges :</h1>

                                <ImageLoader
                                    src="/Journey/logo/MaryseBastieL_logo.png"
                                    alt=""
                                    className="MaryseBastieL"
                                />

                                <div className="localisation">
                                    <h2>Localisation :</h2>
                                    <span>
                                        <ImageLoader src="/Journey/map/bastiee.png" alt="" />
                                        <span>Limoges</span>
                                        <span
                                            className='carte'
                                            onClick={() => {
                                                window.open().location = "https://www.google.com/maps/place/Lyc%C3%A9e+Polyvalent+Maryse+Basti%C3%A9/@45.8509347,1.288544,17z/data=!3m1!4b1!4m6!3m5!1s0x47f93457192c71d1:0xf1b1818cbc23f213!8m2!3d45.850931!4d1.2907327!16s%2Fg%2F1tg6jxk5"
                                            }}
                                        >
                                            Voir sur la carte
                                            <img src="/Journey/arrow-right.svg" alt="" />
                                        </span>
                                    </span>
                                </div>

                                <div className="info">
                                    <h2>Formation :</h2>
                                    <p>
                                        <span>B</span>accalauréat <span>P</span>rofessionnelle <span>S</span>ysteme <span>N</span>umérique<br />
                                        <br />
                                        - spécialité : <span>R</span>éseaux <span>i</span>nformatiques et <span>S</span>ystèmes <span>C</span>ommunicants<br />
                                        <br />

                                        Formation a la gestion et installation des systèmes réseaux(Switch, router, etc ...)
                                    </p>
                                </div>
                            </Link>
                            <Link to='stage' className="xp stages" id='stage'>

                                <Link className='back' to="/Journey">
                                    <img src="/Journey/arrow-right.svg" alt="" />
                                    Retour
                                </Link>

                                <h1 className='nom'>Stage :</h1>

                                <ImageLoader src="/Journey/logo/laposte_logo.png" alt="" />
                                <ImageLoader src="/Journey/logo/CCI_logo.jpg" alt="" />
                                <ImageLoader src="/Journey/logo/ASP_logo.png" alt="" />


                                <div className="localisation">
                                    <h2>Localisation :</h2>
                                    <span>
                                        <ImageLoader src="/Journey/map/stage.png" alt="" />
                                        <span>Limoges</span>
                                        {/*<span
                                            className='carte'
                                            onClick={() => {
                                                window.open().location = "https://www.google.com/maps/place/La+Poste+Plateforme+de+Limoges/@45.8574423,1.2684996,13.42z/data=!4m6!3m5!1s0x47f935a64dc73393:0xe73c4a1c7b144e88!8m2!3d45.888629!4d1.2996483!16s%2Fg%2F11qm1wp__v"
                                            }}
                                        >
                                            Voir sur la carte
                                            <img src="/Journey/arrow-right.svg" alt="" />
                                        </span>*/}
                                    </span>
                                </div>


                                <div className='info'>
                                    <h2>Projets :</h2>

                                    <p>
                                        <em>La poste :</em><br />
                                        <br />
                                        - Projet Python de scan code QR pour porte d'entrée <br />
                                        <br />
                                        - Installation et configuration ZoneMinder <br />
                                        <br /><br />

                                        <em>CCI :</em><br />
                                        <br />
                                        - Installation et utilisation de proxmox <br />
                                        <br />
                                        - Masterisation & dépannage<br />

                                        <br /><br />

                                        <em>ASP :</em><br />
                                        <br />
                                        - Masterisation & dépannage<br />
                                        <br />
                                        - Installation de smartphone<br />
                                        <br />
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* <div className='uneFormation'>
          <h2>2012 - 2017</h2>
        </div> */}
                </div>


            </div>
            <Footer />
        </>
    )
}


//zoomAndCenterElement("valadon")
//unZoomAndCenterElement("valadon")

export default Journey
