import React from 'react';
import Avant from './pages/Avant';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';

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
                    <Route exact path="/">
                        <Avant />
                    </Route>
                    <Route exact path="/resources">
                        <h1>Resources</h1>
                    </Route>
                    <Route exact path="/events">
                        <h1>Events</h1>
                    </Route>
                    <Route exact path="/gallery" >
                        <h1>Gallery</h1>
                    </Route>
                    <Route exact path="/coordinators">
                        <h1>Coordinators</h1>
                    </Route>
                    <Route exact path="/contact">
                        <h1>Contact Us</h1>
                    </Route>
                </Switch>

            </Router>
        );
    }
}

export default App;