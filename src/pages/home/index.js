import React from 'react';
import Header from '../../components/common-sections/Header';
import About from '../../components/home/About';
import Clubs from '../../components/home/Clubs';
import Contact from '../../components/common-sections/Contact';
import './home.module.css';
//Images
import Image from './images/header.svg';

function Home() {
    return (
        <React.Fragment>
            <Header data={{
                name: "Technical Board", 
                altName: 'Indian Institute of Information Technology Guwahati',
                link: "#",
                linkText: "Our Clubs",
                image: Image
            }}/>
            <About id="about"/>
            <Clubs id="clubs" />
            <Contact id="contact" WithMap/>
        </React.Fragment>
    );
}

export default Home;