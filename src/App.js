import React from 'react';
import Avant from './pages/Avant';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            // <Navigation />
            <Avant />
        );
    }
}

export default App;

// function navLinkTuple(text, link, page) {
//     return {
//         [text]: link,
//         component: page
//     };
// }

// this.navLinks = [
//     navLinkTuple("Home", "/", <Avant />),
//     navLinkTuple("Resources", "/resources", <React.Fragment />),
//     navLinkTuple("Events", "/events", <React.Fragment />),
//     navLinkTuple("Gallery", "/gallery", <h1>Hello</h1>),
//     navLinkTuple("Coordinators", "/#coordinators", <React.Fragment />),
//     navLinkTuple("Contact Us", "/#contact", <React.Fragment />)
// ];