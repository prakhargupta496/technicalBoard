import React from 'react';
import Link from '../common/Link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Grid from './Grid';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                image: "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
                description: "Event1"
            },
            {
                image: "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
                description: "Event2"
            },
            {
                image: "https://images.unsplash.com/photo-1609516002784-4eca99ebe39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
                description: "Event3"
            },
            {
                image: "https://images.unsplash.com/photo-1606040185180-1f38c31e74a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                description: "Event4"
            },
            {
                image: "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
                description: "Event5"
            },
            {
                image: "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
                description: "Event6"
            }
        ];
    }

    render() {
        return (
            <Section style={this.props.style}>
                <SectionHeader>Gallery</SectionHeader>
                <Grid>
                    {this.state}
                </Grid>
                {   this.props.small &&
                    <Link href="#" small>Load More</Link>
                }
            </Section>
        );
    }
}

export default Gallery;