import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page introuvable',
};

export default function NotFound() {
    return (
        <div className="error">
            <h1 style={{ margin: '50px 0 50px 0 ', textAlign: 'center' }}>Page introuvable 🫤</h1>
        </div>
    );
}
