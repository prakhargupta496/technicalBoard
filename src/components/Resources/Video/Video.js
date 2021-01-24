import React from 'react';
import { Container, Row, Col, ResponsiveEmbed, Card } from 'react-bootstrap';
import { FaShareAlt as Share } from "react-icons/fa";
import Styles from './video.module.css';

function Video(props) {
    return (
        <Card className={Styles.videoContainer}>
            <Card.Body>
                <ResponsiveEmbed aspectRatio="16by9">
                    <embed type="image/svg+xml" src={props.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </ResponsiveEmbed>
                <Card.Title>
                    Senior - Junior Interaction 2021
                </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                {/* <Icons /> */}
            </Card.Body>
        </Card>

    );
}

export default Video;