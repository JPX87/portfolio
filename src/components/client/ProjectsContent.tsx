'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ImageLoader from '@/components/ImageLoader';
import { projectList } from '@/data/projects';

export function ProjectsContent() {
    const [filterText, setFilterText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedYears, setSelectedYears] = useState("all");

    const uniqueCategories = useMemo(
        () => [...new Set(projectList.flatMap((project) => project.category))],
        []
    );

    const uniqueYears = useMemo(
        () => [...new Set(projectList.flatMap((project) => project.year))],
        []
    );

    const filteredProjects = useMemo(() => projectList.filter(
        (project) =>
            (selectedCategory === "all" || project.category.includes(selectedCategory)) &&
            (selectedYears === "all" || project.year.toString().includes(selectedYears)) &&
            (filterText === "" ||
                project.name.toLowerCase().includes(filterText.toLowerCase()))
    ), [filterText, selectedCategory, selectedYears]);

    return (
        <div className="min-h-[calc(100vh-241px)] w-full pb-8 font-(family-name:--font-poppins) text-center transition-all duration-300">
            <section className="bg-secondary mx-auto w-max max-w-[calc(100vw-100px)] mt-6 xl:mt-12 p-6 pb-12 xl:px-10 rounded-3xl transition-all duration-300">
                <h1 className='text-3xl text-(--color) text-underline font-bold mb-4'>Filtre :</h1>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 xl:gap-6'>
                    <label htmlFor="search" className="font-semibold m-0 text-lg">Recherche :</label>
                    <input
                        id="search"
                        type="text"
                        className="w-full sm:w-auto sm:max-w-50 lg:max-w-none h-8 px-4 border border-(--color) rounded-md transition-all duration-300 text-center focus:outline-none focus:ring-1 focus:ring-(--color)"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />

                    <label htmlFor="category" className="font-semibold m-0 text-lg">Catégories :</label>
                    <select
                        name="category"
                        id="category"
                        className="h-8 px-6 border border-(--color) rounded-md transition-all duration-300 text-center focus:outline-none focus:ring-1 focus:ring-(--color)"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option className='bg-[#e4e8f6] dark:bg-[#080c1a] text-black dark:text-white' value="all">Tous</option>
                        {uniqueCategories.map((category) => (
                            <option className='bg-[#e4e8f6] dark:bg-[#080c1a] text-black dark:text-white' key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="years" className="font-semibold m-0 text-lg">Années :</label>
                    <select
                        name="years"
                        id="years"
                        className="h-8 px-6 border border-(--color) rounded-md transition-all duration-300 text-center focus:outline-none focus:ring-1 focus:ring-(--color)"
                        value={selectedYears}
                        onChange={(e) => setSelectedYears(e.target.value)}
                    >
                        <option className='bg-[#e4e8f6] dark:bg-[#080c1a] text-black dark:text-white' value="all">Toutes</option>
                        {uniqueYears.sort((a, b) => b - a).map((aYear) => (
                            <option className='bg-[#e4e8f6] dark:bg-[#080c1a] text-black dark:text-white' key={aYear} value={aYear}>
                                {aYear}
                            </option>
                        ))}
                    </select>
                </div>
            </section>

            <section className="block mx-auto w-full px-5 lg:w-[calc(100vw-20px)] 2xl:w-[calc(100vw-150px)] mt-6 xl:mt-12 rounded-2xl">
                {filteredProjects.map((project) => (
                    <div
                        className="relative flex flex-col lg:flex-row items-center justify-between w-full lg:w-[calc(100%-80px)] h-auto lg:h-95 2xl:h-92.5 p-6 lg:px-8 2xl:px-12 my-8 mx-auto rounded-[30px] hover:shadow-[0_0_8px_var(--color)] transition-all duration-300 gap-6 lg:gap-4"
                        id={project.name}
                        key={project.name}
                    >
                        <div className="w-full lg:w-[30%] 2xl:w-[35%] flex flex-col justify-center">
                            <h1 className="border-b-3 border-(--color) w-max max-w-full mx-auto px-2.5 text-2xl lg:text-3xl xl:text-4xl font-(family-name:--font-akaya-kanadaka) font-bold">{project.name}</h1>
                            <p className="bg-white w-max rounded-lg mt-3 mx-auto! sm:mx-0 px-2 text-(--color) font-medium text-lg"> {project.journey}</p>
                        </div>

                        <div className="w-full lg:w-[40%] 2xl:w-[40%] flex justify-center items-center h-48 lg:h-full py-4">
                            {project.urlImage === undefined || project.urlImage === "" ? (
                                <svg className="w-full h-full max-h-48 lg:max-h-[85%] 2xl:max-h-[90%] object-contain" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="var(--text1-color)" d="M7.828 5l-1-1H22v15.172l-1-1v-.69l-3.116-3.117-.395.296-.714-.714.854-.64a.503.503 0 0 1 .657.046L21 16.067V5zM3 20v-.519l2.947-2.947a1.506 1.506 0 0 0 .677.163 1.403 1.403 0 0 0 .997-.415l2.916-2.916-.706-.707-2.916 2.916a.474.474 0 0 1-.678-.048.503.503 0 0 0-.704.007L3 18.067V5.828l-1-1V21h16.172l-1-1zM17 8.5A1.5 1.5 0 1 1 15.5 7 1.5 1.5 0 0 1 17 8.5zm-1 0a.5.5 0 1 0-.5.5.5.5 0 0 0 .5-.5zm5.646 13.854l.707-.707-20-20-.707.707z" />
                                    <path fill="none" d="M0 0h24v24H0z" />
                                </svg>
                            ) : (
                                <ImageLoader className="max-h-[30vh] lg:max-h-[85%] 2xl:max-h-[95%] w-auto max-w-full rounded-[30px] object-contain select-none"
                                    src={"/Projets/" + project.urlImage} relative={true} alt={project.name} width={400} height={250} />
                            )}
                        </div>

                        <div className="w-full lg:w-[30%] 2xl:w-[25%] text-base lg:text-lg flex flex-col justify-center items-center lg:pb-10">
                            <h4 className="mt-0 mb-2 lg:my-4 font-semibold">Language & framework :</h4>
                            <div className="flex flex-wrap justify-center items-center lg:justify-start gap-2 mb-4">
                                {project.language.map((Lang, index) => {
                                    if (typeof Lang === "string") {
                                        const name = Lang.split('.')[0];
                                        return <ImageLoader className="inline-block h-10! w-auto lg:h-12! mx-1 select-none" src={"/logo/" + Lang} alt={name} key={index} width={40} height={40} />;
                                    }
                                    return <Lang key={index} className="inline-block h-8! w-8! lg:h-10! lg:w-10! mx-1" />;
                                })}
                            </div>
                            <h4 className="mt-2 mb-2 lg:mt-4 font-semibold">Année(s) de réalisation :</h4>
                            <span>{project.year.length === 1 ? project.year[0] : `${project.year[0]} - ${project.year[project.year.length - 1]}`}</span>
                        </div>

                        <Link
                            href={"/projets/" + project.urlProject}
                            className={`group relative flex items-center justify-center w-3/4 lg:w-auto lg:absolute lg:bottom-4 lg:right-8
                bg-(--color) text-white py-2 px-6 lg:py-2.5 lg:pl-5 lg:pr-12 
                rounded-xl overflow-hidden transition-all duration-300 hover:lg:px-8
                select-none
                `}
                        >
                            <span className="z-10">En savoir plus</span>
                            <ImageLoader className="hidden lg:block absolute right-3 h-5! w-5! transition-transform duration-300 group-hover:translate-x-10" src="/Journey/arrow-right.svg" alt="Flèche" width={20} height={20} />
                        </Link>
                    </div>
                ))}

                {filteredProjects.length === 0 && (
                    <h2 className="text-xl font-semibold mt-10">Aucun projet ne correspond au filtre 🫤</h2>
                )}
            </section>
        </div>
    );
}
