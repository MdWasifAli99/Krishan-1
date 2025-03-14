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
import Marketplace from '../images/Marketplace.png';

const KrishanBazer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productsPerPage = 8;

  const products = [
    // Expanded product list (40 items)
    { name: "Fresh Tomatoes", price: "৳25/kg", category: "Vegetables", image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg" },
    { name: "Organic Potatoes", price: "৳18/kg", category: "Vegetables", image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Premium Wheat", price: "৳30/kg", category: "Grains", image: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Sweet Carrots", price: "৳20/kg", category: "Vegetables", image: "https://images.pexels.com/photos/7543114/pexels-photo-7543114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Spinach", price: "৳15/bunch", category: "Leafy Greens", image: "https://images.pexels.com/photos/16731602/pexels-photo-16731602/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Rice", price: "৳45/kg", category: "Grains", image: "https://images.pexels.com/photos/4187615/pexels-photo-4187615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Apples", price: "৳120/kg", category: "Fruits", image: "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Ripe Bananas", price: "৳40/kg", category: "Fruits", image: "https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Juicy Oranges", price: "৳80/kg", category: "Fruits", image: "https://images.pexels.com/photos/3584910/pexels-photo-3584910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Grapes", price: "৳150/kg", category: "Fruits", image: "https://images.pexels.com/photos/357742/pexels-photo-357742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Sweet Mangoes", price: "৳100/kg", category: "Fruits", image: "https://images.pexels.com/photos/30893227/pexels-photo-30893227/free-photo-of-freshly-harvested-mangoes-on-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Strawberries", price: "৳200/kg", category: "Fruits", image: "https://images.pexels.com/photos/106148/strawberries-fruit-red-sweet-106148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Crisp Cucumbers", price: "৳30/kg", category: "Vegetables", image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Bell Peppers", price: "৳50/kg", category: "Vegetables", image: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Onions", price: "৳35/kg", category: "Vegetables", image: "https://images.pexels.com/photos/15421637/pexels-photo-15421637/free-photo-of-onions-in-close-up-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Garlic", price: "৳60/kg", category: "Vegetables", image: "https://images.pexels.com/photos/1638522/pexels-photo-1638522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Broccoli", price: "৳90/kg", category: "Vegetables", image: "https://images.pexels.com/photos/30931704/pexels-photo-30931704/free-photo-of-fresh-broccoli-at-kahramanmaras-market.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Cauliflower", price: "৳70/kg", category: "Vegetables", image: "https://images.pexels.com/photos/7572005/pexels-photo-7572005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Sweet Pineapples", price: "৳110/kg", category: "Fruits", image: "https://images.pexels.com/photos/2469772/pexels-photo-2469772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Papayas", price: "৳90/kg", category: "Fruits", image: "https://images.pexels.com/photos/28613331/pexels-photo-28613331/free-photo-of-close-up-of-fresh-papayas-with-juicy-orange-flesh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Ripe Guavas", price: "৳60/kg", category: "Fruits", image: "https://images.pexels.com/photos/28056894/pexels-photo-28056894/free-photo-of-a-basket-full-of-green-fruit-and-a-bowl-of-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Pomegranates", price: "৳180/kg", category: "Fruits", image: "https://images.pexels.com/photos/15364750/pexels-photo-15364750/free-photo-of-close-up-of-pomegranates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Sweet Watermelons", price: "৳40/kg", category: "Fruits", image: "https://images.pexels.com/photos/7898007/pexels-photo-7898007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Kiwis", price: "৳200/kg", category: "Fruits", image: "https://images.pexels.com/photos/6316511/pexels-photo-6316511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Lentils", price: "৳80/kg", category: "Grains", image: "https://images.pexels.com/photos/14965274/pexels-photo-14965274/free-photo-of-dry-peas-seeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Fresh Chickpeas", price: "৳90/kg", category: "Grains", image: "https://images.pexels.com/photos/29060109/pexels-photo-29060109/free-photo-of-close-up-of-fresh-chickpeas-in-bulk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Barley", price: "৳50/kg", category: "Grains", image: "https://plus.unsplash.com/premium_photo-1705404738459-c4cb25ad7933?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Fresh Quinoa", price: "৳120/kg", category: "Grains", image: "https://www.brillante.es/wp-content/uploads/2024/10/beneficios-quinoa-cruda-960x533.jpg" },
    { name: "Organic Oats", price: "৳70/kg", category: "Grains", image: "https://images.pexels.com/photos/22039740/pexels-photo-22039740/free-photo-of-mug-in-bag-of-oats.jpeg" },
    { name: "Fresh Corn", price: "৳40/kg", category: "Grains", image: "https://images.pexels.com/photos/14171758/pexels-photo-14171758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Millet", price: "৳60/kg", category: "Grains", image: "https://media.licdn.com/dms/image/v2/D4D12AQFvEMwVCPZuXg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730140372042?e=2147483647&v=beta&t=2JOBDfgMDEpAMN3YArxJcST_kvryz0foYc08NRWkKpI" },
    { name: "Fresh Basil", price: "৳30/bunch", category: "Leafy Greens", image: "https://images.pexels.com/photos/12417454/pexels-photo-12417454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Kale", price: "৳50/bunch", category: "Leafy Greens", image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTc0MjQ2MDcyNjUzMTk0NzQ4/all-about-fruits-and-vegetables-kale.webp" },
    { name: "Fresh Mint", price: "৳20/bunch", category: "Leafy Greens", image: "https://img.freepik.com/premium-photo/mint-leaves-sold-supermarket-selective-focus_136497-2565.jpg?w=740" },
    { name: "Organic Cilantro", price: "৳25/bunch", category: "Leafy Greens", image: "https://img.freepik.com/premium-photo/market-stall-filled-fresh-cilantro-coriandrum-sativum-ready-buyers-with-focus-organic-produce_960396-886607.jpg?w=740" },
    { name: "Fresh Parsley", price: "৳30/bunch", category: "Leafy Greens", image: "https://images.pexels.com/photos/16812120/pexels-photo-16812120/free-photo-of-heap-of-fresh-leaves-of-parsley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Organic Arugula", price: "৳40/bunch", category: "Leafy Greens", image: "https://northernwildflowers.ca/cdn/shop/products/RoquetteArugulashutterstock_1955364187_1024x1024@2x.jpg?v=1649172373" },
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
        <section className="relative h-96 flex items-center justify-center overflow-hidden bg-cover bg-center">
          <img src = {Marketplace} alt = "Marketplace" className = "absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="text-center z-10 p-6 max-w-8xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="p2" 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]"
                style={{ textShadow: '0 0 15px rgba(0,255,136,0.5)' }}
              >
                Direct from Farm to Your Home
              </Typography> <br></br><br></br>
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
          <Typography variant="p4" className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Fresh from Local Farms
          </Typography> <br></br><br></br>
          
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
                      <Typography variant="p6" className="font-bold text-[#ffffff]">
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
      </div>
    </Layout>
  )
}

export default KrishanBazer;