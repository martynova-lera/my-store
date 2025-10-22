import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RatingStars from '../components/RatingStars';

const productsData = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday carry items in the spacious main compartment, and your water bottle in one of two side pockets.",
    category: "men's clothing",
    image: process.env.PUBLIC_URL + "/images/backpack.png",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual T-Shirt", 
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans.",
    category: "men's clothing",
    image: process.env.PUBLIC_URL + "/images/t-shirt.png",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: process.env.PUBLIC_URL + "/images/cottonJacket.png",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 89.99,
    description: "High-quality wireless headphones with noise cancellation. Perfect for music lovers and professionals who need focus. Battery life up to 30 hours. Comfortable fit for all-day wear with adjustable headband and soft ear cushions.",
    category: "electronics",
    image: process.env.PUBLIC_URL + "/images/headphones.png",
    rating: { rate: 4.3, count: 215 }
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = productsData.find(p => p.id === parseInt(id));

  const handleBack = () => navigate(-1);

  if (!product) {
    return (
      <div className="product-detail">
        <button onClick={handleBack} className="back-button">← Back to Products</button>
        <div className="error">Product not found</div>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} className="detail-image" />
        </div>
        <div className="product-info-section">
          <h1 className="detail-title">{product.title}</h1>
          <div className="detail-rating">
            <RatingStars rating={product.rating.rate} />
            <span className="rating-count">({product.rating.count} reviews)</span>
          </div>
          <p className="detail-price">${product.price}</p>
          <p className="detail-category">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="detail-description">{product.description}</p>
          <button onClick={handleBack} className="back-button">← Back to Products</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;