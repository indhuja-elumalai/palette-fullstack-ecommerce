import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 group transition-all hover:shadow-xl"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {product.category}
        </div>
      </div>
      
      <div className="mt-4 px-1">
        <h3 className="font-bold text-gray-800 text-lg truncate">{product.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <span className="text-2xl font-black text-blue-600">${product.price}</span>
          <button className="bg-gray-900 text-white p-2 px-4 rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors">
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;