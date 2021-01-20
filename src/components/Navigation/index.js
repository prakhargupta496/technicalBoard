import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Brand from '../images/avant.svg';
import { NavLink, Link } from "react-router-dom";
import Styles from './nav.module.css';

function Navigation() {
    return (
        <Navbar collapseOnSelect variant="light" bg="light" expand="lg" className={Styles.nav} >
            <Navbar.Brand as={Link} to="/">
                <Image src={Brand} className={`${Styles.image} d-inline-block`} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="club-nav" />

            <Navbar.Collapse id="club-nav" activeKey="/home">
                <Nav className="ml-auto">

                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/resources">Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/events">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/hallOfFame">Hall Of Fame</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/#contactUs">Contact Us</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>

        </Navbar >
    );
}

export default Navigation;