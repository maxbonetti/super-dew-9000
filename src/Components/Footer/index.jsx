import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <span>© 2023 Max Bonetti</span>
        <div>
          <a href="https://github.com/maxbonetti" > GitHub </a>
          <br />
          <a href="mailto: maxwell.bonetti@gmail.com" > Email</a>
          <br />
          <a href="https://www.linkedin.com/in/max-bonetti/" > LinkedIn </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;