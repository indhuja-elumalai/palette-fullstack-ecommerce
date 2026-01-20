import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx'; // 1. Import the cart hook

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart(); // 2. Get cart items
  const navigate = useNavigate();

  // Calculate total items in cart for the badge
  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-black text-gray-900 tracking-tighter">
        PALETTE<span className="text-blue-600">.</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/products" className="text-gray-600 font-medium hover:text-blue-600">Marketplace</Link>
        
        {/* 3. The Cart Icon Section */}
        <Link to="/cart" className="relative group p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-700 group-hover:text-blue-600 transition-colors" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          
          {/* Dynamic Badge */}
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 animate-in zoom-in duration-300">
              {totalItems}
            </span>
          )}
        </Link>

        <div className="h-6 w-px bg-gray-200 mx-2"></div>

        {user ? (
          <div className="flex items-center gap-4">
            {user.role === 'admin' && <Link to="/admin" className="text-blue-600 font-bold">Admin</Link>}
            <button onClick={handleLogout} className="bg-gray-900 text-white px-4 py-2 rounded-xl font-bold text-sm">Logout</button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-600 font-bold">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold text-sm">Join</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;