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
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>🍽️</h1>
          </div>
          
          <div className="collection-name">
            <h1>Delicious Menu</h1>
          </div>
          
          <div className="cart-section">
            <button className="cart-button" onClick={onCartClick}>
              <span className="cart-icon">🛒</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;