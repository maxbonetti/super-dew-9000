import React from 'react';
import Navigation from '../Navigation/index';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
    return (
        <header className="navbar navbar-dark bg-dark">
            <div className="container">
            <h1 className="navbar-brand">Max's Portfolio!</h1>
            <Navigation />
            </div>
        </header>
    );
};

export default Header;