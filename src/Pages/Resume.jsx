import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Resume = () => {
    return (
        <section className="container my-5">
            <h2>Resume</h2>
            <a href="./Assests/Misc/max-b-tech-resume.pdf" className="btn btn-primary mb-3" download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul className="list-group">
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">MERN Stack</li>
                <li className="list-group-item">Mongoose</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
            </ul>
        </section>
    );
};

export default Resume;