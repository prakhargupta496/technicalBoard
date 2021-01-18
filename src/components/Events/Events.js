import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Styles from './events.module.css';

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                title: "Introduction to Web Dev 2021",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            },
            {
                title: "Introduction to Web Dev 2021",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            },
            {
                title: "Introduction to Web Dev 2021",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            }
        ];
    }

    render() {
        const list = this.state.map(tuple => {
            return (
                <Col className={`col-12 ${Styles.item}`}>

                </Col>
            );
        });

        return (
            <Container>
                <Row>
                    
                </Row>
            </Container>
        );
    }
}