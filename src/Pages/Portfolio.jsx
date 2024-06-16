import React from 'react';
import Project from '../Components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';


const projects = [
    {
        title: 'React, Tech Quiz',
        imgSrc: './Assests/Images/tech-quiz-project.onrender.com_.png',
        deployedLink: 'https://tech-quiz-project.onrender.com',
        repoLink: 'https://github.com/nvanschaack/tech-quiz-project'
    },
    {
      title: 'Happy Tails',
      imgSrc: './Assests/Images/project-two-app-happy-tails.onrender.com_.png',
      deployedLink: 'https://project-two-app-happy-tails.onrender.com',
      repoLink: 'https://github.com/maxbonetti/project-two-app'
    },
];

const Portfolio = () => {
    return (
        <section className="container my-5">
            <h2>Portfolio</h2>
            <div className="row">
            {projects.map(project => (
                <div key={project.title} className="col-md-4">

                <Project key={project.title} {...project} />
                </div>
            ))}
            </div>
        </section>
    );
};

export default Portfolio;