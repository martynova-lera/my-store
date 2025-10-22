import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    image: process.env.PUBLIC_URL + "/images/backpack.png",
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: "Mens Casual T-Shirt", 
    price: 22.3,
    image: process.env.PUBLIC_URL + "/images/t-shirt.png",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    image: process.env.PUBLIC_URL + "/images/cottonJacket.png",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 89.99,
    image: process.env.PUBLIC_URL + "/images/headphones.png",
    rating: { rate: 4.3, count: 215 }
  }
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>All Products ({products.length})</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;