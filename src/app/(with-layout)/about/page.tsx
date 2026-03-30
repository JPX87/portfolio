import type { Metadata } from 'next';
import { AboutContent } from '@/components/client';

export const metadata: Metadata = {
  title: 'À propos - Jérémy PATAPY | Portfolio',
  description: 'Découvrez qui je suis, mes compétences et mon parcours professionnel',
};

export default function AboutPage() {
  return <AboutContent />;
}
