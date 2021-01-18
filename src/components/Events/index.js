import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Link from '../common/Link';
import EventsList from './EventsList';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Section>
                <SectionHeader>Events</SectionHeader>
                <EventsList />
                <Link href="#" small>Load More</Link>
            </Section>
        );
    }
}

export default Events;