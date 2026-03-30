import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Mentions légales - Jérémy PATAPY | Portfolio',
    description: 'Mentions légales et informations de contact du site de Jérémy PATAPY',
};

const H1 = ({ children }: { children: React.ReactNode }) => (
    <h1 className="relative block w-max mx-auto mt-2 mb-10 md:mt-4 text-[40px] text-(--color) after:content-[''] after:absolute after:-bottom-1.25 after:-left-5 after:-right-5 after:h-2 after:bg-(--color) after:rounded-[5px]">
        {children}
    </h1>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="relative w-max mx-auto mb-10 text-[30px] text-(--color) after:content-[''] after:absolute after:-bottom-1.25 after:-left-5 after:-right-5 after:h-1 after:bg-(--color) after:rounded-[5px]">
        {children}
    </h2>
);

const Paragraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`mb-12.5 max-w-[calc(100vw-30px)] mx-auto ${className}`.trim()}>
        {children}
    </p>
);

export default function LegalNotice() {
    return (
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-200px)] m-auto text-center font-['Poppins',sans-serif]">
            <H1>Mentions légales : </H1>

            <H2>Éditeur du site</H2>
            <Paragraph>
                Le site <Link href="/" className="text-(--color) hover:underline">https://jeremypatapy.fr/</Link> est édité par Jérémy PATAPY.
            </Paragraph>

            <H2>Contact</H2>
            <Paragraph>
                Adresse e-mail : jeremy.patapy@gmail.com <br /><br />
                Numéro de téléphone : 07 72 66 26 16
            </Paragraph>

            <H2>Hébergement</H2>
            <Paragraph>
                Le site est hébergé à Toulouse 🏉
            </Paragraph>

            <H2>Responsabilité</H2>
            <Paragraph className="md:max-w-225">
                Jérémy PATAPY décline toute responsabilité pour toute interruption, suspension ou dysfonctionnement du site, quelle qu'en soit la cause. <br />            </Paragraph>

            <H2>Donnée personnelle</H2>
            <Paragraph>
                Ce site ne stocke pas les données.
            </Paragraph>
        </div>
    );
}
