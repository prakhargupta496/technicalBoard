import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './item.module.css';
import Icons from './Icons';

function Entry(props) {
    return (
        <Col md={4} className={Styles.entry}>
            <Card className={Styles.card}>
                <Card.Img src={props.data.image} alt="Card image" className={Styles.image} />
                <Card.ImgOverlay as={motion.div} className={Styles.overlay} whileHover={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                }}>
                    <Card.Body className={Styles.content}>
                        <Card.Title as="h1" className={Styles.heading}>{props.data.name}</Card.Title>
                        <Card.Text>
                            {props.data.caption}
                        </Card.Text>
                        <Icons />
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default Entry;