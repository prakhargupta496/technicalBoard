import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Styles from './grid.module.css';
import Spinner from '../common/Effects/Spinner';
import Item from './Item';

function Grid(props) {
    const items = props.children.map(image => {
        return (<Item key={image.description} alt={image.description} src={image.src} />);
    });

    return (
        <Container fluid className={Styles.grid}>
            { this.state ? (
                <Row>
                    {items}
                </Row>
            ) : (
                    <Spinner />
                )
            }

        </Container>
    );
}

export default Grid;