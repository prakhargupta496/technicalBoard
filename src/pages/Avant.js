import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Events from '../components/Events';

function Avant() {
    return ( 
        <div>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Header name = "< Avant" altName = 'alt = "Programming Club" />' link = "#"/>
            <About />
            <Gallery />
            <Events />
        </div>
    );
}

export default Avant;