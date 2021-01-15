import React from 'react';
import SectionHeader from '../../common/SectionHeader';
import Link from '../../common/Link';
import Styles from './events.module.css';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <SectionHeader>Events</SectionHeader>
                <Link href="#" small>Load More</Link>
            </section>
        );
    }
}

export default Events;