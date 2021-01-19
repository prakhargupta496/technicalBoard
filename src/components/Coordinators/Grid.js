import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';

class Grid extends React.Component {
    constructor(props) {
        super(props);

        /* Temporary */
        this.state = [ 
            {
                image: "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
                name: "Name1",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
            },
            {
                image: "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
                name: "Name2",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
            },
            {
                image: "https://images.unsplash.com/photo-1609516002784-4eca99ebe39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
                name: "Name3",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
            },
            {
                image: "https://images.unsplash.com/photo-1606040185180-1f38c31e74a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                name: "Name4",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
            },
            {
                image: "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
                name: "Name5",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
            },
            {
                image: "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
                name: "Name6",
                caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut elementum odio, in tristique ante. Ut accumsan fringilla velit quis porta. Sed tellus nibh, dictum vel consectetur sit amet, tempus maximus ex. Pellentesque sit amet libero tristique, consequat mauris eu, posuere neque. Curabitur dapibus dolor nisi, sed tempus diam euismod et.",
            }
        ];
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {
                        this.state.map(item => {
                            return (
                                <Item key={item.title} data={item} />
                            );
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default Grid;