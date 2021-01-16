import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
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
            <section>
                <Container fluid className={Styles.aboutUs}>
                    {this.state.width > 1000 &&
                        (<Row>
                            <Col className={`col-3`}>
                                <Image src={heading} className={Styles.heading} />
                            </Col>
                            <Col>
                                <Image src={image} className={Styles.image}></Image>
                                <p className={Styles.content}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat risus non lectus sollicitudin, eget commodo tortor consectetur. Donec ornare velit ac efficitur efficitur. Morbi eu metus eu dui dictum dignissim at vehicula nunc. Ut ac ornare urna. Phasellus purus enim, viverra in feugiat sit amet, ullamcorper ac eros. Suspendisse potenti. Donec ut malesuada risus. Praesent pulvinar, erat non efficitur gravida, sapien orci ultricies ligula, quis lacinia metus ligula non tellus. Mauris quis massa vitae lectus tempor eleifend eget eget lectus. Donec finibus efficitur ultrices. Sed scelerisque tortor eget nunc semper, eu scelerisque neque blandit. Vivamus nec bibendum enim.
                            </p>
                            </Col>
                        </Row>)
                    }
                    {this.state.width <= 1000 &&
                        (<div>
                            <Image src={heading} className={Styles.heading} style={{ transform: 'rotate(90deg)' }} />
                            <Image src={image} className={Styles.image}></Image>
                            <p className={Styles.content}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat risus non lectus sollicitudin, eget commodo tortor consectetur. Donec ornare velit ac efficitur efficitur. Morbi eu metus eu dui dictum dignissim at vehicula nunc. Ut ac ornare urna. Phasellus purus enim, viverra in feugiat sit amet, ullamcorper ac eros. Suspendisse potenti. Donec ut malesuada risus. Praesent pulvinar, erat non efficitur gravida, sapien orci ultricies ligula, quis lacinia metus ligula non tellus. Mauris quis massa vitae lectus tempor eleifend eget eget lectus. Donec finibus efficitur ultrices. Sed scelerisque tortor eget nunc semper, eu scelerisque neque blandit. Vivamus nec bibendum enim.
                        </p>
                        </div>)
                    }
                </Container>
            </section>
        );
    }
}

export default About;