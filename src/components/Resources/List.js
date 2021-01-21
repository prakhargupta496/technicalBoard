import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ListButton from './ListButton';
import Section from '../common/Section';
import Styles from './list.module.css';

function List(props) {
    return (
        <Section className={Styles.list}>
            {/* Main List Of Archives */}
            <ListGroup variant="flush">
                {
                    props.children.map(item => {
                        return (
                            <ListArchive>
                                { item }
                            </ListArchive>
                        );
                    })
                }
            </ListGroup>
        </Section>
    );
}

class ListArchive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openArchive = this.openArchive.bind(this);
    }

    openArchive(e) {
        e.stopPropagation();
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {
        const archive = this.props.children;

        return (
            <ListGroup.Item className={`${Styles.archiveItem} ${Styles.ListGroupItem}`} key={archive.year} onClick={this.openArchive}>
                <ListButton archive open={this.state.open}>
                    {archive.year}
                </ListButton>
                {/* List Of Folders */}
                <ListGroup variant="flush" className={!(this.state.open) && Styles.close}>
                    {
                        archive.folders.map(folder => {
                            return (
                                <ListFolder key={folder.name}>
                                    { folder}
                                </ListFolder>
                            );
                        })
                    }
                </ListGroup>
            </ListGroup.Item>
        );
    }
}

class ListFolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openFolder = this.openFolder.bind(this);
    }

    openFolder(e) {
        e.stopPropagation();
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {
        const folder = this.props.children;

        return (
            <ListGroup.Item className={Styles.ListGroupItem} onClick={this.openFolder}>
                <ListButton folder open={this.state.open}>
                    {folder.name}
                </ListButton>
                {/* List of Items */}
                <ListGroup variant="flush" className={!(this.state.open) && Styles.close}>
                    {
                        folder.items.map(item => {
                            return (
                                <ListItem key={item} name={item} />
                            );
                        })
                    }
                </ListGroup>
            </ListGroup.Item>
        );
    }
}

function ListItem(props) {
    const item = props.name;

    return (
        <ListButton item>
            { item}
        </ListButton>
    );
}

export default List;