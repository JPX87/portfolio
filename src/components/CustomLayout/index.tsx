import type { Metadata, Viewport } from "next";
import { Akaya_Kanadaka, Annie_Use_Your_Telescope, Shantell_Sans, Rampart_One, Poppins } from "next/font/google";
import '@/css/globals.css'

import { ThemeProvider } from "@/components/ThemeProvider";

const akayaKanadaka = Akaya_Kanadaka({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-akaya-kanadaka",
});

const rampartOne = Rampart_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-rampart-one",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-poppins",
});


export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

/*
const annieUseYourTelescope = Annie_Use_Your_Telescope({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-annie-use-your-telescope",
});

const shantellSans = Shantell_Sans({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-shantell-sans",
});
*/

export const metadata: Metadata = {
    title: "Jérémy Patapy - Portfolio Développeur Full-Stack",
    description: "Découvrez mon portfolio : projets, parcours professionnel et compétences en développement web (Next.js, React, TypeScript, Tailwind CSS)",
    keywords: ["portfolio", "développeur", "fullstack", "Next.js", "React", "TypeScript", "Tailwind CSS"],
    authors: [{ name: "Jérémy Patapy" }],
    creator: "Jérémy Patapy",
    publisher: "Jérémy Patapy",
    formatDetection: {
        email: true,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
            { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
            { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
            { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" }
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "Jérémy Patapy - Portfolio",
        description: "Découvrez mes projets et compétences en développement web full-stack",
        url: "https://portfolio.jééremy-patapy.com",
        siteName: "Portfolio 2026",
        images: [
            {
                url: "/me.jpg",
                width: 1200,
                height: 630,
                alt: "Jérémy Patapy - Développeur",
                type: "image/jpeg",
            },
        ],
        type: "website",
        locale: "fr_FR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jérémy Patapy - Portfolio",
        description: "Portfolio de développeur full-stack",
        images: ["/me.jpg"],
    },
    alternates: {
        canonical: "https://portfolio.jééremy-patapy.com",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
};

export default function CustomLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body
                className={`${akayaKanadaka.variable} ${rampartOne.variable} ${poppins.variable} 
                    bg-white-500 dark:bg-black text-black dark:text-white-500 transition-all duration-300`}
                suppressHydrationWarning
            >
                <ThemeProvider attribute="data-theme" defaultTheme="light">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
