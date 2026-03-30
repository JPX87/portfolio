import type { Metadata } from 'next';
import { ContactContent } from '@/components/client';

export const metadata: Metadata = {
  title: 'Contact - Jérémy PATAPY | Portfolio',
  description: 'Contactez-moi par formulaire ou retrouvez-moi sur mes réseaux sociaux',
};

export default function ContactPage() {
  return <ContactContent />;
}
