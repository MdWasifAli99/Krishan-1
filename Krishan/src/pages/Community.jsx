import Layout from '../components/Layout';
import React from 'react';
import { Link } from 'react-router-dom';
import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import './Community.css';

const Community = () => {
  return (
    <Layout>
      <div className="font-poppins bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] text-white">
        {/* Hero Section */}
        <section className="relative py-24 px-6 md:px-12 lg:px-24 text-center">
          <p1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Join Our Community
          </p1><br></br><br></br>
          <p className="text-lg text-gray-300 mb-12">
            Connect with fellow farmers, share experiences, and grow together in our vibrant community.
          </p>
        </section>

        {/* Section 1: Connect with Fellow Farmers */}
        <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Connect with Fellow Farmers
            </p2> <br></br><br></br>
            <p className="text-lg text-gray-300 mb-6">
              Join our vibrant farmer community where you can discuss challenges and share insights. Our discussion boards are tailored for various crops and farming topics.
            </p><br></br>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><strong>Crop Discussions:</strong> Engage in categorized threads focused on specific crops.</li>
              <li><strong>Success Stories:</strong> Read inspiring testimonials from fellow farmers.</li><br></br>
            </ul>
            <Link
              to="/communityblogpage1"
              className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-[#00ff88]/30 " Style={{ textDecoration: 'none' }}
            >
              Read More 
            </Link>
          </div>
          <div className="flex-1">
            <img
              src={i1}
              alt="Community"
              className="rounded-2xl shadow-2xl hover:shadow-[#00ff88]/30 transition-shadow"
            />
          </div>
        </section>

        {/* Section 2: Share Insights and Seek Advice */}
        <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <p2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00b8ff] to-[#00ff88]">
              Share Insights and Seek Advice
            </p2> <br></br><br></br>
            <p className="text-lg text-gray-300 mb-6">
              Our community is a vibrant space where farmers can ask questions and share experiences.
            </p><br></br>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><strong>Join Now:</strong> Engage with peers and gain valuable farming insights.</li>
              <li><strong>Success Stories:</strong> Read inspiring testimonials from fellow farmers.</li><br></br>
            </ul>
            <Link
              to="/communityblogpage1"
              className="bg-gradient-to-r from-[#00b8ff] to-[#00ff88] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-[#00b8ff]/30" style={{ textDecoration: 'none' }}
            >
              Read More
            </Link>
          </div>
          <div className="flex-1">
            <img
              src={i2}
              alt="Community"
              className="rounded-2xl shadow-2xl hover:shadow-[#00b8ff]/30 transition-shadow" style={{ textDecoration: 'none' }}
            />
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
          <p2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Contact Options
          </p2> <br></br><br></br><br></br><br></br>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-[#0a2f2c] rounded-2xl border-2 border-[#00ff88]/20 hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10">
              <div className="text-4xl mb-4">📧</div>
              <p3 className="text-2xl font-bold mb-2">Email</p3><br></br><br></br>
              <p className="text-gray-300">support@krishan.com</p>
            </div>
            <div className="p-6 bg-[#0a2f2c] rounded-2xl border-2 border-[#00b8ff]/20 hover:border-[#00ff88] transition-all shadow-2xl shadow-[#00b8ff]/10">
              <div className="text-4xl mb-4">💬</div>
              <p3 className="text-2xl font-bold mb-2">Live Chat</p3>
              <p className="text-gray-300">Chat with our support team for immediate help.</p>
            </div>
            <div className="p-6 bg-[#0a2f2c] rounded-2xl border-2 border-[#00ff88]/20 hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10">
              <div className="text-4xl mb-4">📞</div>
              <p3 className="text-2xl font-bold mb-2">Phone</p3><br></br><br></br>
              <p className="text-gray-300">+88015XXXXXXXX</p>
            </div>
            <div className="p-6 bg-[#0a2f2c] rounded-2xl border-2 border-[#00b8ff]/20 hover:border-[#00ff88] transition-all shadow-2xl shadow-[#00b8ff]/10">
              <div className="text-4xl mb-4">🏛️</div>
              <p3 className="text-2xl font-bold mb-2">Office</p3>
              <p className="text-gray-300">Road 3, Niketon, Dhaka, Bangladesh</p>
            </div>
          </div>
        </section>

        {/* Section 3: Real Stories from Our Farming Community */}
        <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src={i3}
              alt="Community"
              className="rounded-2xl shadow-2xl hover:shadow-[#00ff88]/30 transition-shadow"
            />
          </div>
          <div className="flex-1">
            <p2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Real Stories from Our Farming Community
            </p2> <br></br><br></br>
            <p className="text-lg text-gray-300 mb-6">
              Discover how fellow farmers have transformed their practices and achieved remarkable results.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li><strong>Innovative techniques led to a bountiful harvest.</strong></li>
              <li><strong>Community support helped overcome weather challenges.</strong></li><br></br>
            </ul>
            <Link
              to="/communityblogpage1"
              className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-[#00ff88]/30" style={{ textDecoration: 'none' }}
            >
              Learn More
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Community;