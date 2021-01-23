import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Item from './Item';
import Loading from '../common/Effects/Spinner';
//Firebase
import firebase from '../../firebase';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        //Hols all the data fetched from the Database
        this.state = null;
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('events').where('name', '==', 'avant').get().then(snapshot => {
            const content = snapshot.docs[0].data().list;

            const newState = content.map(event => (
                {
                    title: event.name,
                    image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                    description: "Introduction"
                }
            ));

            this.setState(newState);
        });
    }

    render() {
        let items = [];

        for (let i in this.state) {
            items.push(
                <Item key={i} data={this.state[i]} />
            );
        }

        return (
            <Container fluid>
                { this.state ? (
                        <Row>
                            {items}
                        </Row>
                    ) : (
                        <Loading />
                    )
                }
            </Container>
        );
    }
}

export default Grid;