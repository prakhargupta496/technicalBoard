import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './css/link.module.css';

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.link = props.link;
        this.message = props.children;
    }

    render() {
        return (
            <div className = {styles.button}>
                <Button variant="link" href = {this.link} className = {styles.link}>
                    {this.message}
                </Button>
            </div>
        );
    }
}

export default Link;