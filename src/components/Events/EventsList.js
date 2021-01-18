import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';

class EventsList extends React.Component {
    constructor(props) {
        super(props);

        //Temporary (Just to develop)
        this.state = [
            {
                title: "Introduction to Web Dev 2021",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et vehicula felis. Nullam aliquet libero sit amet scelerisque finibus. Donec commodo iaculis leo vel molestie. Aliquam erat volutpat. Quisque blandit vitae lectus vitae euismod. Etiam malesuada nisl vel ipsum congue ullamcorper. Sed egestas elementum ex, ut varius orci ultricies sit amet. Donec aliquet volutpat lectus hendrerit egestas."
            },
            {
                title: "Introduction to CP",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            },
            {
                title: "CP Demo",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            },
            {
                title: "CP Demo",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            },
            {
                title: "CP Demo",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            },
            {
                title: "CP Demo",
                image: "https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg",
                description: "Introduction"
            }
        ];
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {
                        this.state.map(item => {
                            return <Item key={item.title} data={item}/>;
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default EventsList;