import CustomLayout from '@/components/CustomLayout';
import Menu from '@/components/Menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Patapy Jérémy - Page introuvable',
};

export default function NotFound() {
    return (
        <CustomLayout>
            <Menu />
            <h1 className='my-12 text-center text-3xl'>Page introuvable 🫤</h1>
        </CustomLayout>
    );
}
