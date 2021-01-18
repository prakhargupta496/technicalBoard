import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './item.module.css';
import { FaFacebookSquare as Facebook, FaLinkedin as LinkedIn, FaInstagram as Instagram, FaGithub as GitHub, FaGlobe as Globe } from "react-icons/fa";

function Entry(props) {
    return (
        <Col md={4} className={Styles.entry}>
            <Card className={Styles.card}>
                <Card.Img src={props.src} alt="Card image" className={Styles.image} />
                <Card.ImgOverlay as={motion.div} className={Styles.overlay} whileHover={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                }}>
                    <Card.Body className={Styles.content}>
                        <Card.Title as="h1" className={Styles.heading}>Card title</Card.Title>
                        <ListGroup horizontal>
                            <ListGroup.Item>
                                <Facebook className={Styles.icon}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Instagram className={Styles.icon}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <LinkedIn className={Styles.icon}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <GitHub className={Styles.icon}/>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Globe className={Styles.icon}/>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default Entry;