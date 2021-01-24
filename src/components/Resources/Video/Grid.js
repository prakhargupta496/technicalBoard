import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Video from './Video';

function Grid(props) {
    const array = [
        "https://www.youtube.com/embed/eylKmmp9-5A",
        "https://www.youtube.com/embed/Y7W6-4CvjzQ"
    ];

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Video src={array[0]}/>
                </Col>
                <Col>
                    <Video src={array[1]}/>
                </Col>
                <Col>
                    <Video src={array[1]}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Grid;