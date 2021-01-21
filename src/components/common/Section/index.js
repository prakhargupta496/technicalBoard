import React from 'react';
import Styles from './section.module.css';

function Section(props) {
    let customStyle = props.style;
    // const { innerHeight } = window;
    
    // if(customStyle) {
    //     customStyle.innerHeight = innerHeight;
    // }
    // else {
    //     customStyle = {
    //         height: innerHeight
    //     };
    // }

    return (
        <section id={props.id} style={customStyle} className={`${Styles.section} ${props.className}`}>
            {props.children}
        </section>
    );
}

export default Section;