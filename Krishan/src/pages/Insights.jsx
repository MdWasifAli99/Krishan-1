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
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
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
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Graph Section */}
      <Card style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Product Price Graph
          </Typography>
          <Bar data={chartData} options={chartOptions} />
        </CardContent>
      </Card>

      {/* Product List Section */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Product List
          </Typography>
          <List>
            {products.map((product) => (
              <ListItem key={product._id}>
                <ListItemText
                  primary={product.name}
                  secondary={`Price: $${product.price}`}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;