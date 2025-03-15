import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
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

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [adviceList, setAdviceList] = useState([]);
  const [showAllAdvice, setShowAllAdvice] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch user data, products, and advice list from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(userResponse.data);

        // Fetch products
        const productsResponse = await axios.get("http://localhost:5000/api/products");
        setProducts(productsResponse.data);

        // Fetch advice list
        const adviceResponse = await axios.get("http://localhost:5000/api/advice");
        setAdviceList(adviceResponse.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        color: "#ffffff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
      },
    },
  };

  // Toggle between showing all advice and top 5 advice
  const toggleAdvice = () => {
    setShowAllAdvice(!showAllAdvice);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress sx={{ color: "#00ff88" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" align="center" sx={{ color: "#ff4444", mt: 4 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Layout>
      <Box sx={{ backgroundColor: "rgba(14, 31, 29, 0.9)", minHeight: "100vh", padding: "20px" }}>
        {/* Avatar and Username */}
        <Box display="flex" alignItems="center" mb={4}>
          <Avatar sx={{ bgcolor: "#00ff88", width: 56, height: 56, fontSize: 24 }}>
            {user?.name?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h4" sx={{ color: "#00ff88", ml: 2 }}>
            {user?.name}
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4}>
          {/* Card 1: User Info */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#0a2f2c", border: "2px solid #00ff88", borderRadius: "12px" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#00ff88", mb: 2 }}>
                  User Information
                </Typography>
                <Typography sx={{ color: "#00ff88" }}>
                  <strong>Email:</strong> {user?.email}
                </Typography>
                <Typography sx={{ color: "#00ff88" }}>
                  <strong>Role:</strong> {user?.role}
                </Typography>
                <Typography sx={{ color: "#00ff88" }}>
                  <strong>Location:</strong> {user?.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Real-Time Graph */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "#0a2f2c", border: "2px solid #00ff88", borderRadius: "12px" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#00ff88", mb: 2 }}>
                  Product Prices
                </Typography>
                <Bar data={chartData} options={chartOptions} />
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Top 5 Advice */}
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#0a2f2c", border: "2px solid #00ff88", borderRadius: "12px" }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#00ff88", mb: 2 }}>
                  {showAllAdvice ? "All Advice" : "Top 5 Advice"}
                </Typography>
                <List>
                  {(showAllAdvice ? adviceList : adviceList.slice(0, 5)).map((advice) => (
                    <ListItem key={advice._id} sx={{ mb: 1, borderBottom: "1px solid #00ff88" }}>
                      <ListItemText
                        primary={
                          <Typography variant="body1" sx={{ color: "#00ff88" }}>
                            {advice.title}
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: "#00ff88" }}>
                            {advice.content}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  onClick={toggleAdvice}
                  sx={{ backgroundColor: "#00ff88", color: "#0a2f2c", mt: 2 }}
                >
                  {showAllAdvice ? "Show Less" : "Show More"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Dashboard;