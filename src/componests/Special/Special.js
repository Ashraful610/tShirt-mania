import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house , setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Special </h5>
            <h6>Gift : {house}</h6>
            <button onClick={() => setHouse(house + 1)}>Buy A House</button>
        </div>
    );
};

export default Special;