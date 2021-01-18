import React from 'react';

function Section(props) {
    const customStyle = props.style;

    return (
        <section Styles={customStyle}>
            {props.children}
        </section>
    );
}

export default Section;