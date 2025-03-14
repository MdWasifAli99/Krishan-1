<<<<<<< Updated upstream
import Layout from '../components/Layout'
import React from 'react'


const KrishanBazer = () => {
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Layout from '../components/Layout';
import { 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid, 
  Typography, 
  InputBase,
  Select,
  MenuItem,
  IconButton,
  Modal,
  Box,
  TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { motion } from 'framer-motion';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const KrishanBazer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]); // State to store products from the backend
  const productsPerPage = 8;
  const navigate = useNavigate(); // Hook for navigation

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Adjust the endpoint as needed
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (direction) => {
    if (direction === 'next' && currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity to 1 when a new product is selected
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handlePaymentRedirect = (method) => {
    if (method === 'bkash') {
      window.location.href = 'https://www.bkash.com';
    } else if (method === 'nagad') {
      window.location.href = 'https://www.nagad.com.bd';
    }
  };

  // Function to redirect to the Add Products page
  const redirectToAddProducts = () => {
    navigate('/addproduct'); // Adjust the route as needed
  };

>>>>>>> Stashed changes
  return (
    <Layout>
          <div className="bg-white font-sans text-gray-800">
      {/* Search Section */}
      <section className="p-10 bg-gray-100 text-center">
        <h1 className="text-3xl font-bold mb-4">Get real-time market updates for your crops</h1>
        <p className="text-xl mb-4">Browse articles and ask questions to our experts</p>
        <div className="flex justify-center">
          <input
            type="text"
            className="px-6 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none"
            placeholder="Enter your market query here"
          />
          <button className="px-6 py-2 bg-black text-white rounded-r-lg">Search</button>
        </div>
      </section>

      {/* Market Monitoring Section */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-white">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">Crop Prices</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">Expert Advice</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">User Profiles</h3>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <h3 className="font-bold">Secure Login</h3>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image1.jpg" alt="Product 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$5.99 - High-yield crop seeds</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
<<<<<<< Updated upstream
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image2.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$6.99 - Organic fertilizers</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
=======
        </section>

        {/* Search and Filters Section */}
        <section className="py-8 px-4 md:px-8 lg:px-16 bg-[#0d2a28] sticky top-0 z-20 shadow-lg shadow-[#00ff88]/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center bg-[#0d2a28] rounded-full shadow-lg shadow-[#00ff88]/30 w-full md:w-2/3 order-1">
              <InputBase
                placeholder="Search crops, vegetables..."
                className="flex-1 px-6 py-3 text-lg text-white"
                startAdornment={<SearchIcon className="text-[#00ff88] mx-3" />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 w-full md:w-1/3 justify-end order-2">
              <Select
                displayEmpty
                className="bg-[#0d2a28] rounded-full shadow-lg shadow-[#00ff88]/30 text-white"
                inputProps={{ 'aria-label': 'Filter' }}
                IconComponent={FilterListIcon}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                sx={{
                  '& .MuiSelect-icon': { color: '#00ff88' },
                  '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
                }}
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Vegetables">Vegetables</MenuItem>
                <MenuItem value="Grains">Grains</MenuItem>
                <MenuItem value="Leafy Greens">Leafy Greens</MenuItem>
                <MenuItem value="Fruits">Fruits</MenuItem>
              </Select>
              {/* Add Products Button */}
              <Button 
                variant="contained" 
                className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] hover:scale-105 text-black rounded-full px-4 py-2 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30"
                onClick={redirectToAddProducts}
              >
                Sell Product
              </Button>
            </div>
>>>>>>> Stashed changes
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image3.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$7.99 - Smart irrigation system</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image4.jpg" alt="Product 4" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">$9.99 - Precision farming equipment</h3>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          </div>
        </div>
      </section>

<<<<<<< Updated upstream
      {/* Expert Advice Section */}
      <section className="p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Expert Advice</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Crop cultivation tips</h3>
            <p className="text-gray-700">Learn about crop cultivation techniques for better yields.</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Read More</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Livestock essentials</h3>
            <p className="text-gray-700">Essential equipment for raising healthy livestock.</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Discover</button>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold">Soil management advice</h3>
            <p className="text-gray-700">Understand soil health and its impact on crops.</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Learn More</button>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Explore our articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image5.jpg" alt="Livestock care" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">5 Tips on Livestock Care</h3>
            <p className="text-gray-700">Get expert advice on livestock care for better yields.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image6.jpg" alt="Crop cultivation" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">10 Tips for Growing Healthy Crops</h3>
            <p className="text-gray-700">Expert advice for successful crop cultivation.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="path_to_image7.jpg" alt="Farming tips" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="font-bold mt-4">Essential Farming Equipment</h3>
            <p className="text-gray-700">Make sure you have the right tools for efficient farming.</p>
          </div>
        </div>
      </section>
    </div>
     {/* Footer */}
     <footer className="bg-green-50 border-t border-gray-200 mt-10">
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
      {/* Newsletter */}
      <div className="md:w-1/2 lg:w-1/3 space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Subscribe to our newsletter for the latest updates on features and releases
        </h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Your Email Here"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r">
            Join
          </button>
        </div>
=======
        {/* Farmer Benefits Section */}
        <section className="py-16 bg-[#0d2a28]">
          <div className="max-w-7xl text-center mx-auto px-4 md:px-8 lg:px-16">
            <Typography variant="p1" className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Why Sell With Us? 
            </Typography> <br></br><br></br>
            <div className="mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <AgricultureIcon style={{ fontSize: '5rem' }} />, title: 'Zero Commission', text: 'Keep 100% of your earnings with no middlemen' },
                { icon: <LocalShippingIcon style={{ fontSize: '5rem' }} />, title: 'Direct Market Access', text: 'Connect directly with buyers across your region' },
                { icon: <SmartphoneIcon style={{ fontSize: '5rem' }} />, title: 'Easy Management', text: 'Manage orders and payments through simple app' }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0a1f1d] p-6 rounded-xl shadow-2xl shadow-[#00ff88]/30 border border-[#00ff88]/20"
                >
                  <div className="text-4xl mb-4 text-[#00ff88] flex justify-center">
                    {benefit.icon}
                  </div>
                  <Typography variant="h6" className="font-bold mb-2 text-[#00ff88] text-center">
                    {benefit.title}
                  </Typography>
                  <Typography className="text-gray-300 text-center">
                    {benefit.text}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        <Modal
          open={Boolean(selectedProduct)}
          onClose={handleCloseModal}
          className="flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#0d2a28] rounded-2xl p-8 max-w-md w-full border border-[#00ff88]/30"
          >
            {selectedProduct && (
              <>
                <Typography variant="h5" className="text-[#00ff88] mb-4">
                  {selectedProduct.name}
                </Typography>
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Typography className="text-gray-300 mb-2">
                  Price: {selectedProduct.price}
                </Typography>
                <Typography className="text-gray-300 mb-4">
                  Category: {selectedProduct.category}
                </Typography>
                <TextField
                  type="number"
                  label="Quantity"
                  variant="outlined"
                  fullWidth
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mb-4"
                  inputProps={{ 
                    min: 1, 
                    max: 500 
                  }}
                  sx={{
                    '& .MuiOutlinedInput-input': {
                      color: 'white', // Set font color to white
                    },
                    '& .MuiInputLabel-root': {
                      color: 'white', // Set label color to white
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Set border color to white
                      },
                      '&:hover fieldset': {
                        borderColor: 'white', // Set border color on hover
                      },
                    },
                  }}
                />
                <div className="flex gap-4">
                  <Button 
                    variant="contained"
                    className="w-full bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black rounded-full py-3"
                    onClick={() => handlePaymentRedirect('bkash')}
                  >
                    Pay with bKash
                  </Button>
                  <Button 
                    variant="contained"
                    className="w-full bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black rounded-full py-3"
                    onClick={() => handlePaymentRedirect('nagad')}
                  >
                    Pay with Nagad
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </Modal>
>>>>>>> Stashed changes
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap md:w-1/2 lg:w-2/3 justify-between">
        {/* Resources */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Resources</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#about" className="hover:text-green-600">About</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-600">Blog Posts</a>
            </li>
            <li>
              <a href="#help" className="hover:text-green-600">Help Center</a>
            </li>
            <li>
              <a href="#community" className="hover:text-green-600">Community</a>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Connect With Us</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#facebook" className="hover:text-green-600">Facebook Page</a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-green-600">Instagram Feed</a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-green-600">Twitter</a>
            </li>
            <li>
              <a href="#linkedin" className="hover:text-green-600">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Legal Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#privacy" className="hover:text-green-600">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="hover:text-green-600">Terms of Service</a>
            </li>
            <li>
              <a href="#cookie" className="hover:text-green-600">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>  
    </Layout>
  )
}

export default KrishanBazer
