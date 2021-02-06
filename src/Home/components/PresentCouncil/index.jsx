import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Card from './Card';
import Styles from './grid.module.css';

class PresentCouncil extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader>Present Council</SectionHeader>
                <Container fluid className={Styles.container}>
                    <Row className={Styles.row} >
                        <Card>
                            {{
                                title: "Technical Secretary Name",
                                subTitle: "Technical Secretary",
                                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam tellus at nibh viverra, ac eleifend tellus faucibus. Fusce faucibus at erat quis dapibus. Aliquam ac sollicitudin quam. Proin tellus risus, tempor commodo consectetur ut, condimentum ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sollicitudin tortor vitae velit vestibulum, non commodo nibh tincidunt. Praesent a eleifend est, a eleifend tortor. Proin nec rhoncus lorem. Morbi vitae odio ut lectus hendrerit accumsan. Etiam congue mauris magna, ut laoreet felis feugiat eu. Nam eget ipsum at ex vestibulum hendrerit et sed enim.",
                                image: "https://images.unsplash.com/photo-1564053051381-5cb91813736b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2026&q=80"
                            }}
                        </Card>
                        <Card>
                            {{
                                title: "Faculty Coordinator Name",
                                subTitle: "Faculty Coordinator",
                                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam tellus at nibh viverra, ac eleifend tellus faucibus. Fusce faucibus at erat quis dapibus. Aliquam ac sollicitudin quam. Proin tellus risus, tempor commodo consectetur ut, condimentum ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sollicitudin tortor vitae velit vestibulum, non commodo nibh tincidunt. Praesent a eleifend est, a eleifend tortor. Proin nec rhoncus lorem. Morbi vitae odio ut lectus hendrerit accumsan. Etiam congue mauris magna, ut laoreet felis feugiat eu. Nam eget ipsum at ex vestibulum hendrerit et sed enim.",
                                image: "https://images.unsplash.com/photo-1564053051381-5cb91813736b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2026&q=80"
                            }}
                        </Card>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default PresentCouncil;