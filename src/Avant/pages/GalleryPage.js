import React from 'react';
import Gallery from '../components/Gallery';

function GalleryPage() {
    return ( 
        <div>
            {/* This component will render the heading in the form:-
            Name
            (Alternative Name)

            If none of the above are provided, then the component will
            only generate a link with an Image */}
            <Gallery />
        </div>
    );
}

export default GalleryPage;