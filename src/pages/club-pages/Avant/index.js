import React from 'react';
import Header from '../../../components/common-sections/Header';
import About from '../../../components/club-page/About';
import Gallery from '../../../components/club-page/Gallery';
import Events from '../../../components/club-page/Events';
import Coordinators from '../../../components/club-page/Coordinators';
import Contact from '../../../components/common-sections/Contact';
import Wave from '../../../components/common-components/Effects/Wave';
/* Page Specific Images */
import Background from './images/background.svg';
import HeaderImage from './images/header.svg';

/* Colour Scheme */
import './avant.module.css';

function Avant() {
    const sectionColour = "#73cdff";

    return ( 
        <React.Fragment>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Header data={{
                name: "< Avant", 
                altName: 'alt = "Programming Club" />',
                link: "#",
                linkText: "#",
                image: HeaderImage,
                bg: Background
            }} />
            <About id="about" />
            <Events id="events" small href="/avant/events" />
            <Gallery id="gallery" small href="/avant/gallery" />
            <Wave type="hex" color={sectionColour}/>
            <Coordinators id="coordinators" withHeading style = {{
                backgroundColor: sectionColour,
            }} />
            <Contact id="contact" withMap={false} style = {{
                backgroundColor: sectionColour,
            }} />
        </React.Fragment>
    );
}

export default Avant;