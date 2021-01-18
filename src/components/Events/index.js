import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Link from '../common/Link';
import EventsList from './EventsList';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <SectionHeader>Events</SectionHeader>
                <EventsList />
                <Link href="#" small>Load More</Link>
            </section>
        );
    }
}

export default Events;