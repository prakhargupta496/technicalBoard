import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Styles from './card.module.css';
import { FaLinkedin as LinkedIn, FaGithubSquare as Github, FaGlobe as Globe, FaInstagram as Instagram, FaFacebookSquare as Facebook } from 'react-icons/fa';

function Member(props) {
    const data = props.children;

    return (
        <Col md={6} >
            <Container fluid>
                <Card className={Styles.card}>
                    <Card.Body className={Styles.titleContainer} >
                        <Card.Title className={Styles.title} >{data.title}</Card.Title>
                        <Card.Title className={Styles.subTitle} >{data.subTitle}</Card.Title>
                    </Card.Body>
                    <Card.Img className={Styles.image} variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Text className={Styles.content} >{data.content}</Card.Text>
                    </Card.Body>
                    <Links />
                </Card>
            </Container>
        </Col>
    );
}

function Link(props) {
    return (
        <Col as="a" href="#" target="_blank">
            {props.children}
        </Col>
    );
}

function Links(props) {
    return (
        <Card.Body>
            <Container fluid>
                <Row>
                    <Link>
                        <Instagram className={Styles.icon} />
                    </Link>
                    <Link>
                        <Github className={Styles.icon} />
                    </Link>
                    <Link>
                        <Facebook className={Styles.icon} />
                    </Link>
                    <Link>
                        <Globe className={Styles.icon} />
                    </Link>
                    <Link>
                        <LinkedIn className={Styles.icon} />
                    </Link>
                </Row>
            </Container>
        </Card.Body>
    );
}

export default Member;