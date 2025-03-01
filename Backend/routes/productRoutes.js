const express = require('express');
const { createProduct, getProducts, deleteProduct } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware'); // Protect middleware to check if the user is authenticated

const router = express.Router();

// POST route for creating a product (requires authentication)
router.post('/', protect, createProduct);

// GET route for fetching all products (public)
router.get('/', getProducts);

// DELETE route for removing a product (requires authentication)
router.delete('/:id', protect, deleteProduct);

module.exports = router;
