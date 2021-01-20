import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Link from '../common/Link';
import Grid from './Grid';

class Events extends React.Component {
    render() {
        return (
            <Section style={this.props.style}>
                <SectionHeader>Events</SectionHeader>
                <Grid />
                {   this.props.small &&
                    (<Link href="#" small>Load More</Link>)
                }
            </Section>
        );
    }
}

export default Events;