import React from 'react';
import Container from 'react-bootstrap/Container';
import Link from './Link';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <Container fluid>
                <Link>
                    Learn More
                </Link>
            </Container>
        );
    }
}

export default Header;