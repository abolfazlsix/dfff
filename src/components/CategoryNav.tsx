import React from 'react';
import { Category } from '../types';
import './CategoryNav.css';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryClick 
}) => {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
    onCategoryClick(categoryId);
  };

  return (
    <nav className="category-nav">
      <div className="category-nav-container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => scrollToCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;