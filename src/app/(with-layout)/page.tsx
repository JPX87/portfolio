import type { Metadata } from 'next';
import { HomeContent } from '@/components/client';

export const metadata: Metadata = {
  title: 'Accueil - Jérémy PATAPY | Portfolio',
  description: 'Page d\'accueil du portfolio de Jérémy PATAPY - Développeur et étudiant en informatique',
};

export default function Home() {
  return <HomeContent />;
}
