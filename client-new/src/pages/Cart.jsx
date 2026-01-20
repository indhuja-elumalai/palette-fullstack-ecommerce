import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, decreaseQty } = useCart();
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-400">Your cart is empty</h2>
        <Link to="/products" className="mt-4 text-blue-600 font-bold">Back to Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-8 pt-24">
      <h1 className="text-4xl font-black mb-10">Your Bag</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <img src={item.image} className="w-24 h-24 object-cover rounded-2xl" />
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl">
                <button onClick={() => decreaseQty(item._id)} className="w-10 h-10 bg-white rounded-xl shadow-sm font-bold">-</button>
                <span className="font-black">{item.qty}</span>
                <button onClick={() => addToCart(item)} className="w-10 h-10 bg-white rounded-xl shadow-sm font-bold">+</button>
              </div>
            </div>
          ))}
        </div>

        {/* Automated Summary Section */}
        <div className="bg-gray-900 text-white p-8 rounded-[40px] h-fit sticky top-28">
          <h3 className="text-xl font-bold mb-6">Order Summary</h3>
          <div className="space-y-4 border-b border-gray-700 pb-6 mb-6">
            <div className="flex justify-between"><span>Items ({cartItems.length})</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-gray-400 text-sm"><span>Shipping</span><span>Free</span></div>
          </div>
          <div className="flex justify-between text-2xl font-black mb-8">
            <span>Total</span><span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;