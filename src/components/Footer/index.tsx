"use client";

import Link from 'next/link';
import './sass.scss';

function Footer() {
    return (
        <footer>
            <h1>Réalisé avec <img src="/logo/react.png" alt="" /><img src="/logo/sass.png" alt="" /></h1>
            <Link href="/legal-notice">Mentions Légales</Link>
        </footer>
    );
}

export default Footer;
