import React, { useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import CategorySection from './components/CategorySection';
import CartModal from './components/CartModal';
import CheckoutPage from './components/CheckoutPage';
import { categories, products } from './data/menuData';
import { CartItem, Product } from './types';
import './App.css';

type AppState = 'menu' | 'checkout';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appState, setAppState] = useState<AppState>('menu');

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productId)
    );
  };

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setAppState('checkout');
  };

  const handleBackToMenu = () => {
    setAppState('menu');
  };

  const handlePlaceOrder = (orderData: any) => {
    // Here you would typically send the order to your backend
    console.log('Order placed:', orderData);
    alert('Order placed successfully! Thank you for your order.');
    setCartItems([]);
    setAppState('menu');
  };

  if (appState === 'checkout') {
    return (
      <CheckoutPage
        cartItems={cartItems}
        onBackToMenu={handleBackToMenu}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  }

  return (
    <div className="app">
      <Header 
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CategoryNav 
        categories={categories}
        onCategoryClick={scrollToCategory}
      />
      
      <main className="main-content">
        {categories.map(category => {
          const categoryProducts = products.filter(
            product => product.category === category.id
          );
          
          return (
            <CategorySection
              key={category.id}
              category={category}
              products={categoryProducts}
              onAddToCart={addToCart}
            />
          );
        })}
      </main>

      <CartModal
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;