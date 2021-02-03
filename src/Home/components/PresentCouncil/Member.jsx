import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Styles from './member.module.css';

function Member(props) {
    const data = props.children;

    return (
        <Row className={Styles.row}>
            <Col xs={12} >
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <Image className={Styles.image} src={data.image} />
                        </Col>
                        <Col>
                            <h1>{data.title}</h1>
                            <h4>{data.subTitle}</h4>
                            <p className={Styles.content}>{data.content}</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Member;