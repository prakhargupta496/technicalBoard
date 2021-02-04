import React from 'react';
import { useLocation } from 'react-router-dom';
//Clubs
import Avant from './Avant';
//Home Page
import Home from './Home';
//App Globals
import Navigation from './Navigation';
import Footer from './Footer';

function App() {
    const URLMatcher = /^\/(\w*).*$/;

    let page = useLocation();
    page = page.pathname;
    console.log(page);
    page = URLMatcher.exec(page)[1].toLowerCase();
    console.log(page);

    return (
        <React.Fragment>
            {/* Navbar Component */}
            <Navigation page={page} />

            {/* Routes */}
            <Home />
            <Avant />

            {/* Footer Component */}
            <Footer page={page} />

        </React.Fragment>
    );
}

export default App;