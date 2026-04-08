"use client";

import Link from 'next/link';
import { NextJs, TailwindCSS, TypeScript } from 'developer-icons';

function Footer() {
    return (
        <footer className='w-max m-auto'>
            <h1 className='flex text-xl sm:text-2xl lg:text-3xl items-end font-bold'>Réalisé avec
                <NextJs className='mx-2 w-7! h-7! sm:w-8! sm:h-8!' />,
                <TailwindCSS className='mx-2 w-7! h-7! sm:w-8! sm:h-8!' />
                et
                <TypeScript className='mx-2 w-7! h-7! sm:w-8! sm:h-8!' />
            </h1>
            <Link href="/legal-notice" className='block my-4 text-center underline'>Mentions Légales</Link>
        </footer>
    );
}

export default Footer;
