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
import React, { useState } from 'react';
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
  const productsPerPage = 8;

  const products = [
    // Expanded product list (40 items)
    { name: "Fresh Tomatoes", price: "₹25/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?tomato" },
    { name: "Organic Potatoes", price: "₹18/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?potato" },
    { name: "Premium Wheat", price: "₹30/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?wheat" },
    { name: "Sweet Carrots", price: "₹20/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?carrot" },
    { name: "Fresh Spinach", price: "₹15/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?spinach" },
    { name: "Organic Rice", price: "₹45/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?rice" },
    { name: "Fresh Apples", price: "₹120/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?apple" },
    { name: "Ripe Bananas", price: "₹40/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?banana" },
    { name: "Juicy Oranges", price: "₹80/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?orange" },
    { name: "Fresh Grapes", price: "₹150/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?grapes" },
    { name: "Sweet Mangoes", price: "₹100/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?mango" },
    { name: "Fresh Strawberries", price: "₹200/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?strawberry" },
    { name: "Crisp Cucumbers", price: "₹30/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?cucumber" },
    { name: "Fresh Bell Peppers", price: "₹50/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?bellpepper" },
    { name: "Organic Onions", price: "₹35/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?onion" },
    { name: "Fresh Garlic", price: "₹60/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?garlic" },
    { name: "Organic Broccoli", price: "₹90/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?broccoli" },
    { name: "Fresh Cauliflower", price: "₹70/kg", category: "Vegetables", image: "https://source.unsplash.com/random/400x300/?cauliflower" },
    { name: "Sweet Pineapples", price: "₹110/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?pineapple" },
    { name: "Fresh Papayas", price: "₹90/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?papaya" },
    { name: "Ripe Guavas", price: "₹60/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?guava" },
    { name: "Fresh Pomegranates", price: "₹180/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?pomegranate" },
    { name: "Sweet Watermelons", price: "₹40/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?watermelon" },
    { name: "Fresh Kiwis", price: "₹200/kg", category: "Fruits", image: "https://source.unsplash.com/random/400x300/?kiwi" },
    { name: "Organic Lentils", price: "₹80/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?lentils" },
    { name: "Fresh Chickpeas", price: "₹90/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?chickpeas" },
    { name: "Organic Barley", price: "₹50/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?barley" },
    { name: "Fresh Quinoa", price: "₹120/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?quinoa" },
    { name: "Organic Oats", price: "₹70/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?oats" },
    { name: "Fresh Corn", price: "₹40/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?corn" },
    { name: "Organic Millet", price: "₹60/kg", category: "Grains", image: "https://source.unsplash.com/random/400x300/?millet" },
    { name: "Fresh Basil", price: "₹30/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?basil" },
    { name: "Organic Kale", price: "₹50/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?kale" },
    { name: "Fresh Mint", price: "₹20/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?mint" },
    { name: "Organic Cilantro", price: "₹25/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?cilantro" },
    { name: "Fresh Parsley", price: "₹30/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?parsley" },
    { name: "Organic Arugula", price: "₹40/bunch", category: "Leafy Greens", image: "https://source.unsplash.com/random/400x300/?arugula" },
  ];

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

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] font-poppins text-white">
        {/* Hero Section with Background Image */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
          <div className="text-center z-10 p-6 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]"
                style={{ textShadow: '0 0 15px rgba(0,255,136,0.5)' }}
              >
                Direct from Farm to Your Home
              </Typography>
              <Typography variant="h6" className="mb-8 text-gray-300 text-xl">
                Supporting Local Farmers, Providing Fresh Produce
              </Typography>
            </motion.div>
          </div>
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
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <Typography variant="h4" className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Fresh from Local Farms
          </Typography>
          
          <Grid container spacing={4}>
            {currentProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => handleProductClick(product)}
                >
                  <Card className="h-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#0d2a28] border border-[#00ff88]/20 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff8820] to-[#00b8ff20] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <CardMedia
                      component="img"
                      image={product.image}
                      className="h-48 object-cover"
                      alt={product.name}
                    />
                    <CardContent className="bg-[#0d2a28]">
                      <Typography variant="h6" className="font-bold text-[#00ff88]">
                        {product.name}
                      </Typography>
                      <div className="mt-2 flex justify-between items-center">
                        <Typography className="text-[#00ff88] font-bold text-lg">
                          {product.price}
                        </Typography>
                        <Button 
                          variant="contained" 
                          className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] hover:scale-105 text-black rounded-full px-4 py-2 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30"
                        >
                          Buy Now
                        </Button>
                      </div>
                      <div className="mt-2 text-sm text-gray-300">
                        {product.category}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-2 rounded-full ${
                currentPage === 1 
                  ? 'bg-[#0d2a28] text-white border border-[#00ff88] cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black cursor-pointer'
              }`}
              onClick={() => paginate('prev')}
            >
              <ArrowBackIosIcon />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-2 rounded-full ${
                currentPage === Math.ceil(filteredProducts.length / productsPerPage)
                  ? 'bg-[#0d2a28] text-white border border-[#00ff88] cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black cursor-pointer'
              }`}
              onClick={() => paginate('next')}
            >
              <ArrowForwardIosIcon />
            </motion.div>
          </div>
        </section>

        {/* Farmer Benefits Section */}
        <section className="py-16 bg-[#0d2a28]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
            <Typography variant="h4" className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Why Sell With Us?
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <AgricultureIcon fontSize="large" />, title: 'Zero Commission', text: 'Keep 100% of your earnings with no middlemen' },
                { icon: <LocalShippingIcon fontSize="large" />, title: 'Direct Market Access', text: 'Connect directly with buyers across your region' },
                { icon: <SmartphoneIcon fontSize="large" />, title: 'Easy Management', text: 'Manage orders and payments through simple app' }
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
                  label="Quantity (kg)"
                  variant="outlined"
                  fullWidth
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mb-4"
                  InputProps={{ inputProps: { min: 1 } }}
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

        {/* Footer */}
        <footer className="bg-[#0a1f1d] py-8 border-t border-[#00ff88]/20">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center">
            <Typography className="mb-4 text-gray-300">
              Empowering Farmers Since 2024
            </Typography>
            <div className="flex justify-center gap-4">
              {['About Us', 'Contact', 'FAQs'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton 
                    className="text-gray-300 hover:text-[#00ff88] transition-colors duration-300"
                  >
                    <span className="text-sm">{item}</span>
                  </IconButton>
                </motion.div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default KrishanBazer;