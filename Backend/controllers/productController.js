const Product = require('../models/Product');
const upload = require('../utils/upload'); // Import the Multer configuration

// Create Product
const createProduct = async (req, res) => {
  const { name, category, price, quantity, description } = req.body;

  try {
    // Check if an image file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }

    // Create a new product and associate it with the logged-in user (seller)
    const product = await Product.create({
      name,
      category,
      price,
      quantity,
      description,
      image: req.file.path || req.file.url, // Ensures Cloudinary URL is stored

      seller: req.user.id, // Use req.user.id to associate the seller
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('seller', 'name email');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if the logged-in user is the seller of the product
    if (product.seller.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to delete this product' });
    }

    await product.remove();
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct, getProducts, deleteProduct };