import React from 'react';
import Section from '../common/Section';
import SectionHeader from '../common/SectionHeader';
import List from './List';

class Resources extends React.Component {
    render() {
        return (
            <Section>
                <SectionHeader>Resources</SectionHeader>
                <List.Archives>
                    {
                        [{
                            year: "2021 - 2022",
                            folders : [
                                {
                                    name: "Orientation 2021",
                                    items: ["Rec 2021", "Or 202", "UI"],
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
                        },{
                            year: "2019 - 2020",
                            folders : [
                                {
                                    name: "Orientation 2019",
                                    items: ["Rec 2020"],
                                },
                            ],
                        }]
                    }
                </List.Archives>
            </Section>
        );
    }
}

export default Resources;