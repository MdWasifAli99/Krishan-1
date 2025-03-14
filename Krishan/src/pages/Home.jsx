import React from 'react';
import '../App.css';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import farmer from '../images/farmer.png';
import mission1 from '../images/mission1.jpg';
import mission2 from '../images/mission2.jpg';
import mission3 from '../images/mission3.jpg';

const features = [
    { 
      title: "Market Intelligence", 
      content: "Real-time commodity pricing with predictive analytics",
      icon: "📈"
    },
    { 
      title: "Smart Weather", 
      content: "Hyper-local forecasts & crop protection alerts",
      icon: "⛈️"
    },
    { 
      title: "Expert Network", 
      content: "24/7 access to agricultural specialists",
      icon: "👨🌾"
    },
    { 
      title: "Digital Bazaar", 
      content: "AI-powered marketplace with fair pricing",
      icon: "🛒"
    }
  ];

const dashboardItems = [
    { 
      title: "Wheat Price", 
      value: "৳100/kg",
      icon: "🌾",
      trend: "+2.4%"
    },
    { 
      title: "Temperature", 
      value: "32°C",
      icon: "🌡️",
      trend: "Sunny"
    },
    { 
      title: "Rain Chance", 
      value: "45%",
      icon: "🌧️",
      trend: "3 hours"
    },
    { 
      title: "Market Trend", 
      value: "+12%",
      icon: "📈",
      trend: "Rising"
    }
  ];

const Home = () => {
  return (
    <Layout>
      <div className="font-poppins bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] text-white">
        {/* Hero Section */}
        <section className="relative py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center  justify-between gap-12">
          <div className="flex-1 z-10">
            <p1 className="text-5xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Empowering Farmers with Tech Solutions
            </p1> <br></br><br></br>
            <p className="text-lg mb-12 text-gray-300">
              Join 50,000+ farmers using AI-driven agricultural innovations for maximum productivity.
            </p> <br></br>
            <div className="flex gap-4">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#00ff88]/30"
              style={{ textDecoration: 'none' }}
              >
                Get Started
              </Link>
              <Link
                to="/homeblog1"
                className="border border-[#00ff88] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00ff88]/10 transition-all duration-300 shadow-lg shadow-[#00ff88]/30"
              style={{ textDecoration: 'none' }}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center z-10">
            <img
              src={farmer}
              alt="Smart Farming"
              className="max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
              style={{ maxWidth: '600px' }}
            />
          </div>
        </section>

        {/* Live Dashboard Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 text-center bg-gradient-to-br from-[#0a2f2c] to-[#083330] relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZmODgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-10"></div>
          <div className="relative z-10">
            <h4 className="text-lg text-[#00ff88] font-semibold mb-4">Live Dashboard</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
              Real-Time Farming Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              {dashboardItems.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-[#0a2f2c] border-2 border-[#00ff88]/20 rounded-xl hover:border-[#00b8ff] transition-all group"
                >
                  <div className="text-4xl mb-4 animate-float">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#00ff88] mb-2">{item.title}</h3>
                  <div className="text-3xl font-mono mb-2">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Sections */}
        <section className="py-24 px-6 md:px-12 lg:px-24 space-y-25">
          {/* Mission 1 - Precision Farming */}
          <div className="text-center">
            <h4 className="text-lg text-[#00ff88] font-semibold mb-4">Our Missions</h4>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-16 bg-[#0d2a28] rounded-3xl p-8 md:p-12 border-l-4 border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/20 transition-all">
            <div className="flex-1">
              <img src={mission1} alt="Precision Farming" className="w-full h-64 object-cover rounded-2xl" />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
                <span className="mr-4">🌱</span>Smart Farming
              </h2>
              <p className="text-lg text-gray-300">
                Leverage IoT and AI for precision agriculture with real-time field monitoring and automated systems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0a1f1d] rounded-lg flex items-center gap-3">
                  <div className="text-2xl">📡</div>
                  <div>Sensor Networks</div>
                </div>
                <div className="p-4 bg-[#0a1f1d] rounded-lg flex items-center gap-3">
                  <div className="text-2xl">🤖</div>
                  <div>Automated Irrigation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission 2 - Market Connect */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 bg-gradient-to-br from-[#0a2f2c] to-[#083330] rounded-3xl p-8 md:p-12 border-r-4 border-[#00b8ff] hover:shadow-2xl hover:shadow-[#00b8ff]/20 transition-all">
            <div className="flex-1">
              <img src={mission2} alt="Market Analytics" className="w-full h-64 object-cover rounded-2xl" />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00b8ff] to-[#00ff88]">
                <span className="mr-4">📈</span>Market Power
              </h2>
              <p className="text-lg text-gray-300">
                Real-time market intelligence and direct access to national agricultural markets.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-[#0d2a28] rounded-lg text-center">
                  <div className="text-3xl text-[#00ff88]">৳2145+</div>
                  <div className="text-sm">Avg. Price/Qt</div>
                </div>
                <div className="flex-1 p-4 bg-[#0d2a28] rounded-lg text-center">
                  <div className="text-3xl text-[#00b8ff]">50k+</div>
                  <div className="text-sm">Daily Transactions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission 3 - Sustainability */}
          <div className="flex flex-col md:flex-row items-center gap-16 bg-[#0d2a28]/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border-t-4 border-[#00ff88] hover:shadow-2xl hover:shadow-[#00ff88]/20 transition-all">
            <div className="flex-1">
              <img src={mission3} alt="Sustainable Farming" className="w-full h-64 object-cover rounded-2xl" />
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
                <span className="mr-4">🌍</span>Eco Future
              </h2>
              <p className="text-lg text-gray-300">
                Sustainable farming practices powered by renewable energy and community education.
              </p>
              <div className="flex gap-4">
                <div className="p-4 bg-[#00ff88]/10 rounded-lg flex-1">
                  <div className="text-2xl mb-2">💧 65%</div>
                  <div className="text-sm">Water Saved</div>
                </div>
                <div className="p-4 bg-[#00b8ff]/10 rounded-lg flex-1">
                  <div className="text-2xl mb-2">📈 40%</div>
                  <div className="text-sm">Yield Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Features Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#0a2f2c] to-[#083330] relative text-center">
          <h4 className="text-lg text-[#00ff88] font-semibold mb-4">Features</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            AI-Powered Farming Solutions
          </h2>
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 bg-[#0d2a28] rounded-xl border-2 border-[#00ff88]/30 hover:border-[#00ff88] transition-all shadow-2xl shadow-[#00ff88]/10"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#00ff88]">{feature.title}</h3>
                <p className="text-gray-300">{feature.content}</p>
              </div>
            ))}
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

export default Home;