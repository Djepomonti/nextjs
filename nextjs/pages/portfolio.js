import Link from 'next/link';
import React from 'react';
import Meta from '../components/Meta';
import { projects } from '../projectsData';

const portfolio = () => {
    return (
        <div>
        <Meta title={"portfolio dev, tous les derniers projets"} description={"les nouveaux projet dev"} />
            <h2>Portfolio</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href="projects/[id]" as ={"projects/" + project.id}>
                            <a>{project.title} <span>➡️</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default portfolio;