import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500">Manage your digital products and marketplace stats.</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all">
            + Add New Product
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <h2 className="text-2xl font-bold text-gray-900">$12,840</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Active Products</p>
            <h2 className="text-2xl font-bold text-gray-900">43</h2>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-medium">Total Orders</p>
            <h2 className="text-2xl font-bold text-gray-900">156</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-lg mb-4">Recent Inventory</h3>
          <p className="text-gray-400 italic">Product management table coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;