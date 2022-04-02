import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house,ornament}) => {
    return (
        <div>
            <h3>Me</h3>
            <h5>House : {house}</h5>
            <Special house={house} ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;