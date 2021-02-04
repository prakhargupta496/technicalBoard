import React from 'react';
import Link from '../common/Link';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import Grid from './Grid';
import Spinner from '../common/Effects/Spinner';
import { NavHashLink } from 'react-router-hash-link';
//firebase
import firebase from '../../firebase';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        //State
        this.state = {
            images: []
        };
        //Binding Methods
        this.fetchAllURL = this.fetchAllURL.bind(this);
    }

    fetchAllURL(doc) {
        const storage = firebase.storage().ref();
        storage.child(doc.ref).getDownloadURL().then((url) => {
            this.setState(state => ({
                images: state.images.concat({
                    title: doc.title,
                    src: url,
                })
            }));
        });
    }

    componentDidMount() {
        const db = firebase.firestore();
        db.collection('gallery').get().then((snapshot) => {
            const docs = snapshot.docs;
            for(let i in docs) {
                if(this.props.small && parseInt(i) >= 6) {
                    break;
                }
                this.fetchAllURL(docs[i].data());
            }
        })
    }

    render() {
        const images = this.state.images;

        return (
            <Section id={this.props.id} style={this.props.style}>
                <SectionHeader>Gallery</SectionHeader>
                {
                    (images.length !== 0 ) ? (
                        <Grid>
                            {images}
                        </Grid>
                    ) : (
                            <Spinner />
                        )
                }
                {   this.props.small &&
                    <Link as={NavHashLink} href={this.props.href} small>Load More</Link>
                }
            </Section>
        );
    }
}

export default Gallery;