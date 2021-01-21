import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Styles from './item.module.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <Col md={4} className={Styles.event}>
                <Card className={Styles.container} variant="flush">
                    <Card.Img variant="top" src={this.data.image} className={Styles.image} />
                    <Card.Body className={Styles.content}>
                        <Card.Title>{this.data.title}</Card.Title>
                        <Card.Body>{this.data.description}</Card.Body>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

export default Item;