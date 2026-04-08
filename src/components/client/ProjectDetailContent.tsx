'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter, notFound } from 'next/navigation';
import { projectList } from '@/data/projects';
import ImageLoader from '@/components/ImageLoader';
import { GitHubDark, GitHubLight } from 'developer-icons';

export function ProjectDetailContent() {
    const params = useParams();
    const router = useRouter();
    const projet = params?.projet;

    const aProjet = projectList.find(item => item.urlProject === projet);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, []);

    useEffect(() => {
        if (!aProjet?.medias?.length || isHovered) return;

        const timer = setInterval(() => {
            if (carouselRef.current) {
                const videos = carouselRef.current.getElementsByTagName('video');
                for (let i = 0; i < videos.length; i++) {
                    if (!videos[i].paused) return;
                }
            }
            setCurrentSlide((prev) => (prev + 1) % aProjet.medias.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isHovered, aProjet]);

    if (!aProjet) {
        notFound();
    }

    return (
        <div className="relative z-10 flex flex-col lg:flex-row h-max lg:h-screen w-full text-center font-sans transition-all duration-300">
            <div className="w-[85%] lg:w-1/4 h-max lg:h-[95%] lg:maw-h-[calc(100vh - 100px)] overflow-auto m-auto rounded-[30px] shadow-[0_0_20px_var(--color)] pb-10 lg:pb-0 mt-5 lg:mt-auto flex flex-col items-center">
                <button className="group relative flex flex-col items-center justify-center w-max mt-5 px-5 pb-2.5 pt-0 bg-(--color) text-white rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 select-none"
                    onClick={() => router.back()}>
                    <ImageLoader src="/Journey/arrow-right.svg" alt="" width={30} height={30} className="mt-0.5 mb-2.5 h-6.25! w-auto rotate-180 transition-transform duration-300 translate-y-1.75 " />
                    Retour
                </button>
                <h1 className="border-b-2 border-(--color) w-max max-w-full px-2.5 mx-auto mt-5 mb-3 text-2xl lg:text-3xl font-(family-name:--font-akaya-kanadaka) font-bold">{aProjet.name}:</h1>
                {aProjet.urlImage === undefined || aProjet.urlImage === "" ? (
                    <svg className="rounded-[15px] w-[80%] lg:w-auto max-w-[calc(100%-20px)] max-h-[30%] object-contain mx-auto" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="var(--text1-color)" d="M7.828 5l-1-1H22v15.172l-1-1v-.69l-3.116-3.117-.395.296-.714-.714.854-.64a.503.503 0 0 1 .657.046L21 16.067V5zM3 20v-.519l2.947-2.947a1.506 1.506 0 0 0 .677.163 1.403 1.403 0 0 0 .997-.415l2.916-2.916-.706-.707-2.916 2.916a.474.474 0 0 1-.678-.048.503.503 0 0 0-.704.007L3 18.067V5.828l-1-1V21h16.172l-1-1zM17 8.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 8.5zm-1 0a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm5.646 13.854l.707-.707-20-20-.707.707z" />
                        <path fill='none' d="M0 0h24v24H0z" />
                    </svg>
                ) : (
                    <ImageLoader className="rounded-[15px] w-[80%]! lg:w-auto max-w-[calc(100%-20px)] max-h-[30vh] object-contain my-2! mx-auto select-none"
                        src={"/Projets/" + aProjet.urlImage} relative={true} alt="" width={250} height={250} />
                )}

                <div className="w-full flex flex-col items-center text-center">
                    <h4 className="mt-3.75 font-semibold text-lg">Language & framework :</h4>
                    <div className="flex flex-wrap justify-center gap-2 mt-1 mb-2 mx-1">
                        {aProjet.language.map((Lang, index) => {
                            if (typeof Lang === "string") {
                                const name = Lang.split('.')[0];
                                return <ImageLoader className="inline-block h-10! w-auto lg:h-10! mx-1" src={"/logo/" + Lang} alt={name} key={index} width={40} height={40} />;
                            }
                            return <Lang key={index} className="inline-block h-8! w-8! lg:h-10! lg:w-10! mx-1" />;
                        })}
                    </div>

                    <h4 className="mt-3.75 font-semibold text-lg">Année(s) de réalisation : </h4>
                    <span>{aProjet.year.length === 1 ? aProjet.year[0] : `${aProjet.year[0]} - ${aProjet.year[aProjet.year.length - 1]}`}</span>

                    <h4 className="mt-3.75 mb-1.25 font-semibold text-lg">Fichiers & Lien(s)</h4>
                    <ul className="list-none m-0 p-0 w-full flex flex-col items-center space-y-2">
                        {aProjet.files ? (
                            <li className="flex w-full justify-center items-center">
                                <a href={"/Projets/" + aProjet.urlProject + "/" + aProjet.files} className="inline-flex items-center text-[#0066cc] gap-2 overflow-hidden hover:underline max-w-[80%] mx-auto">
                                    <ImageLoader src="/Projets/pdf.svg" alt="" className='h-9!' width={30} height={30} />
                                    <span>{aProjet.files}</span>
                                </a>
                            </li>
                        ) : ''}

                        {aProjet.link === false || aProjet.link === undefined ? (
                            <li className="flex w-full justify-center items-center gap-2 text-gray-500">
                                <GitHubDark className='h-9 dark:hidden' />
                                <GitHubLight className='h-9 hidden dark:block' />
                                <span>Projet privé</span>
                            </li>
                        ) : (
                            <li className="flex w-full justify-center items-center">
                                <a href={aProjet.link as string} className="inline-flex items-center text-[#0066cc] gap-2 overflow-hidden hover:underline max-w-[80%] mx-auto" target="_blank" rel="noopener noreferrer">
                                    <GitHubDark className='h-9 w-9 dark:hidden' />
                                    <GitHubLight className='h-9 w-9 hidden dark:block' />
                                    <span>Lien Github</span>
                                </a>
                            </li>
                        )}
                        {aProjet?.customLink ? (
                            <li className="flex w-full mt-1 justify-center items-center">
                                <a href={aProjet.customLink as string} className="inline-flex items-center text-[#0066cc] gap-2 overflow-hidden hover:underline max-w-[80%] mx-auto" target="_blank" rel="noopener noreferrer">
                                    <span>{aProjet.customLink}</span>
                                </a>
                            </li>
                        ) : ''}
                    </ul>
                </div>
            </div>

            <div className="w-full lg:w-3/4 h-max lg:h-full overflow-visible lg:overflow-auto px-5 lg:px-5 pb-5">
                <h2 className="text-[25px] font-bold border-b-2 border-(--color) w-max mx-auto mt-12 mb-6 px-2.5 first:mt-12.5">Description du projet</h2>
                <p className="w-full sm:w-[70%] text-[18px] mx-auto text-left leading-relaxed">{aProjet.description}</p>

                {aProjet.note ? (
                    <section className="w-max max-w-[calc(100%-50px)] mt-10 mx-auto p-4 rounded-[20px] shadow-[0_0_5px_var(--back4-color)]">
                        <h2 className="text-[20px] font-bold border-b-2 border-(--color) w-max mx-auto mb-2.5 px-2.5">Note</h2>
                        <p className="text-[18px] text-center">{aProjet.note}</p>
                    </section>
                ) : ''}

                <h2 className="text-[25px] font-bold border-b-2 border-(--color) w-max mx-auto mt-12 mb-6 px-2.5">Les missions</h2>
                <ul className="list-disc w-max max-w-[90%] sm:max-w-[70%] mx-auto text-[18px] text-left space-y-2">
                    {aProjet.missions.map((aMission) => (
                        <li key={aMission}>{aMission}</li>
                    ))}
                </ul>

                <h2 className="text-[25px] font-bold border-b-2 border-(--color) w-max mx-auto mt-12 mb-6 px-2.5">Les medias </h2>

                <div
                    className={`group relative overflow-hidden flex mx-auto mt-2 mb-10 rounded-[20px] shadow-[0_0_30px_var(--back2-color)] bg-black font-black ${aProjet.portraitMode
                        ? "w-full max-w-[calc(100vw-80px)] lg:w-[calc(var(--with)/1.7)] lg:max-w-[calc(75vw-80px)] h-[calc(var(--with)*4)] max-h-[calc(75vw*2)] lg:max-h-[calc(85vw*0.48)] aspect-auto"
                        : "w-full max-w-[calc(100vw-80px)] lg:w-(--with) lg:max-w-[calc(65vw-100px)] h-auto lg:h-[calc(var(--with)*0.6)] aspect-16/10 lg:aspect-auto max-h-none lg:max-h-[calc(65vw*0.48)]"
                        } select-none`}
                    style={{ '--with': '1820px' } as React.CSSProperties}
                    ref={carouselRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className="flex w-full h-full text-center transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {aProjet.medias.map((aMedia, idx) => (
                            <div className="min-w-full max-w-full h-full flex justify-center items-center overflow-hidden" key={idx}>
                                {aMedia.split(".")[aMedia.split(".").length - 1] === "mp4" ?
                                    (<video src={"/Projets/" + aProjet.urlProject + "/" + aMedia} controls className="max-w-full max-h-full bg-black relative z-10" />)
                                    : (<img src={"/Projets/" + aProjet.urlProject + "/" + aMedia} alt="" className="max-w-full max-h-full object-contain relative z-10" />)}
                            </div>
                        ))}
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                        <button
                            onClick={() => setCurrentSlide(prev => (prev - 1 + aProjet.medias.length) % aProjet.medias.length)}
                            className="pointer-events-auto absolute z-20 h-12.5 w-5 top-1/2 left-1.25 -translate-y-1/2 bg-(--color) text-white border-0 p-0 cursor-pointer rounded-[30px] transition-all duration-300 hover:w-15 hover:h-15 flex items-center justify-center opacity-70 hover:opacity-100"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 scale-75 group-hover:scale-100"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={() => setCurrentSlide(prev => (prev + 1) % aProjet.medias.length)}
                            className="pointer-events-auto absolute z-20 h-12.5 w-5 top-1/2 right-1.25 -translate-y-1/2 bg-(--color) text-white border-0 p-0 cursor-pointer rounded-[30px] transition-all duration-300 hover:w-15 hover:h-15 flex items-center justify-center opacity-70 hover:opacity-100"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 scale-75 group-hover:scale-100"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                        <span className="pointer-events-auto absolute z-20 bottom-1.25 left-1/2 -translate-x-1/2 w-max px-4 h-7.5 rounded-[30px] bg-black/80 text-white text-center text-[18px] flex items-center justify-center tracking-widest font-mono">
                            {currentSlide + 1}/{aProjet.medias.length}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
