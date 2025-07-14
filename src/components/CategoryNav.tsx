import React from 'react';
import { Category } from '../types';
import './CategoryNav.css';

interface CategoryNavProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ categories, onCategoryClick }) => {
  return (
    <nav className="category-nav">
      <div className="container">
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category.id}
              className="category-button"
              onClick={() => onCategoryClick(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;