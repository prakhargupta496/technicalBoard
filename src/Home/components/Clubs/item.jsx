import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Link from './link';
import Styles from './item.module.css';

function Item(props) {
    const data = props.children;

    return (
        <Col md={12} className={Styles.Container}>
            <Container fluid>
                <Row className={Styles.item}>
                    <Col md={5} className={`${Styles.Col} ${Styles.imageContainer}`}>
                        <Image className={Styles.image} src={data.src} alt={data.title} />
                    </Col>
                    <Col className={`${Styles.Col} ${Styles.contentContainer}`}>
                        <div className={Styles.content}>
                            <h1 className={Styles.title}>{data.title}</h1>
                            {
                                data.description ? (
                                    <p className={Styles.description}>{data.description}</p>
                                ) : (
                                        <p className={Styles.description}>Loading...</p>
                                    )
                            }
                        </div>
                        <Container fluid className={Styles.linksContainer}>
                            <Row>
                                <Link href={data.link}>Visit Website</Link>
                                <Link href={`${data.link}/projects`}>Projects</Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}

export default Item;