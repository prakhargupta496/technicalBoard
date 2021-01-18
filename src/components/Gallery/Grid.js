import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Styles from './grid.module.css';
import Item from './Item';

function Grid(props) {
    return (
        <Container fluid className={Styles.grid}>
            <Row>
                {
                    props.children.map(item => {
                        return (
                            <Item key={item.description} src={item.image} />
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default Grid;