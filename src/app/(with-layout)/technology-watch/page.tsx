import type { Metadata } from 'next';
import { techSources } from '@/data/technologyWatch';

export const metadata: Metadata = {
  title: 'Veille Technologique - Jérémy PATAPY | Portfolio',
  description: 'Découvrez ma veille technologique et mes sources informatiques pour rester à jour',
};

export default function TechnologyWatch() {
  return (
    <div className="min-h-[calc(100vh-232px)] max-w-7xl mx-auto px-6 pb-12.5 font-['Poppins',sans-serif] text-center text-white">

      <section className="max-w-4xl mx-auto mt-16 p-10 shadow-[0_0_20px_var(--back4-color)] rounded-[30px] text-lg leading-relaxed transition-all duration-300 hover:shadow-[0_0_25px_var(--color)]">
        <h1 className="text-(--color) text-[40px] mb-8 font-semibold">Qu'est-ce que c'est ?</h1>
        <p className="mb-4 text-black dark:text-white">
          La veille technologique a pour objectif principal d'identifier ou de prévoir les innovations dans le domaine d'activité, notamment dans le secteur informatique.
        </p>
        <p className='text-black dark:text-white'>
          Celle-ci est indispensable pour rester informé et surtout pour être au courant des failles de sécurité découvertes.
        </p>
      </section>

      <h1 className="text-(--color) text-[45px] mt-37.5 mb-16 font-semibold">Mes sources :</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {techSources.map((source, index) => (
          <div key={index} className="flex flex-col items-center justify-start p-8 rounded-[30px] shadow-[0_0_15px_var(--back4-color)] hover:-translate-y-2 hover:shadow-[0_0_20px_var(--color)] transition-all duration-300">
            <img
              src={source.image}
              alt={source.title}
              className={`w-30 h-30 object-contain mb-6 ${source.isRounded ? 'rounded-[50px]' : ''}`}
            />
            <h2 className="text-[22px] text-(--color) mb-4 font-medium">{source.title}</h2>
            <p className="text-gray-300 text-[15px] leading-relaxed">{source.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
