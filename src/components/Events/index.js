import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Link from '../common/Link';
import Grid from './Grid';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section>
                <SectionHeader>Events</SectionHeader>
                <Grid />
                <Link href="#" small>Load More</Link>
            </Section>
        );
    }
}

export default Events;