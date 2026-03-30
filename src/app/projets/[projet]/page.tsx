import type { Metadata } from 'next';
import { projectList } from '@/data/projects';
import { ProjectDetailContent } from '@/components/client';

const getProjectMetadata = (projectUrl?: string | string[]): Metadata => {
    const urlProject = Array.isArray(projectUrl) ? projectUrl[0] : projectUrl;
    const project = projectList.find(p => p.urlProject === urlProject);

    if (!project) {
        return {
            title: 'Projet non trouvé',
        };
    }

    return {
        title: `${project.name} - Jérémy PATAPY | Portfolio`,
        description: project.description || `Découvrez le projet ${project.name} - ${project.journey}`,
    };
};

export async function generateMetadata({ params }: { params: Promise<{ projet: string }> }): Promise<Metadata> {
    const { projet } = await params;
    return getProjectMetadata(projet);
}

export default function ProjectDetailPage() {
    return <ProjectDetailContent />;
}
