import React from 'react';
import Section from '../common/Section';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import Map from '../common/Map/Map';
import Styles from './contact.module.css';

class Contact extends React.Component {
    
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this);
    }
    state = { 
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    render() { 
        return (
        <Section id="contactUs" style={this.props.style}>
        <Container fluid>
            <Row>
                <Col className={Styles.form} md={6}>
                    <SectionHeader>Contact Us</SectionHeader>
                    <Form>
                        <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Name" value={this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value})} />
                        <Form.Control className={`${Styles.input} ${Styles.small}`} type="email" placeholder="Your E-Mail" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                        <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})} />
                        <Form.Control className={`${Styles.input} ${Styles.big}`} as="textarea" rows={5} placeholder="Message" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} />
                        <Button className={Styles.button}>Submit</Button>
                    </Form>
                </Col>
                <Col className={Styles.mapContainer}>
                    <SectionHeader>Find Us Here</SectionHeader>
                    <Map className={Styles.map} />
                </Col>
            </Row>
        </Container>
    </Section>);
    }
}
export default Contact;