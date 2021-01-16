import React from 'react';
import { Col } from 'react-bootstrap';
import Styles from './grid.module.css';

function Entry(props) {
    return (
        <Col md={4} key={props.img}>
            <div className={Styles.container}>
                <img src={props.src} className={Styles.image} alt={props.description}/>
            </div>
        </Col>
    );
}

export default Entry;