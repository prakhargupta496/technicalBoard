import React from 'react';
import Header from './components/main/Header';
import Navigation from './components/common/Navigation';
import About from './components/main/About';
import Gallery from './components/main/Gallery';

function Avant() {
    return ( 
        <div>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Navigation />
            <Header name = "Avant" altName = "Programming Club" link = "#"/>
            <About />
            <Gallery />
        </div>
    );
}

export default Avant;