import React from 'react';
import Navigation from '../Navigation/index';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header = () => {
    return (
        <header>
            <h1>Max's Portfolio!</h1>
            <Navigation />
        </header>
    );
};

export default Header;