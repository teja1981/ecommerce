import React, { useContext } from 'react';
import { CartContext } from '../pages/CartContext';

const CartPage = () => {
  const {cart} = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>MRP: ${product.mrp}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
