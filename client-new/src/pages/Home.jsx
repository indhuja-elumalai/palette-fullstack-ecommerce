import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            The curated marketplace for <span className="text-blue-600">Digital Art.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover high-quality UI kits and illustrations created by top artists worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Logic: Anyone can browse, but guests see Login/Register links elsewhere */}
            <Link 
              to="/products" 
              className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all"
            >
              Browse Marketplace
            </Link>

            {/* Logic: 
                - If Admin: Go to Dashboard 
                - If User/Guest: Go to Register to become a seller 
            */}
            <Link 
              to={user?.role === 'admin' ? "/admin" : "/register"} 
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all"
            >
              {user?.role === 'admin' ? "Go to Dashboard" : "Become a Seller"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;