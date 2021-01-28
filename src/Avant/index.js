import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AvantPages from './pages';
import './avant.module.css';

function Avant(props) {
    return (
        <Switch>
            <Route path="/avant/event" component={AvantPages.Event} />
            <Route path="/avant/gallery" component={AvantPages.Gallery} />
            <Route path="/avant/past-coordinators" component={AvantPages.PastCoordinators} />
            <Route path="/avant/resources" component={AvantPages.Resources} />
            <Route path="/avant" component={AvantPages.Home} />
        </Switch>
    );
}

export default Avant;