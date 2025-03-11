import Layout from '../components/Layout'
import React from 'react';
import './Features.css';
import '../App.css';
import { Link } from "react-router-dom";
import Row from '../images/Row.jpg';
import Chacha from '../images/Chacha.png';
import Monitor from '../images/Monitor.jpg';
import Weather from '../images/Weather.jpg';
import Planning from '../images/Planning.jpg';

const Features = () => {
  return (
    <Layout>
        <div className="features-page">
      
      <section className="hero">
        <div classname="hero1"><img src={Chacha} alt="Chacha" /></div>
        <br></br><br></br><div style={{
        fontSize: "20px"}} classname="hero1">
         <br></br><h1>Empowering Farmers Today</h1>
        <p>Discover how Krishan revolutionizes farming with cutting-edge technology <br></br> and community-driven solutions for farmers.</p><br></br>
        <Link to="/signup" className="btn"><button><strong>Join Us</strong></button></Link><Link to="/featureblog1" className="btn"><button><strong>Learn More</strong></button></Link>
        </div>
        
      </section>

      <section className="features">
        <h4>Features</h4>
        <h1>Explore Our Innovative Farming Solutions</h1>
        <h3>At Krishan, We harness technology to empower farmers with essential tools.
        Our features <br></br> are used to enhance productivity and foster a thriving agricultural community.</h3><br></br>
        <div className="feature-cards">
            <img src={Row} alt="Row" />
        </div> <br></br>
       <Link to ="/featureblog2"><button><strong>Learn more</strong></button></Link>  <Link to ="/signup"><button2><strong>Join us</strong></button2></Link> 

      </section>

      <section className="insights">
        <h1 style={{fontSize: "47px"}}>Revolutionizing Market Monitoring for Farmers</h1>
        <h3>Stay ahead with our interactive price trends and demand insights.</h3>
        <br></br>
        <div className="stats">
          <div className="stat">
            <h1 >90%</h1>
            <p>Maximize profits with data-dr marketiven strategies.</p> <br></br>
            <h1>76%</h1>
            <p>Access comprehensive insights for smarter farming.</p>
          </div>
          <div className="stat">
            <img src={Monitor} alt="Monitor" />
          </div>
        </div>
      </section>

      <section className="weather">
        <h1>Stay Ahead with Real-Time Weather Insights</h1>
        <h3>Harness the power of accurate weather data tailored for farmers.</h3><br></br>
        <div className="weather-info">
          <div className="info">
            <img src={Weather} alt="Weather" />
            <h2>Forecast Accuracy</h2>
            <p>Get precise weather updates to enhance your farming strategies.</p>
          </div>
          <div className="info">
            <img src={Planning} alt="Planning" />
            <h2>Planning Tools</h2>
            <p>Utilize crop-specific recommendations for planting and harvesting.</p>
          </div>
        </div>
      </section>

      <section className="community">
        <h2>Join Our Thriving Farmer Community Today</h2>
        <p>Engage with fellow farmers in our dynamic forums.</p>
       <Link to ="/signup"><button>Join</button></Link> 
      </section>

      
    </div>
    </Layout>
  )
}

export default Features
