import React from "react";
import {
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Button
} from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Styles from './footer.module.css';





function Footer() {
  return (
    <div className={Styles.footer}>
      <Container fluid>
        <Row>
          <Col className="col events">
            <h4 className="ourEvents">Our Events</h4>
            <p className="eventsItem">Lorem Ipsum</p>
            <p className="eventsItem">Lorem Ipsum</p>
            <p className="eventsItem">Lorem Ipsum</p>
            <p className="eventsItem">Lorem Ipsum</p>
            <p className="eventsItem">Lorem Ipsum</p>
          </Col>
          <Col className="col">
            <h4>Our social media handles</h4>
            <FaFacebook size="30px" className="icon" />
            <FaInstagram size="30px" className="icon" />
            <FaTwitter size="30px" className="icon" />
            <FaYoutube size="30px" className="icon" />
          </Col>
          <Col>
            <h4>Gallery</h4>
            <h4>Past Coordinators</h4>
            <h4>Devlpment Team</h4>
          </Col>

          <Col className="col">
            <div className="mb-2">
              {["up"].map((direction) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={direction}
                  id={`dropdown-button-drop-${direction}`}
                  drop={direction}
                  title="View our clubs here!"
                  variant="light"
                  className="clubs"
                >
                  <Dropdown.Item eventKey="1">Mavericks</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Robotics Club</Dropdown.Item>
                  <Dropdown.Item eventKey="3">
                    Google developer students club
                  </Dropdown.Item>
                </DropdownButton>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Contact</h4>
            <p>IIIT Guwahati,Bongora, Guwahati -781015</p>
          </Col>
        </Row>

        <Row className="instiLogo">
          <Col className="instilogo">
            <img
              alt="instilogo"
              href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.shiksha.com%2Fmediadata%2Fimages%2F1563535702phpjTXHxf.png&imgrefurl=https%3A%2F%2Fwww.shiksha.com%2Fcollege%2Findian-institute-of-information-technology-guwahati-39384&tbnid=UP97UTY756b7MM&vet=12ahUKEwiQl7WCxqruAhWDJHIKHe6uAvcQMygAegUIARC3AQ..i&docid=HRKVwsd6ZBIquM&w=212&h=200&q=iiit%20guwahati%20logo&ved=2ahUKEwiQl7WCxqruAhWDJHIKHe6uAvcQMygAegUIARC3AQ"
            ></img>
          </Col>
        </Row>
        <Row>
          <Col className="instilogo">
            Indian Institute of Information Technology, Guwahati
            <p>© Copyright 2021 IIIT Guwahati</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
