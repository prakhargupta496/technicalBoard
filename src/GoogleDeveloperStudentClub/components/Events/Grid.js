import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';

function Grid(props) {
    const items = props.data.map(item => (
            <Item key={item.title} data={item} />
    ));

    return (
        <Container fluid>
            <Row>
                {items}
            </Row>
        </Container>
    );
}

export default Grid;