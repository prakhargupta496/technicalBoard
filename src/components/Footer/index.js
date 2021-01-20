import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { FaFacebookSquare as Facebook, FaInstagram as Instagram, FaGithub as GitHub, FaYoutube as YouTube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Styles from './footer.module.css';

function FooterHeadings(props) {
  return (
    <h2>{props.children}</h2>
  );
}

function Footer(props) {
  return (
    <section>
      <Container fluid className={Styles.footer}>

        <Row md={3} className={Styles.row}>
          <Col>
            <FooterHeadings>Other Pages</FooterHeadings>
            <ButtonGroup vertical>
              <Button className={Styles.link} as={Link} to="/events">Events</Button>
              <Button className={Styles.link} as={Link} to="/gallery">Gallery</Button>
              <Button className={Styles.link} as={Link} to="/hallOfFame">Hall Of Fame</Button>
            </ButtonGroup>
          </Col>

          <Col>
            <FooterHeadings>Other Technical Clubs</FooterHeadings>
            <ButtonGroup vertical>
              <Button className={Styles.link} href="#">Mavericks - The Machine Learning Society</Button>
              <Button className={Styles.link} href="#">Robotics Club</Button>
              <Button className={Styles.link} href="#">Google Developer Student Club</Button>
            </ButtonGroup>
          </Col>

          <Col>
            <FooterHeadings>Miscellaneous</FooterHeadings>
            <ButtonGroup vertical>
              <Button className={Styles.link} as={Link} to="/resources">Resources</Button>
              <Button className={Styles.link} as={Link} to="/">Meet The Development Team</Button>
            </ButtonGroup>
          </Col>
        </Row>

        <Row sm={1}>
          <Col>
            <FooterHeadings>Social Media Handles</FooterHeadings>
            <Button className={Styles.link} href="#">
              <Facebook className={Styles.icon} />
            </Button>
            <Button className={Styles.link} href="#">
              <Instagram className={Styles.icon} />
            </Button>
            <Button className={Styles.link} href="#">
              <GitHub className={Styles.icon} />
            </Button>
            <Button className={Styles.link} href="#">
              <YouTube className={Styles.icon} />
            </Button>
          </Col>
        </Row>

        <Row sm={1}>
          <Col>
            <Button className={Styles.link} href="#">Technical Board</Button>
          </Col>
        </Row>

        <Row sm={1}>
          <Col>
            <Button className={Styles.link} href="#">Indian Institute of Information Technology Guwahati</Button>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default Footer;
