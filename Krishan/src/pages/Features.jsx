import Layout from '../components/Layout';
import React from 'react';
import { Link } from 'react-router-dom';
import Chacha from '../images/Chacha.png'; // Ensure this image has a transparent background
import Monitor from '../images/Monitor.jpg';
import Weather from '../images/Weather.jpg';
import Planning from '../images/Planning.jpg';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Market Monitoring Icon
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Weather Info Icon
import GroupIcon from '@mui/icons-material/Group'; // Farmer Community Icon

const Features = () => {
  return (
    <Layout>
      <div className="font-poppins bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] text-white">
        {/* Hero Section */}
        <section className="relative py-10 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
          <div className="flex-1 z-10">
            <p1 className="text-[8rem] md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Empowering Farmers Today
            </p1>
            <p className="text-lg mb-12 text-gray-300"><br></br>
              Discover how Krishan revolutionizes farming with cutting-edge technology and community-driven solutions for farmers.
            </p><br></br><br></br>
            <div className="flex gap-4">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black  px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30 "
              style={{ textDecoration: 'none' }}
              >
                Join Us

              </Link>
              <Link to = "/featureblog1"><button className="bg-transparent border border-[#00ff88] text-[#ffffff] px-8 py-3 rounded-lg font-semibold hover:bg-[#00ff88] hover:text-[#00ff88] transition-all duration-300 shadow-lg shadow-[#00ff88]/30">
                Learn More
              </button></Link>

              </Link><Link to ="/featureblog1"> <button className="bg-transparent border border-[#00ff88] text-[#ffffff] px-8 py-3 rounded-lg font-semibold hover:bg-[#00ff88] hover:text-[#00ff88] transition-all duration-300 shadow-lg shadow-[#00ff88]/30">
                Learn More
              </button></Link>
             

            </div>
          </div>
          <div className="flex-1 flex justify-center z-10">
            {/* Very Large Transparent Chacha Image */}
            <img
              src={Chacha}
              alt="Chacha"
              className="max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
              style={{ maxWidth: '600px' }} // Increased size for a larger image
            />
          </div>
          <div className="absolute inset-0 bg-[url('/path/to/your/abstract-pattern.svg')] opacity-10"></div>
        </section>

        {/* Features Section */}
        <section className="py-10 px-6 md:px-12 lg:px-24 text-center">
          <h4 className="text-lg text-[#00ff88] font-semibold mb-4">Features</h4><br></br>
          <p className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Explore Our Innovative Farming Solutions
          </p><br></br>
          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            At Krishan, we harness technology to empower farmers with essential tools. Our features are designed to enhance productivity and foster a thriving agricultural community.
          </p> <br></br><br></br><br></br>

          {/* New Section: Replacing Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Market Monitoring Card */}
            <div className="bg-[#0d2a28] p-13 rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-8">
                <TrendingUpIcon className="text-8xl scale-300 text-[#00ff88]" /> {/* Larger Icon */}
              </div>
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Market Monitoring</p2> <br></br><br></br>
              <p className="text-lg text-gray-300 mb-8">
                Stay ahead of trends with real-time price trends and demand insights to make informed decisions.
              </p><br></br>
              <Link
                to="/insights"
                className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black  px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30 "
              style={{ textDecoration: 'none' }}
              > Explore </Link>
            </div>

            {/* Weather Info Card */}
            <div className="bg-[#0d2a28] p-13 rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-8">
                <WbSunnyIcon className="text-8xl scale-300 text-[#00ff88]" /> {/* Larger Icon */}
              </div>
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Weather Information</p2><br></br><br></br>
              <p className="text-lg text-gray-300 mb-8">
                Plan your farming activities with accurate weather forecasts and alerts tailored for agriculture.
              </p><br></br>
              <Link
                to="/weather"
                className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black  px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30 "
              style={{ textDecoration: 'none' }}
              > Explore </Link>
            </div>

            {/* Farmer Community Card */}
            <div className="bg-[#0d2a28] p-13 rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-8">
                <GroupIcon className="text-8xl scale-300 text-[#00ff88]" /> {/* Larger Icon */}
              </div>
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Farmer Community</p2><br></br><br></br>
              <p className="text-lg text-gray-300 mb-8">
                Connect and share knowledge by joining forums and discussions with fellow farmers.
              </p> <br></br>
              <Link
                to="/community"
                className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black  px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30 "
              style={{ textDecoration: 'none' }}
              > Explore </Link>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="bg-[#0d2a28] py-24 px-6 md:px-12 lg:px-24 text-center">
          <p1 className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Revolutionizing Market Monitoring for Farmers
          </p1><br></br><br></br><br></br>
          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
            Stay ahead with our interactive price trends and demand insights.
          </p><br></br><br></br><br></br>
          <div className="flex flex-col md:flex-row justify-around items-center gap-12">
            <div className="text-center">
              <p className="text-[8rem] font-bold text-[#00ff88] mb-8">90%</p> {/* 10x Bigger Percentage */}
              <p className="text-lg text-gray-300 mb-8">Maximize profits with data-driven market strategies.</p>
              <p className="text-[8rem] font-bold text-[#00ff88] mb-8">76%</p> {/* 10x Bigger Percentage */}
              <p className="text-lg text-gray-300">Access comprehensive insights for smarter farming.</p>
            </div>
            <div>
              <img
                src={Monitor}
                alt="Monitor"
                className="max-w-full h-auto rounded-lg shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Weather Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
          <p1 className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Stay Ahead with Real-Time Weather Insights
          </p1> <br></br><br></br><br></br>
          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
            Harness the power of accurate weather data tailored for farmers.
          </p><br></br><br></br>
          <div className="flex flex-col md:flex-row justify-around gap-12">
            <div className="bg-[#0d2a28] p-8 rounded-lg flex flex-col items-center shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              <img src={Weather} alt="Weather" className="w-24 h-24 mb-8" />
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Forecast Accuracy</p2>
              <p className="text-lg text-gray-300">Get precise weather updates to enhance your farming strategies.</p>
            </div>
            <div className="bg-[#0d2a28] p-8 rounded-lg flex flex-col items-center shadow-2xl shadow-[#00ff88]/30 transform hover:scale-105 transition-transform duration-300">
              <img src={Planning} alt="Planning" className="w-24 h-24 mb-8" />
              <p2 className="text-2xl font-bold mb-8 text-[#00ff88]">Planning Tools</p2>
              <p className="text-lg text-gray-300">Utilize crop-specific recommendations for planting and harvesting.</p>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] py-24 px-6 md:px-12 lg:px-24 text-center">
          <p2 className="text-4xl md:text-5xl font-bold mb-10 text-black">Join Our Thriving Farmer Community Today</p2><br></br><br></br>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-black">
            Engage with fellow farmers in our dynamic forums.
          </p> <br></br>
          <Link 
            to="/signup"
            className="bg-transparent border border-black text-black px-15 py-3 rounded-lg font-semibold hover:bg-[#00ff88] hover:text-[#00ff88] transition-all duration-300 shadow-lg shadow-[#00ff88]/30 no-underline"
            style={{ textDecoration: 'none' }}
          >
            Join Us
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
