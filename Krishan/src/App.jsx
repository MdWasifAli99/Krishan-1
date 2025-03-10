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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route element={<PrivateRoute />}>
          
          <Route path="/krishanbazer" element={<KrishanBazer />} />
          <Route path="/advice" element={<Advice />} />
          </Route>

        
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;