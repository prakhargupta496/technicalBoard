import React from 'react';

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
        <section id={props.id} style={customStyle}>
            {props.children}
        </section>
    );
}

export default Section;