"use client";

import Link from 'next/link';
import { NextJs, TailwindCSS, TypeScript } from 'developer-icons';

function Footer() {
    return (
        <footer className='w-max m-auto'>
            <h1 className='flex text-3xl items-end font-bold'>Réalisé avec
                <NextJs className='mx-2 w-8! h-8!' />,
                <TailwindCSS className='mx-2 w-8! h-8!' />
                et
                <TypeScript className='mx-2 w-8! h-8!' />
            </h1>
            <Link href="/legal-notice" className='block my-4 text-center underline'>Mentions Légales</Link>
        </footer>
    );
}

export default Footer;
