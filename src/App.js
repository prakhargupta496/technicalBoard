import React from 'react';
import Avant from './pages/Avant';
import Events from './pages/Event';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <Avant />
        );
    }
}
 
export default App;