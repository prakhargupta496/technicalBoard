import React from 'react';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './item.module.css';

function Entry(props) {
    return (
        <Col md={4} className={Styles.entry}>
            <div className={Styles.wrapper}>
                <img src={props.src} className={Styles.image} alt={props.description} />
                <motion.div className={Styles.overlay} whileHover={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                }}>
                    <div className={Styles.content}>
                        <h1>Lorem Ipsum</h1>
                    </div>
                </motion.div>
            </div>
        </Col>
    );
}

export default Entry;