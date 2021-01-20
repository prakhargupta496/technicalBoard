import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Coordinators from '../components/Coordinators';
import Contact from '../components/Contact';
import Wave from '../components/common/Effects/Wave';

function Avant() {
    const sectionColour = "#73cdff";

    return ( 
        <div>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Header name = "< Avant" altName = 'alt = "Programming Club" />' link = "#" />
            <About />
            <Events small />
            <Gallery small />
            <Wave type="hex" color={sectionColour} anim />
            <Coordinators withHeading style = {{
                backgroundColor: sectionColour,
            }} />
            <Contact style = {{
                backgroundColor: sectionColour,
            }} />
        </div>
    );
}

export default Avant;