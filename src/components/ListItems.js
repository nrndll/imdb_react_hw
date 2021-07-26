import React from 'react';

const ListItem = ({name, url}) => {
    return (
        <ul>
            <li><a href={url}>{name}</a></li>
        </ul>
    );
};

export default ListItem;