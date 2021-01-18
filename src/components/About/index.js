import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Section from '../common/Section';
import heading from './images/aboutHeading.svg';
import image from './images/about.svg';
import Styles from './about.module.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth
        });
    }

    render() {
        return (
            <Section>
                <Container fluid className={Styles.aboutUs}>
                    {this.state.width > 1000 &&
                        (<Row>
                            <Col className={`col-3`}>
                                <Image src={heading} className={Styles.heading} />
                            </Col>
                            <Col>
                                <Image src={image} className={Styles.image}></Image>
                                <p className={Styles.content}>
                                    Avant (Programming Club) is the officially registered group in the Indian Institute of Information Technology Guwahati. The Club Works aim to accelerate learning and impart knowledge in various fields like Competitive Programming,  Web Development, App Development and Open Source. The Club also organizes various activities so they can improve and make the overall journey fun.
                            </p>
                            </Col>
                        </Row>)
                    }
                    {this.state.width <= 1000 &&
                        (<div>
                            <Image src={heading} className={Styles.heading} style={{ transform: 'rotate(90deg)' }} />
                            <Image src={image} className={Styles.image}></Image>
                            <p className={Styles.content}>
                                Avant (Programming Club) is the officially registered group in the Indian Institute of Information Technology Guwahati. The Club Works aim to accelerate learning and impart knowledge in various fields like Competitive Programming,  Web Development, App Development and Open Source. The Club also organizes various activities so they can improve and make the overall journey fun.
                        </p>
                        </div>)
                    }
                </Container>
            </Section>
        );
    }
}

export default About;