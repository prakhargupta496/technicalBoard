import React from 'react';
import Styles from './section.module.css';

function Section(props) {
    let customStyle = props.style;

    return (
        <section id={props.id} style={customStyle} className={`${Styles.section} ${props.className}`}>
            {props.children}
        </section>
    );
}

export default Section;