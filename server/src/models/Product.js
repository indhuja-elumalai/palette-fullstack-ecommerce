import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true }, 
  image: { type: String, required: true },    
  countInStock: { type: Number, required: true, default: 0 }
}, {
  timestamps: true // Good practice to track when products are created
});

const Product = mongoose.model('Product', productSchema);

export default Product; // This satisfies the "import Product" call