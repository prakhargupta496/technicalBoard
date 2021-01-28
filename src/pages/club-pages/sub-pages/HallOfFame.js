import React from 'react';
import Coordinators from '../../../components/club-page/Coordinators';

function HallOfFame() {
    return ( 
        <div>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Coordinators />
        </div>
    );
}

export default HallOfFame;