import React from 'react';
import Header from './Pages/Main/Header';

class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* This component will render the heading in the form:-
                Name
                (Alternative Name)

                If none of the above are provided, then the component will
                only generate a link with an Image */}
                <Header name = "Avant" altName = "Programming Club" link = "#"/>
            </div>
        );
    }
}
 
export default App;