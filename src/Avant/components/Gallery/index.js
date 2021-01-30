import React from 'react';
import Link from '../common/Link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Grid from './Grid';
import { NavHashLink } from 'react-router-hash-link';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: []
        };
    }

    render() {
        return (
            <Section id={props.id} style={props.style}>
                <SectionHeader>Gallery</SectionHeader>
                <Grid>
                    {this.state.image}
                </Grid>
                {   props.small &&
                    <Link as={NavHashLink} href={props.href} small>Load More</Link>
                }
            </Section>
        );
    }
}

export default Gallery;