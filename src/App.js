import React from 'react';
import Avant from './pages/Avant';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import EventsPage from './pages/sub-pages/EventsPage';
import GalleryPage from './pages/sub-pages/GalleryPage';
import HallOfFame from './pages/sub-pages/HallOfFame';

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
                    <Route path="/resources">
                        <h1>Resources</h1>
                    </Route>
                    <Route exact path="/events" component={EventsPage} />
                    <Route path="/gallery" component={GalleryPage} />
                    <Route path="/hallOfFame" component={HallOfFame} />
                </Switch>

            </Router>
        );
    }
}

export default App;