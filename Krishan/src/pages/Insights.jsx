import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { TrendingUp, WbSunny, Group, LocalGroceryStore, Waves, Whatshot } from "@mui/icons-material"; // MUI Icons

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Insights = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // Adjust the API endpoint as needed
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: products.map((product) => product.name), // X-axis: Product names
    datasets: [
      {
        label: "Price",
        data: products.map((product) => product.price), // Y-axis: Product prices
        backgroundColor: "rgba(0, 255, 136, 0.6)", // Gradient green
        borderColor: "rgba(0, 184, 255, 1)", // Gradient blue
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Prices",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#000000", // Gradient green
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000000", // Gradient green
        },
      },
      y: {
        ticks: {
          color: "#000000", // Gradient green
        },
      },
    },
  };

  return (
    <Layout>
        <div className="font-poppins bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] text-white min-h-screen p-6 md:p-12 lg:p-24">
    {/* Added Hero Section */}
    <section className="text-center mb-16">
      <p1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
        Market Monitoring
      </p1> <br></br><br></br>
      <p className="text-xl md:text-xl text-gray-300 max-w-2xl mx-auto">
        Real-time pricing data and market trends for Bangladeshi agricultural commodities. Make informed decisions with our comprehensive analytics.
      </p>
    </section>
        {/* Graph Section */}
        <Card className="bg-[#0d2a28] border-2 border-[#00ff88]/20 rounded-xl hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10 mb-8">
          <CardContent>
            <Typography variant="h5" className="text-[#00ff88] font-bold mb-4">
              <TrendingUp className="mr-2" /> Krishan Bazer Price Trends
            </Typography>
            <Bar data={chartData} options={chartOptions} />
          </CardContent>
        </Card>

        {/* Product List Section */}
        <Card className="bg-[#0d2a28] border-2 border-[#00ff88]/20 rounded-xl hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10 mb-8">
          <CardContent>
            <Typography variant="h5" className="text-[#00ff88] font-bold mb-4">
              <LocalGroceryStore className="mr-2" /> Krishan Bazer Products
            </Typography>
            <List>
              {products.map((product) => (
                <ListItem key={product._id} className="hover:bg-[#e4fde1] transition-all">
                  <ListItemText
                    primary={product.name}
                    secondary={`Price: $${product.price}`}
                    primaryTypographyProps={{ className: "text-[#00ff88]" }}
                    secondaryTypographyProps={{ className: "text-gray-300" }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        {/* Price Table Section */}
        <Card className="bg-[#0d2a28] py-10 border-2 border-[#00ff88]/20 rounded-xl hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10">
          <CardContent>
            <Typography variant="h4" className="text-[#00ff88] text-center font-bold mb-4">
              <p1 className="text-2xl md:text-6xl text center font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
        Price List as of 14th March 2025
      </p1> 
            </Typography>

<Typography variant="h4" className="text-[#00ff88] font-bold mb-4">
              <p className="text-xl md:text-xl text-center max-w-2xl mx-auto">
       Source: Karwan Bazar, New Market, Mohammadpur Town Hall Bazar, Mohakhali Kacha bazar, Kaptan Bazar Dhaka
       </p>
            </Typography>

      

            {/* Rice Table */}
            <Typography variant="h6" className="text-[#00b8ff] font-semibold mt-6 mb-2">
              <Whatshot className="mr-2" /> Rice
            </Typography>
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-[#0a1f1d]">
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Type</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Unit</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Min Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Max Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Change (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Coarse Rice (Local/Imported)</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">70</td>
                  <td className="p-3 border border-[#00ff88]/20">85</td>
                  <td className="p-3 border border-[#00ff88]/20 text-red-500">-0.64%</td>
                </tr>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Medium Quality Rice</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">58</td>
                  <td className="p-3 border border-[#00ff88]/20">65</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.82%</td>
                </tr>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Fine Rice (Swarna/Chinigura)</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">50</td>
                  <td className="p-3 border border-[#00ff88]/20">55</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.00%</td>
                </tr>
              </tbody>
            </table>
                    <br></br>

            {/* Wheat Table */}
            <Typography variant="h6" className="text-[#00b8ff] font-semibold mt-6 mb-2">
              <Whatshot className="mr-2" /> Wheat
            </Typography>
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-[#0a1f1d]">
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Type</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Unit</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Min Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Max Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Change (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Wheat (Local)</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">40</td>
                  <td className="p-3 border border-[#00ff88]/20">45</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.00%</td>
                </tr>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Wheat (Imported)</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">50</td>
                  <td className="p-3 border border-[#00ff88]/20">55</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.00%</td>
                </tr>
              </tbody>
            </table>
                <br></br>
            {/* oil Table */}
            <Typography variant="h6" className="text-[#00b8ff] font-semibold mt-6 mb-2">
              <Whatshot className="mr-2" /> Edible Oil
            </Typography>
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-[#0a1f1d]">
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Type</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Unit</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Min Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Max Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Change (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Soybean Oil</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">175</td>
                  <td className="p-3 border border-[#00ff88]/20">178</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.00%</td>
                </tr>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Rice Bran Oild</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">205</td>
                  <td className="p-3 border border-[#00ff88]/20">210</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.00%</td>
                </tr>
              </tbody>
            </table>
                <br></br>

            {/* Fish Table */}
            <Typography variant="h6" className="text-[#00b8ff] font-semibold mt-6 mb-2">
              <Whatshot className="mr-2" /> Fish
            </Typography>
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr className="bg-[#0a1f1d]">
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Type</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Unit</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Min Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Max Price</th>
                  <th className="p-3 border border-[#00ff88]/20 text-left text-[#00ff88]">Change (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Rui</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">280</td>
                  <td className="p-3 border border-[#00ff88]/20">450</td>
                  <td className="p-3 border border-[#00ff88]/20 text-red-500">-0.64%</td>
                </tr>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Ilish</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">650</td>
                  <td className="p-3 border border-[#00ff88]/20">1600</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.82%</td>
                </tr>
                <tr className="hover:bg-[#e4fde1] transition-all">
                  <td className="p-3 border border-[#00ff88]/20">Pangash</td>
                  <td className="p-3 border border-[#00ff88]/20">Per Kg</td>
                  <td className="p-3 border border-[#00ff88]/20">170</td>
                  <td className="p-3 border border-[#00ff88]/20">240</td>
                  <td className="p-3 border border-[#00ff88]/20 text-green-500">+0.00%</td>
                </tr>
              </tbody>
            </table>
                    

            <br></br><br></br>

            {/* Comments Section */}
            <Typography variant="h6" className="text-[#00b8ff] font-semibold mt-6 mb-2">
              <Group className="mr-2" /> Comments
            </Typography> <br></br>
            <Typography variant="body1" className="text-black mt-2">
              1. Prices of Coarse Rice, Lentils (Loose, 2kg: Packed), Onion (Loose, Dry), Soybean Oil, Garlic (Local), Ginger (Local), Elach, Cumin, and Salt have decreased.
            </Typography>
            <Typography variant="body1" className="text-black mt-2">
              2. Prices of other commodities have remained stable.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Insights;