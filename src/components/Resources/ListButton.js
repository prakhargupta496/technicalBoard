import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { FaFolder as FolderIcon, FaFile as FileIcon, FaArchive as Archive, FaArrowUp as UpArrow, FaArrowDown as DownArrow } from "react-icons/fa";
import Styles from './button.module.css';

function ListButton(props) {
    let classes = `${Styles.button} ${props.folder && Styles.folderButton} ${props.item && Styles.itemButton}`;

    return (
        <Button className={classes}>
            <Container fluid>
                <Row>
                    <Col xs={2} className={Styles.Col}>
                        {props.archive && (<Archive className={Styles.icon} />)}
                        {props.folder && (<FolderIcon className={Styles.icon} />)}
                        {props.item && (<FileIcon className={Styles.icon} />)}
                    </Col>
                    <Col xs={8} className={`${Styles.Col} ${Styles.contentCol}`}>
                        <h5 className={Styles.content}>
                            {props.children}
                        </h5>
                    </Col>
                    <Col xs={2} className={Styles.Col}>
                        {!(props.open) && !(props.item) && <UpArrow className={`${Styles.icon} ${Styles.arrow}`} />}
                        {props.open && !(props.item) && <DownArrow className={`${Styles.icon} ${Styles.arrow}`} />}
                    </Col>
                </Row>
            </Container>
        </Button>
    );
}

export default ListButton;