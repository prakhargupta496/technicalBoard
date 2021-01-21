import React from 'react';
import Avant from './pages/Avant';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import EventsPage from './pages/sub-pages/EventsPage';
import GalleryPage from './pages/sub-pages/GalleryPage';
import HallOfFame from './pages/sub-pages/HallOfFame';
import Resources from './components/Resources';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>

                {/* Navbar Component */}
                <Navigation />

                {/* Routes */}
                <Switch>
                    <Route exact path="/" component={Avant} />
                    <Route exact path="/resources" component={Resources} />
                    <Route exact path="/events" component={EventsPage} />
                    <Route exact path="/gallery" component={GalleryPage} />
                    <Route exact path="/hallOfFame" component={HallOfFame} />
                </Switch>

                {/* Footer Component */}
                <Footer />

            </Router>
        );
    }
}

export default App;