import type { Metadata } from 'next';
import { ProjectsContent } from '@/components/client';

export const metadata: Metadata = {
  title: 'Projets - Jérémy PATAPY | Portfolio',
  description: 'Découvrez la collection de mes projets académiques et professionnels avec filtres par catégorie et année',
};

export default function ProjetsPage() {
  return <ProjectsContent />;
}

