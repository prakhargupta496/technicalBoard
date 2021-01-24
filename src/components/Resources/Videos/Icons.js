import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShareAlt as Share } from "react-icons/fa";
import Styles from './icons.module.css';

function Icons(props) {
    return (
        <Container fluid className={Styles.container}>
            <Row>
                <Col>
                    <Share className={Styles.icon} />
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Icons;