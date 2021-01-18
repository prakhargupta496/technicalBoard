import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Wave from '../common/Effects/Wave';
import Grid from './Grid';

class Coordinators extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sectionColour = "#73cdff";

        return (
            <Section>
                <Wave type="hex" color={sectionColour} anim/>
                <div style={{
                    backgroundColor: sectionColour,
                }}>
                    <SectionHeader>Coordinators</SectionHeader>
                    <Grid />
                </div>
            </Section>
        );
    }
}

export default Coordinators;