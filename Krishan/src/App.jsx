import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import Home from "./pages/Home";
import Advice from "./pages/Advice";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
import Community from "./pages/Community";
import Insights from "./pages/Insights";
import Weather from "./pages/Weather";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import KrishanBazer from "./pages/KrishanBazer";
import PageNotFound from "./pages/PageNotFound";
import HomeBlog1 from './pages/HomeBlog1'; 
import FeatureBlog1 from './pages/FeatureBlog1';
import FeatureBlog2 from './pages/FeatureBlog2';

import ProfilePage from './pages/ProfilePage';
import AddProduct from './pages/AddProduct';

import WeatherBlog1 from "./pages/WeatherBlog1";
import WeatherBlog2 from "./pages/WeatherBlog2";
import WeatherBlog3 from "./pages/WeatherBlog3";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
      axios.get("http://localhost:5000/api/message")
          .then(response => setMessage(response.data.message))
          .catch(error => console.error("Error fetching data:", error));
  }, []);



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
         
          
          <Route path="/community" element={<Community />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/features" element={<Features />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homeblog1" element={<HomeBlog1 />} />
          <Route path="/featureblog1" element={<FeatureBlog1 />} />
          <Route path="/featureblog2" element={<FeatureBlog2 />} />
          <Route path="/weatherblog1" element={<WeatherBlog1 />} />
          <Route path="/weatherblog2" element={<WeatherBlog2 />} />
          <Route path="/weatherblog3" element={<WeatherBlog3 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<PrivateRoute />}>
          
          
          </Route>
          <Route path="/krishanbazer" element={<KrishanBazer />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/addproduct" element={<AddProduct />} />
        
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;