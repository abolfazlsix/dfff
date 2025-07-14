import React from 'react';
import { Category, Product } from '../types';
import ProductCard from './ProductCard';
import './CategorySection.css';

interface CategorySectionProps {
  category: Category;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  products, 
  onAddToCart 
}) => {
  return (
    <section 
      id={`category-${category.id}`} 
      className="category-section"
    >
      <div className="category-header">
        <h2 className="category-title">
          <span className="category-icon">{category.icon}</span>
          {category.name}
        </h2>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;