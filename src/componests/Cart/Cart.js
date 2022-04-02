import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFormCart}) => {
  // Conditonal rendering options
  // 1.Element variable
  // 2 . ternary operator condition ? true : false
  // 3. && operator (shorthand)
  // 4. || operator
  let command ;
  if(cart.length ===0){
      command = <p>Please Add at least one items</p>
  }
  else if(cart.length === 1){
      command = <p>Please add more item</p>
  }
  else{
      command=<p><small>Thanks for adding item</small></p>
  }
    return (
        <div>
            <h2>Item Seleted {cart.length}</h2>
           
            {
                cart.map(tShirt => <p>
                  {tShirt.name}
                 <button onClick={() => handleRemoveFormCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'> Yay ! you are buying</p>}
             {cart.length === 3 && <div className='orange'>
               <h3>Trigonal</h3>     
               <p>Tin jon ki gift deba</p>
                 
            </div>}
             {command}
             {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
             {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;