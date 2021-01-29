import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Styles from './grid.module.css';
import Spinner from '../common/Effects/Spinner';
import Item from './Item';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {

        // <Item key={item.description} src={item.image} />

        return (
            <Container fluid className={Styles.grid}>
                { this.state ? (
                    <Row></Row>
                ) : (
                        <Spinner />
                    )
                }

            </Container>
        );
    }
}

export default Grid;