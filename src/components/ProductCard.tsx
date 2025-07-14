import React from 'react';
import { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card card">
      <div className="product-header">
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>
      </div>
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-actions">
        <button 
          className="btn btn-primary add-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;