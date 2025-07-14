import React, { useState } from 'react';
import { CartItem } from '../types';
import './CheckoutPage.css';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onBackToMenu: () => void;
  onPlaceOrder: (orderData: OrderData) => void;
}

interface OrderData {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  items: CartItem[];
  total: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ 
  cartItems, 
  onBackToMenu, 
  onPlaceOrder 
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: ''
  });

  const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData: OrderData = {
      ...formData,
      items: cartItems,
      total
    };
    onPlaceOrder(orderData);
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <button className="back-button" onClick={onBackToMenu}>
            ← Back to Menu
          </button>
          <h1>Checkout</h1>
        </div>

        <div className="checkout-content">
          <div className="checkout-form">
            <h2>Customer Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="customerName">Full Name *</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary place-order-btn">
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cartItems.map((item) => (
                <div key={item.product.id} className="order-item">
                  <div className="item-info">
                    <h4>{item.product.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;