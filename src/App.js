import React from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';
//Clubs
import Avant from './Avant';
//Home Page
import Home from './Home';
//App Globals
import Navigation from './Navigation';
import Footer from './Footer';
import ErrorObj from './Error';

function App() {
    const URLMatcher = /^\/([^\/]*).*$/;

    let page = useLocation();
    page = page.pathname;
    page = URLMatcher.exec(page)[1].toLowerCase();

    return (
        <React.Fragment>
            {/* Navbar Component */}
            <Navigation page={page} />

            {/* Routes */}
            <Home />
            <Avant />

            <Switch>
                <Redirect to="/error404" >
                    <ErrorObj.Error404 />
                </Redirect>
            </Switch>

            {/* Footer Component */}
            <Footer page={page} />

        </React.Fragment>
    );
}

export default App;