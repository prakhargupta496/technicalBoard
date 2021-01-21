import React from 'react';
import ListButton from './ListButton';

function Items(props) {
    const items = props.children;

    return (
        items.map(item => {
            console.log(item);
            return (
                <ListButton key={item} item>
                    {item}
                </ListButton>
            );
        })
    );
}

export default Items;