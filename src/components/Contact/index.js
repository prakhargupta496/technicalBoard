import React from 'react';
import Section from '../common/Section';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader';
import Map from '../common/Map/Map';
import Styles from './contact.module.css';

//Firebase
import firebase from '../../firebase';

class Contact extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "", 
            showAlert: false
        }

        this.pushData = this.pushData.bind(this);
    }
    
    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);

    }

    getSubset(obj){
        const {name, email, subject, message} = obj;
        return {name, email, subject, message};
    }

    async pushData(){
        const db = firebase.firestore();
        let obj = this.state;
        let dataObj = this.getSubset(obj);

        if(!this.validateEmail(obj.email)){
            this.setState({showAlert: true});
        }
        else{
            this.setState({
                showAlert: false,
                name: "",
                email: "",
                subject: "",
                message: ""
            });
            const res = await db.collection('contact').add(dataObj);
        }
    }

    render() {
        const emailAlert = <Alert variant="danger">Wrong Email! Please enter correct email</Alert>;
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
                        {/* Email Validation Alert */}
                        {this.state.showAlert && emailAlert}
                        <Form.Control className={`${Styles.input} ${Styles.small}`} type="text" placeholder="Subject" value={this.state.subject} onChange={(e) => this.setState({subject: e.target.value})} />
                        <Form.Control className={`${Styles.input} ${Styles.big}`} as="textarea" rows={5} placeholder="Message" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} />
                        <Button className={Styles.button} onClick={this.pushData}>Submit</Button>
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