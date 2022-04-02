import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTSirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts,setTShirts] = useTSirts()
    const [cart , setCart] = useState([])
    const handleAddToCart = (selectedTShirt) => {
        const exists = cart.find(tShirt => tShirt._id === selectedTShirt._id)
        if(!exists){
        const newCart =[...cart,selectedTShirt]
        setCart(newCart)
        }
        else{
            alert('TShirt is already eixsts')
        }
     
    }
    const handleRemoveFormCart = selectedItem => {
        const rest = cart.filter(tShirts => tShirts._id !== selectedItem._id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">   
                 {
                     tShirts.map(tShirt => <TShirt 
                        key={tShirt._id}
                        tShirt = {tShirt}
                        handleAddToCart = {handleAddToCart}
                        ></TShirt>)
                 }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveFormCart ={handleRemoveFormCart}
                ></Cart>
            </div>
          
        </div>
    );
};

export default Home;