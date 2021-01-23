import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import List from './List';
import Loading from '../common/Effects/Spinner';
//Firebase
import firebase from '../../firebase';

/*
Object Format:-
[
    {
        year: "20XX - 20XX",
        folders : [
            {
                name: "folder_name",
                items: [{
                    name: file_name,
                    link: link_to_file
                }, {
                    name: file_name,
                    link: link_to_file
                }]
            }, 
        ]
    }
]
*/

class Resources extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    convertToArchiveObject(snapshot) {
        const content = snapshot.docs[0].data().archives;

        const newState = content.map(archive => {
            const archiveName = archive.year;

            const folders = archive.folders.map(folder => {
                const folderName = folder.name;

                const items = folder.items.map(item => (
                    {
                        name: item.name,
                        link: item.link
                    }
                ));

                return ({
                    name: folderName,
                    items: items
                });
            });

            return ({
                year: archiveName,
                folders: folders
            });
        });

        return newState;
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('resources').where('name', '==', 'avant').get().then(snapshot => {
            const newState = this.convertToArchiveObject(snapshot);
            this.setState(newState);
        });
    }

    render() {
        const content = [];
        for(let i in this.state) {
            content.push(this.state[i]);
        }

        return (
            <Section>
                <SectionHeader>Resources</SectionHeader>
                {
                    this.state != null ? (
                        <List.Archives>
                            {content}
                        </List.Archives>
                    ) : (
                        <Loading />
                    ) 
                }
            </Section>
        );
    }
}

export default Resources;