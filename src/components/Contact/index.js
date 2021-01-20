import React from 'react';
import Section from '../common/Section';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import Map from '../common/Map/Map';
import Styles from './contact.module.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section id="contactUs" style={this.props.style}>
                <Container fluid>
                    <Row>
                        <Col className={Styles.form} md={6}>
                            <SectionHeader>Contact Us</SectionHeader>
                            <Form>
                                <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Name" />
                                <Form.Control className={`${Styles.input} ${Styles.small}`} type="email" placeholder="Your E-Mail" />
                                <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Subject" />
                                <Form.Control className={`${Styles.input} ${Styles.big}`} as="textarea" rows={5} placeholder="Message" />
                                <Button variant="primary">Primary</Button>
                            </Form>
                        </Col>
                        <Col className={Styles.mapContainer}>
                            <Map className={Styles.map}/>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Contact;