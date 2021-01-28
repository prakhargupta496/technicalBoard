import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Avant from './pages/club-pages/Avant';
import Navigation from './components/common-sections/Navigation';
import Footer from './components/common-sections/Footer';
import Home from './pages/home';
import Resources from './components/club-page/Resources';

function App() {
    const URLMatcher = /^\/([^\/]*).*$/;

    let page = useLocation();
    page = page.pathname;
    page = URLMatcher.exec(page)[1].toLowerCase();

    console.log(`/${page}/resources`);

    return (
        <React.Fragment>
            {/* Navbar Component */}
            <Navigation path={page} />

            {/* Routes */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path={`/${"avant".toLowerCase()}`} component={Avant} />
                <Route exact path={`/${page}/resources`}>
                    <Resources />
                </Route>
            </Switch>

            {/* Footer Component */}
            <Footer />

        </React.Fragment>
    );
}

export default App;