import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext.jsx';

const ProductCard = ({ product }) => {
  const { addToCart, decreaseQty, cartItems } = useCart();
  const itemInCart = cartItems.find((item) => item._id === product._id);
  const quantity = itemInCart ? itemInCart.qty : 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-xl"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      
      <div className="mt-4 px-1">
        <h3 className="font-bold text-gray-800 text-lg truncate">{product.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <span className="text-2xl font-black text-blue-600">${product.price}</span>
          
          {quantity === 0 ? (
            <button 
              onClick={() => addToCart(product)}
              className="bg-gray-900 text-white p-2 px-6 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-xl">
              <button onClick={() => decreaseQty(product._id)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold">-</button>
              <span className="font-bold text-sm w-4 text-center">{quantity}</span>
              <button onClick={() => addToCart(product)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold">+</button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;