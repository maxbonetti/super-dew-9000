import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Resume = () => {
    const onButtonClick = () => {
        fetch("max-b-tech-resume.pdf")
        .then((res)=> {
            res.blob()
            .then((blob)=>{
                const fileURL = window.URL.createObjectURL(blob);

                let alink = document.createElement("a");
                alink.href= fileURL;
                alink.download = "max-b-tech-resume.pdf";
                alink.click();
            });
        });
    };
    
    return (
        <section className="container my-5">
            <h2>Resume</h2>
            <a href="/Misc/max-b-tech-resume.pdf" className="btn btn-primary mb-3" download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul className="list-group">
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">MERN Stack</li>
                <li className="list-group-item">Mongoose</li>
                <li className="list-group-item">HTML</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">Python</li>
            </ul>
        </section>
    );
};

export default Resume;