import React from 'react';

function Section(props) {
    let customStyle = props.Style;
    const { innerHeight } = window;
    
    // if(customStyle) {
    //     customStyle.innerHeight = innerHeight;
    // }
    // else {
    //     customStyle = {
    //         height: innerHeight
    //     };
    // }

    return (
        <section style={customStyle}>
            {props.children}
        </section>
    );
}

export default Section;