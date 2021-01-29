import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Section from '../common/Section';
import heading from './images/aboutHeading.svg';
import image from './images/about.svg';
import Spinner from '../common/Effects/Spinner';
import Styles from './about.module.css';
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
        db.collection('about').get().then(snapshot => {
            this.setState(state => ({
                width: state.width,
                content: snapshot.docs[0].data()['content']
            }));
        });
    }

    render() {
        let headingStyle;
        if(this.state.width <= 600) {
            headingStyle = {
                transform: "rotate(90deg)"
            };
        }
        else {
            headingStyle = null;
        }

        return (
            <Section id={this.props.id}>
                <Container fluid className={Styles.aboutUs}>
                    <Row>
                        <Col md={3}>
                            <Image src={heading} className={Styles.heading} style={headingStyle}/>
                        </Col>
                        <Col>
                            <Image src={image} className={Styles.image}></Image>
                            {(this.state.content !== '') ?
                                (
                                    <p className={Styles.content}>
                                        {this.state.content}
                                    </p>
                                ) : (
                                    <Spinner />
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