import React from 'react';
import ListItem from './ListItems';

const ListBox = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <ListItem name={movie.name} url={movie.url} key={movie.id}/>
        );
    });

    return (
        <>
            {movieNodes}
        </>
    );
};

export default ListBox;