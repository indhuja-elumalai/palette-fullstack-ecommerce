import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section */}
      <Link to="/" className="text-2xl font-black text-gray-900 tracking-tighter">
        PALETTE<span className="text-blue-600">.</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link 
          to="/products" 
          className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
        >
          Marketplace
        </Link>
        
        {/* Conditional Rendering based on Auth State (Issue 5) */}
        {user ? (
          <>
            {/* Show Dashboard only for Admin (Issue 3 & 4) */}
            {user.role === 'admin' && (
              <Link to="/admin" className="text-blue-600 font-bold hover:text-blue-700">
                Dashboard
              </Link>
            )}
            
            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
              <span className="text-sm text-gray-500 hidden md:block">
                Hi, <span className="font-semibold text-gray-800">{user.name}</span>
              </span>
              <button 
                onClick={handleLogout}
                className="bg-gray-100 text-gray-900 px-4 py-2 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 transition-all text-sm"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          /* Links for Guests (Issue 6 Workflow) */
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-gray-600 font-medium hover:text-blue-600 px-2"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              Join Palette
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;