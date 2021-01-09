import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Brand from '../Images/avant.svg';
import Styles from './css/nav.module.css';

function Navigation(props) {
    return (
        <Navbar collapseOnSelect variant="light" bg="light" expand="lg" fixed="top" className={Styles.nav}>

            <Navbar.Brand href="#">
                <img src={Brand} className={`${Styles.image} d-inline-block`} alt="Logo"/>
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="club-nav"/>

            <Navbar.Collapse id="club-nav" activeKey="/home">

                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Coordinators</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;