import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // Redirect to login if not authenticated
    } else {
      setIsLoading(false); // Set loading to false if token exists
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
        <button 
          onClick={handleLogout} 
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default Dashboard;