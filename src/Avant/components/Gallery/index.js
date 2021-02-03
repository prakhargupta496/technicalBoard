import React from 'react';
import Link from '../common/Link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Grid from './Grid';
import Spinner from '../common/Effects/Spinner';
import { NavHashLink } from 'react-router-hash-link';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
    }

    render() {
        return (
            <Section id={this.props.id} style={this.props.style}>
                <SectionHeader>Gallery</SectionHeader>
                {
                    this.state.image ? (
                        <Grid>
                            {this.state.image}
                        </Grid>
                    ) : (
                            <Spinner />
                    )
                }
                {   this.props.small &&
                    <Link as={NavHashLink} href={this.props.href} small>Load More</Link>
                }
            </Section>
        );
    }
}

export default Gallery;