import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import Aunty from '../Aunty/Aunty'

/* 
 context api 
1. call createConext with a default value
2. set a variable of the context with uppercase
3. Make sure you export the context to use it in other places 
4. wrap you child content using RingContext.Provider
5. Provide a value
6. to consume the context from child component
7.useContext hook and you will you need to pass the contextName
8.Make sure you take notes...
*/
 
  export  const RingContext = createContext ('Diamond')
const Grandpa = () => {
    const [house , setHouse] = useState(1)
    const handleHouse = () => {
        setHouse(house + 1)
    }
    const ornament = 'Dimond Ring'
    return (
        <RingContext.Provider value={[house , setHouse]}>
            <div className='grandpa' >
              <h2>Grandpa</h2>
                <button onClick={handleHouse}>Buy A House</button>
              <h3>House : {house}</h3>
               <div style={{display: 'flex'}}>
                  <Father  house={house}></Father>
                  <Uncle  house={house}></Uncle>
                  <Aunty  house={house}></Aunty>
                </div>
           </div>
        </RingContext.Provider>
    );
};

export default Grandpa;