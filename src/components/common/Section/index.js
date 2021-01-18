import React from 'react';
import Styles from './section.module.css';

function Section(props) {
    return (
        <section className={Styles.section}>
            {props.children}
        </section>
    );
}

export default Section;