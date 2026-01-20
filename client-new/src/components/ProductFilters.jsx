import React from "react";

const ProductFilters = ({ categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
      {/* Category Dropdown */}
      <div className="relative w-full sm:w-64">
        <select
          className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer text-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Collections</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        {/* Custom Arrow Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative flex-1 w-full">
        <input
          type="text"
          placeholder="Search for digital assets (e.g. '3D Icons')..."
          className="w-full bg-white border border-gray-200 rounded-xl px-11 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;