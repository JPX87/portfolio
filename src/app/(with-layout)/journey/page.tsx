import type { Metadata } from 'next';
import { JourneyContent } from '@/components/client';

export const metadata: Metadata = {
    title: 'Parcours - Jérémy PATAPY | Portfolio',
    description: 'Découvrez mon parcours académique et professionnel avec une timeline détaillée',
};

export default function JourneyPage() {
    return <JourneyContent />;
}
