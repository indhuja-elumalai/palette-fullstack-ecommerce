import express from 'express';
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public: get all products
router.get('/', getProducts);

// Admin: create, update, delete
router.post('/', protect, admin, addProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
