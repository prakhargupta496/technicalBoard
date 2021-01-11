import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from './Link';
import img from './images/construction.svg';
import styles from './css/header.module.css';

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
        if(this.name === undefined) {
            headings = (
                <h1 className = {styles.heading}>
                    {this.altName}
                </h1>); 
        }
        else if(this.altName === undefined) {
            headings = (
                <h1 className = {styles.heading}>
                    {this.name}
                </h1>);
        }
        else {
            headings = (
                <React.Fragment>
                    <h1 className = {styles.heading}>
                        {this.name}
                    </h1>
                    <h1 className = {styles.heading}>
                        {`(${this.altName})`}
                    </h1>
                </React.Fragment>
            );
        }

        //Return the Component
        return (
            <Container fluid className = {styles.header}>
                <Row>
                    <Col>
                        <div className = {styles.headingContainer}>
                            {headings}
                        </div>
                        <div className = {styles.link}>
                            <Link link = {this.link}>
                                Learn More
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <img className = {styles.image} src = {img} alt = "Under Construction"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Header;