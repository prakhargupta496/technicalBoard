import React from 'react';
import styles from './sectionHeader.module.css';

function SectionHeader(props) {
    return (
        <h1 className={styles.heading}>
            {props.children}
        </h1>
    );
}

export default SectionHeader;