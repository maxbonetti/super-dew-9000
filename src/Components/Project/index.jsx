import React from 'react';

const Project = ({ title, imgSrc, deployedLink, repoLink }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={imgSrc} alt={`${title} screenshot`} />
            <a href={deployedLink}>View App</a>
            <a href={repoLink}>GitHub Repo</a>
        </div>
    );
};

export default Project;