import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// src/context/CartContext.jsx
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(x => x._id === product._id);
      if (exist) {
        return prev.map(x => x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const decreaseQty = (id) => {
    setCartItems(prev => {
      const exist = prev.find(x => x._id === id);
      if (exist.qty === 1) {
        return prev.filter(x => x._id !== id); // Remove if qty hits 0
      }
      return prev.map(x => x._id === id ? { ...exist, qty: exist.qty - 1 } : x);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};