import React from 'react';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './grid.module.css';

function Entry(props) {
    return (
        <Col md={4} key={props.img} className={Styles.entry}>
            <div className={Styles.wrapper}>
                <img src={props.src} className={Styles.image} alt={props.description} />
                <motion.div className={Styles.overlay} whileHover={{
                    opacity: 1,
                    backgroundColor: "#000000",
                    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    transition: { duration: 0.2 },
                }}>
                    <div className={Styles.content}>

                    </div>
                </motion.div>
            </div>
        </Col>
    );
}

export default Entry;