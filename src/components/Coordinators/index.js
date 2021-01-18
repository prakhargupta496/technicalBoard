import React from 'react';
import SectionHeader from '../common/SectionHeader';
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
        let sectionColour = "var(--colour4)";

        const separator = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={sectionColour} fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,154.7C274.3,128,343,128,411,154.7C480,181,549,235,617,250.7C685.7,267,754,245,823,240C891.4,235,960,245,1029,224C1097.1,203,1166,149,1234,149.3C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>;

        return (
            <section>
                {separator}
                <div className={Styles.coordinatorsWrapper} style={{
                    backgroundColor: sectionColour,
                }}>
                    <SectionHeader>Coordinators</SectionHeader>
                </div>
            </section>
        );
    }
}

export default Coordinators;