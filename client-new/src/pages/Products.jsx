import { useState, useEffect } from "react";
import axios from "axios";
import ProductFilters from "../components/ProductFilters";
import ProductList from "../components/ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5050/api';
        const res = await axios.get(`${apiBase}/products`);
        setProducts(res.data);
        const uniqueCategories = [...new Set(res.data.map((p) => p.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Digital Marketplace</h1>
        <p className="text-gray-500">Discover unique digital assets from top artists.</p>
      </header>

      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {loading ? (
        <div className="text-center py-20 text-gray-400">Loading products...</div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Products;