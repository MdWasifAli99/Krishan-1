import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Thermostat, WaterDrop, Cloud, WbSunny, Warning } from '@mui/icons-material'; // MUI Icons
import '../App.css';

const Weather = () => {

      const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="font-poppins bg-gradient-to-b from-[#0a1f1d] to-[#0d2a28] text-white">
        {/* Header */}
        <div className="bg-[#0a2f2c] p-6 flex justify-between items-center shadow-lg">
          <p1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Weather Info
          </p1>
          <div className="space-x-6" >
            <Link
              to="/weatherblog2"
              className="text-white hover:text-[#ffffff] transition-all duration-300" style={{ textDecoration: 'none' }}
            >
              Interactive Map
            </Link>
            <Link
              to="/weatherblog3"
              className="text-white hover:text-[#ffffff] transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              Forecasts
            </Link>
            <Link
              to="/crop-advice"
              className="text-white hover:text-[#ffffff] transition-all duration-300" style={{ textDecoration: 'none' }}
            >
              Crop Advice
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 px-6 md:px-12 lg:px-24 text-center">
          <p2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff] animate-pulse">
            Live Weather Update
          </p2> <br></br><br></br><br></br>
          <div className="bg-[#0a2f2c] p-8 rounded-2xl shadow-2xl inline-block border-2 border-[#00ff88]/20 hover:border-[#00b8ff] transition-all">
            <p className="text-xl mb-4">Region: Rangpur</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-[#0d2a28] rounded-lg">
                <Thermostat className="text-4xl text-[#00ff88] mb-2" />
                <p className="text-2xl font-mono">22°C</p>
                <p className="text-sm text-gray-400">Temperature</p>
              </div>
              <div className="p-4 bg-[#0d2a28] rounded-lg">
                <WaterDrop className="text-4xl text-[#00b8ff] mb-2" />
                <p className="text-2xl font-mono">65%</p>
                <p className="text-sm text-gray-400">Humidity</p>
              </div>
              <div className="p-4 bg-[#0d2a28] rounded-lg">
                <Cloud className="text-4xl text-[#00ff88] mb-2" />
                <p className="text-2xl font-mono">15 km/h</p>
                <p className="text-sm text-gray-400">Wind Speed</p>
              </div>
              <div className="p-4 bg-[#0d2a28] rounded-lg">
                <WbSunny className="text-4xl text-[#00b8ff] mb-2" />
                <p className="text-2xl font-mono">Sunny</p>
                <p className="text-sm text-gray-400">Forecast</p>
              </div>
            </div>
          </div> <br></br><br></br><br></br>

          {/* Live Current Time */}
            <div className=" p-8  border-[#00ff88]/20 hover:border-[#00b8ff] transition-all mt-8">
              <h3 className="text-xl font-bold mb-4">Dhaka, Bangladesh</h3>
              <div className="text-7xl font-mono text-[#00ff88]">
                {currentTime}
              </div>
            </div>

        </section>

        

        {/* Weather Alerts Section */}
        <section className="py-8 px-6 md:px-12 lg:px-24 text-center">
          <p2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00ff88] to-[#00b8ff]">
            Weather Alerts
          </p2> <br></br><br></br><br></br><br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#0a2f2c] rounded-2xl border-2 border-[#00ff88]/20 hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10">
              <Warning className="text-4xl text-[#00b8ff] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Storm Alerts</h3>
              <p className="text-gray-300 mb-4">Early notifications about upcoming storms.</p>
              <div className="p-4 bg-[#0d2a28] rounded-lg">
                <p className="text-sm text-gray-400">Storm expected in 48 hours. Prepare now.</p>
              </div>
            </div>
            <div className="p-6 bg-[#0a2f2c] rounded-2xl border-2 border-[#00ff88]/20 hover:border-[#00b8ff] transition-all shadow-2xl shadow-[#00ff88]/10">
              <Warning className="text-4xl text-[#00ff88] mb-4" />
              <h3 className="text-2xl font-bold mb-2">Flood Warnings</h3>
              <p className="text-gray-300 mb-4">Updates on potential flood risks.</p>
              <div className="p-4 bg-[#0d2a28] rounded-lg">
                <p className="text-sm text-gray-400">Flood warning for the weekend. Stay alert.</p>
              </div>
            </div>
          </div>
        </section> <br></br><br></br>

        <section className="bg-gradient-to-r from-[#00ff88] to-[#00b8ff] py-24 px-6 md:px-12 lg:px-24 text-center">
                         <p2 className="text-4xl md:text-5xl font-bold mb-10 text-black">Get weather alerts!</p2><br></br><br></br>
                         <p className="text-lg mb-12 max-w-2xl mx-auto text-black">
                           Stay connected with us and get early notifications.
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

export default Weather;