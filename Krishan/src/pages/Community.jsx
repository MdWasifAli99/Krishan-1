import Layout from '../components/Layout'
import React from 'react'
import i1 from '../images/i1.jpg'
import i2 from '../images/i2.jpg'
import i3 from '../images/i3.jpg'

import './Community.css'

const Community = () => {
  return (
    <Layout> <div className="community-container">
    <h1 className="community-title">Join Our Community</h1>
    <p className="community-subtitle">Connect with fellow farmers, share experiences, and grow together in our vibrant community.</p>
    
    <section className="community-section">
      <div className="text-content">
        <h2>Connect with Fellow Farmers: Share, Learn, and Grow Together</h2>
        <p>Join our vibrant farmer community where you can discuss challenges and share insights. Our discussion boards are tailored for various crops and farming topics.</p>
        <ul>
          <li><strong>Crop Discussions:</strong> Engage in categorized threads focused on specific crops.</li>
          <li><strong>Success Stories:</strong> Read inspiring testimonials from fellow farmers.</li>
        </ul>
      </div>
      <div className="image-placeholder">

        <img width={1000} height={300}  src={i1} alt="Community" />
        
      </div>
    </section>
    
    <section className="community-section reverse">
   
      <div className="text-content">
        <h2>Connect with fellow farmers to share insights and seek advice.</h2>
        <p>Our community is a vibrant space where farmers can ask questions and share experiences.</p>
        <ul>
          <li><strong>Join Now:</strong> Engage with peers and gain valuable farming insights.</li>
          <li><strong>Success Stories:</strong> Read inspiring testimonials from fellow farmers.</li>
        </ul>
      </div>
      <div className="image-placeholder">
        <img width={1000} height={300}  src={i2} alt="Community" />
      </div>
    </section>

    <section className="contact-options">
      <div className="contact-item">📧 Email<p><small>Have Question ?Reach out to us anytime for assistence</small></p> </div>
      <div className="contact-item">💬 Live Chat,<p><small>Chat with our support team for immedite help</small></p></div>
      <div className="contact-item">📞 Phone<p><small>Call us for quick support & inquiries</small></p></div>
      <div className="contact-item">🏛️ Office<p><small>Visit us for in-persion support and consultation</small></p></div>
    </section>
  
    <section className="community-section reverse">
    <div className="image-placeholder">
     <img width={1000} height={300}  src={i3} alt="Community" />
   </div>
   <div><button className="btn">Learn More</button></div>
   <div className="text-content2">
     <h2>Real Stories from Our Farming Community</h2>
     <p>Discover how fellow farmers have transformed their practices and achieved remarkable results</p>
     <ul>
        <li><strong>Innovative techniques led to a bountiful harvest.</strong></li>
        <li><strong>Community support helped overcome weather challenges.</strong></li>
        <li><strong>Community support helped overcome weather challenges.</strong></li>
      </ul>
   </div>


    </section>
  </div>        
    </Layout>
  )
}

export default Community
