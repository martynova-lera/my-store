import React from 'react';
import { useNavigate } from 'react-router-dom';
import RatingStars from './RatingStars';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <RatingStars rating={product.rating.rate} />
      </div>
    </div>
  );
};

export default ProductCard;