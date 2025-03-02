const express = require('express');
const { createProduct, getProducts, deleteProduct } = require('../controllers/productController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createProduct);
router.get('/', getProducts);
router.delete('/:id', protect, deleteProduct);

module.exports = router;
