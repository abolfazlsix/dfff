import React from 'react';
import { CartItem } from '../types';
import './Header.css';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onCartClick }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>🍽️</h1>
        </div>
        
        <div className="collection-name">
          <h2>Delicious Menu</h2>
        </div>
        
        <div className="cart-section" onClick={onCartClick}>
          <div className="cart-icon">
            🛒
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;