const Product = require('../models/Product');

// Create Product
const createProduct = async (req, res) => {
  const { name, category, price, quantity, description, image } = req.body;

  try {
    const product = await Product.create({ ...req.body, seller: req.user.id });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Products
const getProducts = async (req, res) => {
  const products = await Product.find().populate('seller', 'name email');
  res.json(products);
};

// Delete Product
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product.seller.toString() !== req.user.id) {
    return res.status(401).json({ message: 'Not authorized' });
  }
  await product.remove();
  res.json({ message: 'Product removed' });
};

module.exports = { createProduct, getProducts, deleteProduct };
