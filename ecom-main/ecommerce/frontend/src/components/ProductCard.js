import React, { useContext } from 'react';
import '../styles/product-card.css';
import { CartContext } from '../pages/CartContext';

const ProductCard = ({ image, name, description, mrp }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ image, name, description, mrp });
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-mrp">MRP: ${mrp}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
