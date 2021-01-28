import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import Styles from './nav.module.css';
//Logos
import AvantLogo from './logos/avant.svg';

function Navigation(props) {
    let links, brand;
    const page = props.path;

    if (page === "avant" || page === "mavericks" || page === "gdsc" || page === "robotics") {
        links = (
            <React.Fragment>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to="/">Technical Board</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}`}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/#about`}>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/#events`}>Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/#gallery`}>Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/resources`}>Resources</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/projects`}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/#coordinators`}>Coordinators</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to={`/${page}/#contact`}>Contact Us</Nav.Link>
                </Nav.Item>
            </React.Fragment>
        );

        if (page === "avant") {
            brand = {
                link: page,
                src: AvantLogo
            };
        }
    }
    else {
        links = (
            <React.Fragment>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to="/#about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link smooth as={NavHashLink} to="/#council">Council</Nav.Link>
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
            </React.Fragment>
        );

        brand = {
            link: "/",
            src: ""
        };
    }

    return (
        <Navbar collapseOnSelect variant="light" bg="light" expand="lg" className={Styles.nav} >
            <Navbar.Brand as={NavHashLink} to={brand.link}>
                <Image src={brand.src} className={`${Styles.image} d-inline-block`} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="club-nav" />

            <Navbar.Collapse id="club-nav">
                <Nav className="ml-auto">
                    {links}
                </Nav>
            </Navbar.Collapse>

        </Navbar >
    );
}

export default Navigation;