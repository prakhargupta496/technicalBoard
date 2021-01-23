import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Section from '../common/Section';
import heading from './images/aboutHeading.svg';
import image from './images/about.svg';
import Styles from './about.module.css';
import Loading from '../common/Effects/Spinner';
//Firebase
import firebase from '../../firebase';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            content: ''
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState(state => ({
            width: window.innerWidth,
            content: state.content
        }));
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('about').where('name', '==', 'avant').get().then(snapshot => {
            this.setState(state => ({
                width: state.width,
                content: snapshot.docs[0].data()['content']
            }));
        });
    }

    render() {
        return (
            <Section>
                <Container fluid className={Styles.aboutUs}>
                    <Row>
                        <Col className={`col-3`}>
                            <Image src={heading} className={Styles.heading} />
                        </Col>
                        <Col>
                            <Image src={image} className={Styles.image}></Image>
                            {(this.state.content !== '') ?
                                (
                                    <p className={Styles.content}>
                                        {this.state.content}
                                    </p>
                                ) : (
                                    <Loading />
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default About;