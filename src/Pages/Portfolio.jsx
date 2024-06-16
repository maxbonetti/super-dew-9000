import React from 'react';
import Project from '../Components/Project';

const projects = [
    {
        title: 'React, Tech Quiz',
        // imgSrc: 'path_to_project1_image.jpg',
        deployedLink: 'https://tech-quiz-project.onrender.com',
        repoLink: 'https://github.com/nvanschaack/tech-quiz-project'
    },
    {
      title: 'Happy Tails',
      // imgSrc: 'path_to_project1_image.jpg',
      deployedLink: 'https://project-two-app-happy-tails.onrender.com',
      repoLink: 'https://github.com/maxbonetti/project-two-app'
    },
];

const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            {projects.map(project => (
                <Project key={project.title} {...project} />
            ))}
        </section>
    );
};

export default Portfolio;