import React from 'react';
import Link from '../../common-components/Link';
import Section from '../../common-components/Section';
import SectionHeader from '../../common-components/SectionHeader';
import Grid from './Grid';

function Gallery(props) {
    return (
        <Section id={props.id} style={props.style}>
            <SectionHeader>Gallery</SectionHeader>
            <Grid />
            {   props.small &&
                <Link href="#" small>Load More</Link>
            }
        </Section>
    );
}

export default Gallery;