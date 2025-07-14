import React, { useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import CategorySection from './components/CategorySection';
import CartModal from './components/CartModal';
import { menuData } from './data/menuData';
import { CartItem, Product } from './types';
import './App.css';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('breakfast');

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

  const handleCheckout = () => {
    // In a real app, this would navigate to a checkout page
    alert('Proceeding to checkout...');
    setIsCartOpen(false);
  };

  const getProductsByCategory = (categoryId: string) => {
    return menuData.products.filter(product => product.category === categoryId);
  };

  return (
    <div className="app">
      <Header 
        cartItems={cartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <CategoryNav
        categories={menuData.categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
      />
      
      <main className="main-content">
        {menuData.categories.map(category => (
          <CategorySection
            key={category.id}
            category={category}
            products={getProductsByCategory(category.id)}
            onAddToCart={addToCart}
          />
        ))}
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