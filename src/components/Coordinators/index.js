import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Grid from './Grid';

class Coordinators extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Section style={this.props.style}>
                {   this.props.withHeading &&
                    <SectionHeader>Coordinators</SectionHeader>
                }
                <Grid />
            </Section>
        );
    }
}

export default Coordinators;