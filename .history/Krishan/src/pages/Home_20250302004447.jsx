import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom";
import '../App.css';

const Home = () => {
  return (
   <Layout>
      <div className="app">
    
      <header className="hero-section">
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-6">
        <div className="content">
          <h1>Empowering Farmers with Innovative Technology Solutions</h1>
          <p>
            Join a community dedicated to enhancing agricultural practices. Discover tools and resources designed to support your farming journey.
          </p>
          <div className="buttons">
            
            <button className="btn btn-light">Learn More</button>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="col-md-6 text-center">
        <img
          src="https://rangde.in/blog-admin/uploads/Indian_Farmers_61e5e4cb8b.png" 
          alt="Placeholder for Hero Section" 
          className="img-fluid"
        />
      </div>
    </div>
  </div>
</header>


      {/* Features Section */}
      <section className="features-section">
        <h2>Explore Our Key Features for Farmers</h2>
        <p>
          At Krishan, we provide essential tools to enhance your farming experience. Our features are designed to empower farmers with valuable insights and resources.
        </p>
        <div className="features-grid">
          <div className="feature">
            <h3>Market Monitoring</h3>
            <p>Stay updated with real-time price trends and demand insights tailored for your farming needs.</p>
          </div>
          <div className="feature">
            <h3>Weather Information</h3>
            <p>Access accurate weather forecasts and alerts to make informed decisions for your crops.</p>
          </div>
          <div className="feature">
            <h3>Expert Advice</h3>
            <p>Get insights from seasoned professionals through articles, blogs, and our 'Ask an Expert' feature.</p>
          </div>
          <div className="feature">
            <h3>Krishan Bazar</h3>
            <p>Buy and sell produce effortlessly while accessing pricing insights in our online marketplace.</p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="join-section">
        <h2>Join Our Farming Community</h2>
        <p>Become part of a thriving network dedicated to empowering farmers through innovative technology and support.</p>
        <button className="btn btn-green">Join</button>
        <button className="btn btn-light">Learn More</button>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <h2>Join Krishan Today</h2>
        <p>Empowering Farmers through Technology for a sustainable and prosperous future in agriculture.</p>
      </footer>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Farming Insights</h2>
        <p>Stay updated with the latest in agriculture.</p>
      </section>
    </div>
   </Layout>
  )
}

export default Home
