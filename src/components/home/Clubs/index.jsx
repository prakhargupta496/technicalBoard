import React from 'react';
import Section from '../../common-components/Section';
import SectionHeader from '../../common-components/SectionHeader';
import { Container, Row } from 'react-bootstrap';
import Item from './item';
//Images
import GoogleDeveloperStudentClubs from './images/google_developer_student_club.svg';
import MachineLearningClub from './images/machine_learning.svg';
import ProgrammingClub from './images/programming_club.svg';
import RoboticsClub from './images/robotics_club.svg';

function Clubs(props) {
    return (
        <Section id={props.id}>
            <SectionHeader>Our Clubs</SectionHeader>
            <Container fluid>
                <Row>
                    <Item data={{
                        src: ProgrammingClub,
                        title: "Programming Club",
                        description: "Avant (Programming Club) is the officially registered group in the Indian Institute of Information Technology Guwahati. The Club Works aim to accelerate learning and impart knowledge in various fields like Competitive Programming, Web Development, App Development and Open Source. The Club also organizes various activities so they can improve and make the overall journey fun.",
                        link: "/avant"
                    }} />
                    <Item data={{
                        src: MachineLearningClub,
                        title: "Mavericks The Machine Learning Society",
                        description: "Avant (Programming Club) is the officially registered group in the Indian Institute of Information Technology Guwahati. The Club Works aim to accelerate learning and impart knowledge in various fields like Competitive Programming, Web Development, App Development and Open Source. The Club also organizes various activities so they can improve and make the overall journey fun.",
                        link: "/mavericks"
                    }} />
                    <Item data={{
                        src: RoboticsClub,
                        title: "Robotics Club",
                        description: "Avant (Programming Club) is the officially registered group in the Indian Institute of Information Technology Guwahati. The Club Works aim to accelerate learning and impart knowledge in various fields like Competitive Programming, Web Development, App Development and Open Source. The Club also organizes various activities so they can improve and make the overall journey fun.",
                        link: "/robotics"
                    }} />
                    <Item data={{
                        src: GoogleDeveloperStudentClubs,
                        title: "Google Developer Students Club",
                        description: "Avant (Programming Club) is the officially registered group in the Indian Institute of Information Technology Guwahati. The Club Works aim to accelerate learning and impart knowledge in various fields like Competitive Programming, Web Development, App Development and Open Source. The Club also organizes various activities so they can improve and make the overall journey fun.",
                        link: "/gdsc"
                    }} />
                </Row>
            </Container>
        </Section>
    );
}

export default Clubs;