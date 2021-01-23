import React from 'react';
import Link from '../common/Link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Grid from './Grid';

function Gallery(props) {
    return (
        <Section style={props.style}>
            <SectionHeader>Gallery</SectionHeader>
            <Grid />
            {   props.small &&
                <Link href="#" small>Load More</Link>
            }
        </Section>
    );
}

export default Gallery;