import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Styles from './gallery.module.css';
import Link from '../../common/Link';
import SectionHeader from '../../common/SectionHeader';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
            "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
            "https://images.unsplash.com/photo-1609516002784-4eca99ebe39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
            "https://images.unsplash.com/photo-1606040185180-1f38c31e74a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
            "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
        ];
    }

    render() {
        const list = this.state.map(img => {
            return (
                <Col md={4} key={img}>
                    <div className={Styles.container}>
                        <img src={img} className={Styles.image}/>
                    </div>
                </Col>
            );
        });

        return (
            <section className={Styles.gallery}>
                <SectionHeader>Gallery</SectionHeader>
                <Container fluid>
                    <Row>
                        {list}
                     </Row>
                </Container>
                <Link href="#" small>Load More</Link>
            </section>
        );
    }
}

export default Gallery;