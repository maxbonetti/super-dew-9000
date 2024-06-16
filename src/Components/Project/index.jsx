import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/Project.css';

const Project = ({ title, imgSrc, deployedLink, repoLink }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={imgSrc} className="project-image" alt={`${title}  screenshot`} />
           <div className="project-links" >
            <a href={deployedLink} className="btn btn-primary">View Deployed App</a>
            <a href={repoLink} className="btn btn-secondary">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Project;