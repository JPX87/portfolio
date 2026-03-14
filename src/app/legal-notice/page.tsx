import type { Metadata } from 'next';
import Link from 'next/link';

import './sass.scss'

// This metadata can be uncommented and used directly
/*
export const metadata: Metadata = {
  title: 'Jérémy PATAPY - Mentions légales',
};
*/

const css = `
.Menu{
    height: 0;
    padding: 0;
}

.Menu #bMenu{
    height: 0;
    padding: 0;
}
`

function LegalNotice() {
    return (
        <div className='legalNotice'>
            {/*<span className='back' onClick={(() => { window.history.back() })}>
                <img src="/Journey/arrow-right.svg" alt="" />
                Retour
            </span>*/}

            <h1>Mentions légales : </h1>

            <h2>Éditeur du site</h2>
            <p>Le site <Link href="/">https://jeremypatapy.fr/</Link> est édité par Jérémy PATAPY.</p>

            <h2>Contact</h2>

            <p>
                Adresse e-mail : jeremy.patapy@gmail.com <br /><br />
                Numéro de téléphone : 07 72 66 26 16
            </p>

            <h2>Hébergement</h2>

            <p>
                Le site est hébergé à Saint-Jouvent
            </p>

            <h2>Responsabilité</h2>

            <p style={{ maxWidth: '900px', margin: 'auto', marginBottom: "50px" }}>
                Jérémy PATAPY décline toute responsabilité pour toute interruption, suspension ou dysfonctionnement du site, quelle qu'en soit la cause. <br /><br />

                Le site peut contenir des liens vers des sites tiers. <br />
                Jérémy PATAPY ne peut être tenu responsable du contenu de ces sites, ni des éventuels dommages qui pourraient en résulter.
            </p>

            <h2>Donnée personnelle</h2>

            <p>
                Ce site ne stocke pas les données.
            </p>
            <style>
                {css}
            </style>
        </div>
    );
}

export default LegalNotice;
