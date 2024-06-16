import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import AboutMe from './src/Pages/AboutMe';
import Portfolio from './src/Pages/Portfolio';
import Contact from './src/Pages/Contact';
import Resume from './src/Pages/Resume';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;