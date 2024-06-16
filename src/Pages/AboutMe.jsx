import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AboutMe = () => {
    return (
        <section className="container my-5">
            <h2>About Me</h2>
            <img src="/Images/Picture1.jpg" alt="Professional Photo of Myself" />
            <p>
                Multi certified and highly motivated individual experienced with over three years of commercial and residential customer service and sales
                experience. Seeking to contribute my talent and diversify my experience in the IT industry. Dedicated coach-able team player
                with strong work ethic. Highly skilled in time management, employee development, team building and interpersonal
                communications. Recognized for strong leadership and conflict resolution expertise.
            </p>
            <br  />
            <p>
                In my free time I enjoy working out, fishing, video games, walks with my <a href="https://project-two-app-happy-tails.onrender.com/animals/7" 
                alt="A picture of my dog: Chloe the Pomiski, from my Applcation Happy Tails">dog,</a> hanging out with my friends and family.
               
            </p>

        </section>
    );
};

export default AboutMe;