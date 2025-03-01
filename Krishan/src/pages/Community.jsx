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
   {/* Footer */}
   <footer className="bg-green-50 border-t border-gray-200 mt-10">
  <div className="max-w-7xl mx-auto px-4 py-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
      {/* Newsletter */}
      <div className="md:w-1/2 lg:w-1/3 space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Subscribe to our newsletter for the latest updates on features and releases
        </h3>
        <div className="flex">
          <input
            type="email"
            placeholder="Your Email Here"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r">
            Join
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap md:w-1/2 lg:w-2/3 justify-between">
        {/* Resources */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Resources</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#about" className="hover:text-green-600">About</a>
            </li>
            <li>
              <a href="#blog" className="hover:text-green-600">Blog Posts</a>
            </li>
            <li>
              <a href="#help" className="hover:text-green-600">Help Center</a>
            </li>
            <li>
              <a href="#community" className="hover:text-green-600">Community</a>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Connect With Us</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#facebook" className="hover:text-green-600">Facebook Page</a>
            </li>
            <li>
              <a href="#instagram" className="hover:text-green-600">Instagram Feed</a>
            </li>
            <li>
              <a href="#twitter" className="hover:text-green-600">Twitter</a>
            </li>
            <li>
              <a href="#linkedin" className="hover:text-green-600">LinkedIn</a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-gray-800">Legal Links</h4>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>
              <a href="#privacy" className="hover:text-green-600">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="hover:text-green-600">Terms of Service</a>
            </li>
            <li>
              <a href="#cookie" className="hover:text-green-600">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>     
    </Layout>
  )
}

export default Community
