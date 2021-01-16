import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Entry from './Entry';
import Styles from './grid.module.css';

function Grid(props) {
    return (
        <Container fluid>
            <Row>
                {
                    props.children.map(item => {
                        return (
                            <Entry src={item} />
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default Grid;