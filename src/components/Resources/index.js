import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import List from './List';

class Resources extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader>Resources</SectionHeader>
                <List>
                    {
                        [{
                            year: "2021 - 2022",
                            folders : [
                                {
                                    name: "Orientation 2021",
                                    items: ["Rec 2021"],
                                }, 
                                {
                                    name: "Lorem Ipsum",
                                    items: ["Rec 2022"],
                                }
                            ],
                        },
                        {
                            year: "2020 - 2021",
                            folders : [
                                {
                                    name: "Orientation 2020",
                                    items: ["Rec 2020"],
                                },
                            ],
                        }]
                    }
                </List>
            </Section>
        );
    }
}

export default Resources;