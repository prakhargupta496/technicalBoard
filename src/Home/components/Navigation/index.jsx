import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import Styles from './nav.module.css';

function Navigation(props) {
    return (
        <Navbar collapseOnSelect variant="light" bg="light" expand="lg" className={Styles.nav} >
             {/* Brand */}
            <Navbar.Brand as={NavHashLink} to="/">
                <Image src="" className={`${Styles.image} d-inline-block`} alt="Logo" />
            </Navbar.Brand>
            {/* Toggler */}
            <Navbar.Toggle aria-controls="club-nav" />
            {/* Nav Bar */}
            <Navbar.Collapse id="club-nav">
                <Nav className="ml-auto">

                    <Nav.Item>
                        <Nav.Link smooth as={NavHashLink} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={NavHashLink} to="/#about">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={NavHashLink} to="/past-council">Past Council</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={NavHashLink} to="/#clubs">Clubs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link smooth as={NavHashLink} to="/#contact">Contact Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://github.com/mynameisankit/technicalBoard/wiki" target="_blank">Documentation</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>

        </Navbar >
    );
}

export default Navigation;