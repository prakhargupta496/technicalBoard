import React from 'react';
import Section from '../common/Section';
import { Container, Row, Col, Image } from 'react-bootstrap';
import People from './images/people.svg';
import Styles from './about.module.css';

function About(props) {
    return (
        <Section id={props.id}>
            <Container fluid className={Styles.about}>
                <Row>
                    <Col md={6}>
                        <Image src={People} className={Styles.image} />
                    </Col>
                    <Col className={Styles.content}>
                        <h1 className={Styles.title}>About Us</h1>
                        <p className={Styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus ullamcorper erat, vel scelerisque odio sagittis nec. Ut condimentum, urna vitae tincidunt vehicula, metus orci vulputate velit, vel tempor magna erat quis augue. Donec in consectetur lorem. Nullam dolor massa, tempus eu vestibulum a, tempus at ex. Nulla pulvinar, erat ac varius molestie, lectus ex tempor lectus, ut consectetur dolor turpis id ante. Donec id hendrerit ante. Aliquam at nisl nisl.</p>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default About;