'use client';

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import { skillCategories } from '@/data/skills';
import ImageLoader from '@/components/ImageLoader';
import type { SkillLogo } from '@/data/skills';

const CardInfoField = ({ label = '', value = '', children, className = '' }: { label?: string, value?: string, children?: React.ReactNode, className?: string }) => (
    <div className={`relative group text-left w-max block border-b-[0.3vh] sm:border-b-[0.4vh] border-(--color) pb-1 ${className}`}>
        <span className='text-[1.8vw] lg:text-[1vw]'>{label}</span>
        <h1 className='m-0 -mt-1.5 sm:-mt-1 text-[2.5vw] lg:text-[1.8vw] text-center font-bold'>{value}</h1>
        {children}
    </div>
);

export function AboutContent() {
    const [age, setAge] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [idFullscreen, setIdFullscreen] = useState<number | string>(0);

    useEffect(() => {
        const birthdate = "2003-07-07T13:10:00";
        const calculateAge = () => {
            const ageInMilliseconds = Date.now() - Date.parse(birthdate);
            const ageDate = new Date(ageInMilliseconds);
            setAge({
                years: ageDate.getUTCFullYear() - 1970,
                months: ageDate.getUTCMonth(),
                days: ageDate.getUTCDate() - 1,
                hours: ageDate.getUTCHours(),
                minutes: ageDate.getUTCMinutes(),
                seconds: ageDate.getUTCSeconds(),
            });
        };
        calculateAge();
        const intervalId = setInterval(calculateAge, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const autoSetIdFullscreen = (id: number | string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        setIdFullscreen(prevId => (prevId === id ? 0 : id));
    };

    const getMapLink = () => {
        if (typeof navigator === 'undefined') return '#';
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        if (/android/i.test(userAgent)) return `https://www.google.com/maps/place/Limoges/@45.8585218,1.2318865,12z`;
        if (/iPad|iPhone|iPod/i.test(userAgent)) return `https://maps.apple.com/place?address=87000%20Limoges,%20France`;
        return `https://www.google.com/maps/place/Limoges/@45.8585218,1.2318865,12z`;
    };

    const cardFields = [
        { type: 'field', label: "NOM", value: "PATAPY" },
        { type: 'field', label: "Prénoms", value: "Jérémy, Nathan", className: "mt-1 sm:mt-2 xl:mt-4" },
        {
            type: 'group', className: "flex mt-1 sm:mt-2 xl:mt-4", fields: [
                { type: 'field', label: "SEXE", value: "M", className: "mr-[4vw]" },
                { type: 'field', label: "NATIONALITÉ", value: "FRA", className: "mr-[4vw]" },
                {
                    type: 'field', label: "DATE DE NAISSANCE", value: "07 07 2003",
                    children: (
                        <div className={`absolute z-20 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 top-full mt-4 w-max bg-(--color) text-white p-4 rounded-lg text-sm text-center transition-all duration-300
                            before:content-[''] before:absolute before:z-[-1] before:-top-2 before:left-1/2 before:-translate-x-1/2 before:w-8 before:h-8 before:bg-(--color) before:rounded before:rotate-45 select-none`}>
                            {`${age.years} ans ${age.months} mois ${age.days} jours `}<br />
                            {`${age.hours}h ${age.minutes}m ${age.seconds}s`}
                        </div>
                    )
                }
            ]
        },
        {
            type: 'field', label: "Lieu de naissance", value: "Limoges", className: "mt-1 sm:mt-2 xl:mt-4",
            children: (
                <a href={getMapLink()} target="_blank" rel="noopener noreferrer" className='no-underline absolute inset-0' />
            )
        },
    ];

    return (
        <div className='font-(family-name:--font-akaya-kanadaka) text-center min-h-[calc(100vh-232px)] max-w-full pb-8' onClick={() => setIdFullscreen(0)}>
            <motion.div
                className={`relative aspect-video flex w-11/12 md:w-10/12 lg:w-1/2 mx-auto mt-8 md:mt-16 mb-4 rounded-3xl p-5 shadow-md
                   bg-[radial-gradient(var(--color)_2%,transparent_15%),radial-gradient(var(--color)_2%,transparent_15%)] bg-size-[2vh_2vh] bg-position-[0_0,1vh_1vh]
                   transition-transform duration-300 ${idFullscreen === 1 ? 'scale-125 z-20' : ''}`}
            >
                <div className="relative w-2/5 h-full select-none">
                    <ImageLoader src="/me_card.png" alt="Jérémy Patapy" absolute width={200} height={200} priority className="absolute top-7.5 left-0 right-0 bottom-0 w-[calc(100%-4vh)]! mx-auto rounded-[6vw_1vh] bg-(--color)" />
                </div>

                <div className="w-2/5 lg:w-3/5 h-full flex flex-col justify-center items-start pl-4">
                    {cardFields.map((item: any, index) => {
                        if (item.type === 'field') return <CardInfoField key={index} {...item} />;
                        if (item.type === 'group') return (
                            <div key={index} className={item.className}>
                                {item?.fields?.map((field: any, fieldIndex: number) => <CardInfoField key={fieldIndex} {...field} />)}
                            </div>
                        );
                        return null;
                    })}
                </div>
            </motion.div>

            <div className="hidden md:block animate-[vas-vient_svg_2.8s_infinite]">
                <svg className='w-36 h-36 mx-auto transform rotate-90' viewBox="-10 0 40 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <polyline fill="none" points="16.4 7 21.5 12 16.4 17" className='stroke-(--color) stroke-2 animate-[vas-vient_2.8s_infinite]' strokeLinecap="round" strokeLinejoin="round" />
                        <line fill="none" x1="2.5" x2="19.2" y1="12" y2="12" className='stroke-(--color) stroke-2' strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </div>

            <motion.div className="mt-20 font-(family-name:--font-poppins) px-4">
                <div className='inline-block relative mb-9'>
                    <h1 className="text-4xl md:text-5xl text-(--color) font-bold">Mes compétences</h1>
                    <div className='hidden absolute -bottom-2.2 left-0 right-0 h-2 bg-(--color) rounded-md'></div>
                </div>

                <div className="space-y-12">
                    {skillCategories.map((category) => (
                        <div key={category.idStart} className={`group max-w-4xl mx-auto p-6 md:p-10 rounded-2xl shadow-sxl ${category.className}`}>
                            <h2 className='text-4xl font-(family-name:--font-akaya-kanadaka) font-bold mb-6'>{category.title}</h2>
                            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ${category.isLeft ? '' : '[direction:rtl]'}`}>
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className={`relative p-2 [direction:ltr] rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-115 flex flex-col justify-center items-center min-h-42.5 min-w-25 border-0 border-(--color)
                                                    ${idFullscreen === category.idStart + skillIndex ? 'scale-[1.3]! !sm:scale-[1.5] !lg:scale-[1.6] z-20 bg-white-500! dark:bg-black-500! border-2' : 'bg-transparent'}
                                                    &:span:hover:opacity-100  hover:bg-(--color)/20`}
                                        onClick={(e) => autoSetIdFullscreen(category.idStart + skillIndex, e)}
                                    >
                                        <div className={`flex justify-center items-center mb-2 h-16 space-x-1 ${(skill.logos?.length ?? 0) > 2 ? 'grid grid-cols-2 gap-2' : ''}`}>
                                            {skill.logos?.map((Logo, logoIndex) => {
                                                if (Logo && typeof Logo === 'object' && 'src' in Logo) {
                                                    return (<ImageLoader
                                                        key={logoIndex}
                                                        src={(Logo as SkillLogo).src}
                                                        alt={`${skill.name} logo`}
                                                        width={50} height={50}
                                                        className={`w-8! h-8! ${(skill.logos?.length ?? 0) === 1 ? 'w-auto! h-14!' : ''} ${(skill.logos?.length ?? 0) === 2 ? 'w-12! h-12!' : ''} translate-x-0.5 translate-y-0.75 select-none`} />
                                                    )
                                                }
                                                return (<Logo
                                                    key={logoIndex}
                                                    className={`w-8 h-8 ${(skill.logos?.length ?? 0) === 1 ? 'w-14! h-14!' : ''} ${(skill.logos?.length ?? 0) === 2 ? 'w-12! h-12!' : ''} translate-x-0.5 translate-y-0.75 select-none`}
                                                />
                                                )
                                            }
                                            )}
                                        </div>
                                        <h3 className="text-base font-semibold select-none">{skill.name}</h3>
                                        <p className={`text-xs mt-1 text-center whitespace-pre-wrap transition-all duration-300 ${idFullscreen === category.idStart + skillIndex ? 'opacity-100 leading-4' : 'opacity-0 leading-0'} select-none`}>
                                            {Array.isArray(skill.level) ? skill.level.join('\n') : skill.level}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <span className='sm:opacity-0 group-hover:opacity-100 sm:text-xl md:text-2xl font-(family-name:--font-akaya-kanadaka) transition-all duration-300'>Cliquer pour plus d'informations</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
