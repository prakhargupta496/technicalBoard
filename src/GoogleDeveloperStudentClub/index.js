import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GDSCPages from './pages';
import './gdsc.module.css';

function GDSC(props) {
    return (
        <Switch>
            <Route path="/gdsc/event" component={GDSCPages.Event} />
            <Route path="/gdsc/gallery" component={GDSCPages.Gallery} />
            <Route path="/gdsc/past-coordinators" component={GDSCPages.PastCoordinators} />
            <Route path="/gdsc/resources" component={GDSCPages.Resources} />
            <Route path="/gdsc" component={GDSCPages.Home} />
        </Switch>
    );
}

export default GDSC;