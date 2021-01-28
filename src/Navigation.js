import React from 'react';
import HomeNavigation from './Home/components/Navigation';
import AvantNavigation from './Avant/components/Navigation';

function Navigation(props) {
    const page = props.page;

    if(page === 'avant') {
        return <AvantNavigation />
    }
    else {
        return <HomeNavigation />
    }
}

export default Navigation;