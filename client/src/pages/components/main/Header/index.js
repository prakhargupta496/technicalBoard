import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from '../../common/Link';
import img from './images/construction.svg';
import Styles from './header.module.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.altName = props.altName;
        this.link = props.link;
    }

    render() {
        let headings;

        //Generate a Heading according to the values provided
        if (this.name === undefined) {
            headings = (
                <h1 className={Styles.heading}>
                    {this.altName}
                </h1>);
        }
        else if (this.altName === undefined) {
            headings = (
                <h2 className={Styles.subHeading}>
                    {this.name}
                </h2>);
        }
        else {
            headings = (
                <React.Fragment>
                    <h1 className={Styles.heading}>
                        {this.name}
                    </h1>
                    <h1 className={Styles.subHeading}>
                        {this.altName}
                    </h1>
                </React.Fragment>
            );
        }

        //Return the Component
        return (
            <section>
                <Container fluid className={Styles.header}>
                    <Row>
                        <Col>
                            <div className={Styles.headingContainer}>
                                {headings}
                            </div>
                            <Link href={this.link} big>#</Link>
                        </Col>
                        <Col>
                            <img className={Styles.image} src={img} alt="Under Construction" />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Header;