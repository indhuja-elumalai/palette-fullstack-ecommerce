import React from "react";
import ProductCard from "./ProductCard.jsx"; // Ensure .jsx extension

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
        <p className="text-gray-400 text-lg">No assets match your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

// THIS IS THE MISSING LINE CAUSING THE ERROR:
export default ProductList;