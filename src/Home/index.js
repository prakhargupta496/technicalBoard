import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPages from './pages';
import './home.module.css';

function Home(props) {
    return (
        <Switch>
            <Route path="/#about" />
            <Route path="/#clubs"/>
            <Route path="/#contact"/>
            <Route path="/past-council"/>
            <Route exact path="/" component={MainPages.Home} />
        </Switch>
    );
}

export default Home;