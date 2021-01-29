import React from 'react';
import Events from '../components/Events';

function EventsPage() {
    return ( 
        <div>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Events />
        </div>
    );
}

export default EventsPage;