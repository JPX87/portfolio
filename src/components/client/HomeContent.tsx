'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HomeContent() {
    const firstLaunch = true;
    const name = "PATAPY";
    const nickname = "Jérémy";

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-110px)] p-4 mb-10">
            <div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
                    <motion.div
                        className="order-last md:order-first"
                        initial={firstLaunch ? { opacity: 0, x: -100 } : {}}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        <h1 className="font-(family-name:--font-rampart-one) text-(--color) text-5xl sm:text-6xl lg:text-8xl xl:text-[120px] tracking-[0.2em] lg:tracking-[15px] text-center md:text-left">
                            <motion.span
                                drag
                                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                                dragElastic={1}
                                className="flex cursor-pointer mb-10"
                                initial={firstLaunch ? { width: '0', opacity: 0 } : {}}
                                animate={{ width: '100%', opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                {name.split('').map((letter, i) => (
                                    <span key={i} className="transition-all duration-1000">{letter}</span>
                                ))}
                            </motion.span>
                            <motion.span
                                className="flex cursor-pointer tracking-[0.3em] lg:tracking-[25px]"
                                drag
                                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                                dragElastic={1}
                                initial={firstLaunch ? { width: '0', opacity: 0 } : {}}
                                animate={{ width: '100%', opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.9 }}
                            >
                                {nickname.split('').map((letter, i) => (
                                    <span key={i} className="transition-all duration-1000">{letter}</span>
                                ))}
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={firstLaunch ? { scale: 0 } : {}}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, duration: 0.9 }}
                        drag
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        dragElastic={1}
                        className="cursor-pointer"
                    >
                        <Image
                            src="/me.jpg"
                            alt="Photo de Jérémy Patapy"
                            className={`pointer-events-none rounded-full border-4 md:border-[7px] border-(--color) 
                         w-48 h-48 
                         md:w-64 md:h-64 
                         lg:w-80 lg:h-80`}
                            width={320}
                            height={320}
                            priority
                        />
                    </motion.div>
                </div>

                <motion.a
                    initial={firstLaunch ? { opacity: 0, y: 20 } : {}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.9 }}
                    drag
                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    dragElastic={1}
                    href="/CV_2026.pdf"
                    target="_blank"
                    className={`block mt-10 md:mt-12 font-(family-name:--font-akaya-kanadaka) no-underline text-(--color) bg-white-500 dark:bg-black border-4 border-(--color) rounded-xl md:rounded-2xl 
                     py-3 px-6 text-2xl
                     md:py-4 md:px-8 md:text-3xl
                     transition-all duration-300 
                     shadow-[8px_8px_0px_var(--color)] 
                     hover:bg-(--color) hover:text-white hover:shadow-none hover:translate-x-2 hover:translate-y-2`}
                >
                    Télécharger mon CV
                </motion.a>
            </div>
        </div>
    );
}
