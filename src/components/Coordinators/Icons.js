import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare as Facebook, FaInstagram as Instagram, FaLinkedin as LinkedIn, FaGithub as GitHub, FaGlobe as Globe } from "react-icons/fa";
import Styles from './icons.module.css';

class Icons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={Styles.wrapper}>
                <Container fluid>
                    <Row>
                        <Col as="a" href="#">
                            <Facebook className={Styles.icons} />
                        </Col>
                        <Col as="a" href="#">
                            <Instagram className={Styles.icons} />
                        </Col>
                        <Col as="a" href="#">
                            <LinkedIn className={Styles.icons} />
                        </Col>
                        <Col as="a" href="#">
                            <GitHub className={Styles.icons} />
                        </Col>
                        <Col as="a" href="#">
                            <Globe className={Styles.icons} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Icons;