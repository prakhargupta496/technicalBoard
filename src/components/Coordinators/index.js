import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Section from '../common/Section';
import Wave from '../common/Effects/Wave';
import Styles from './coordinators.module.css';

class Coordinators extends React.Component {
    constructor(props) {
        super(props);

        this.state = [
            "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
            "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
            "https://images.unsplash.com/photo-1609516002784-4eca99ebe39f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
            "https://images.unsplash.com/photo-1606040185180-1f38c31e74a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            "https://images.unsplash.com/photo-1610288291998-366d446646cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80",
            "https://images.unsplash.com/photo-1566875276423-ab730125662f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
        ];
    }

    render() {
        const sectionColour = "#73cdff";

        return (
            <Section>
                <Wave type="hex" color={sectionColour}/>
                <div className={Styles.coordinatorsWrapper} style={{
                    backgroundColor: sectionColour,
                }}>
                    <SectionHeader>Coordinators</SectionHeader>
                </div>
            </Section>
        );
    }
}

export default Coordinators;