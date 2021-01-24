import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Videos from './Videos';
import List from './List';
import Styles from './resources.module.css';
//Firebase
import firebase from '../../firebase';

function SubHeading(props) {
    return (
        <h3 className={Styles.subHeading}>{props.children}</h3>
    );
}

class Resources extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newArr: []
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('resources').where('name', '==', 'avant').get().then(snapshot => {
<<<<<<< HEAD
            const data = snapshot.docs[0].data();

            this.setState({
                archives: data.archives,
                videos: data.videos
            });
=======
            const newState = this.convertToArchiveObject(snapshot);
            this.setState({newArr: newState});
>>>>>>> d321c0fae386841a6e45e0827b5bd43866dd9d87
        });
    }

    render() {
        return (
            <Section>
                <SectionHeader>Resources</SectionHeader>
<<<<<<< HEAD
                { this.state && this.state.videos &&
                    (
                        <React.Fragment>
                            <SubHeading>Documents</SubHeading>
                            <List data={this.state && this.state.archives} />       
                        </React.Fragment>
                    )
                }
                { this.state && this.state.videos &&
                    (
                        <React.Fragment>
                            <SubHeading>Videos</SubHeading>
                            <Videos data={this.state && this.state.videos} />
                        </React.Fragment>
                    )
                }
                { this.state && this.state.blogs &&
                    (
                        <React.Fragment>
                            <SubHeading>Blogs</SubHeading>
                        </React.Fragment>
                    )
=======
                <SubHeading>Documents</SubHeading>
                {
                    this.state != null ? (
                        <List.Archives>
                            {this.state.newArr}
                        </List.Archives>
                    ) : (
                        <Loading />
                    ) 
>>>>>>> d321c0fae386841a6e45e0827b5bd43866dd9d87
                }
            </Section>
        );
    }
}

export default Resources;