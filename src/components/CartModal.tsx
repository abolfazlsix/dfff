import React from 'react';
import { CartItem } from '../types';
import './CartModal.css';

interface CartModalProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.product.image} alt={item.product.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.product.name}</h3>
                      <p className="item-price">${item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="item-quantity">
                      <button 
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="item-total">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.product.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: ${total.toFixed(2)}</strong>
                </div>
                <button className="btn btn-primary checkout-btn" onClick={onCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;