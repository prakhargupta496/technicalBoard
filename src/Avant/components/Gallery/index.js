import React from 'react';
import Link from '../common/Link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Grid from './Grid';
import { NavHashLink } from 'react-router-hash-link';

function Gallery(props) {
    return (
        <Section id={props.id} style={props.style}>
            <SectionHeader>Gallery</SectionHeader>
            <Grid />
            {   props.small &&
                <Link as={NavHashLink} href={props.href} small>Load More</Link>
            }
        </Section>
    );
}

export default Gallery;