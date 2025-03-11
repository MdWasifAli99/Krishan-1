// src/pages/FeatureBlog1.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'; // CSS file to style the page

const FeatureBlog1 = () => {
  return (
    <Layout>
  <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-black text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Stay Ahead with Real-Time Weather Insights</h1>
        <p className="text-lg">Weather plays a crucial role in farming success. Our Weather Info page provides farmers with essential updates and forecasts tailored specifically for agricultural needs.</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Understanding the Importance of Weather in Farming</h2>
          <p className="text-lg mb-6">
            Farming relies heavily on weather. Accurate real-time updates help farmers plan planting, irrigation, and harvesting. This reduces risks, optimizes productivity, and enhances crop yield.
          </p>
          <img src="https://via.placeholder.com/1200x600" alt="Agriculture Weather Forecast" className="w-full rounded-lg shadow-lg mb-6" />
          <p className="text-lg">Timely weather data helps with decision-making, whether it's sowing seeds, applying fertilizers, or protecting crops from extreme conditions.</p>
        </section>

        {/* Weather Insights Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Tailored Weather Insights for Farmers</h2>
          <p className="text-lg mb-6">
            Our platform offers up-to-date forecasts with temperature, precipitation, humidity, and wind speed—essential data for effective crop management.
          </p>
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <h3 className="text-xl font-medium mb-2">Temperature Forecast</h3>
              <img src="https://via.placeholder.com/600x400" alt="Temperature Forecast" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-medium mb-2">Precipitation Forecast</h3>
              <img src="https://via.placeholder.com/600x400" alt="Precipitation Forecast" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
          <p className="text-lg">Temperature predictions help prevent crop damage from frost or heatwaves, while precipitation data ensures proper irrigation planning.</p>
        </section>

        {/* Benefits for Farmers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Benefits of Using Real-Time Weather Insights</h2>
          <ul className="list-disc pl-6 text-lg mb-6">
            <li>Optimize irrigation schedules</li>
            <li>Protect crops from extreme weather</li>
            <li>Plan harvesting and planting based on weather patterns</li>
            <li>Minimize losses from weather unpredictability</li>
            <li>Increase yields and reduce input costs</li>
          </ul>
          <img src="https://via.placeholder.com/1200x600" alt="Farmer Using Weather Insights" className="w-full rounded-lg shadow-lg mb-6" />
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Conclusion: Empowering Farmers with Knowledge</h2>
          <p className="text-lg mb-6">
            Real-time weather insights enable farmers to make timely decisions, enhancing crop outcomes and productivity. With advanced forecasting tools, farmers can manage risks and ensure operational sustainability.
          </p>
          <p className="text-lg">As climate conditions become more unpredictable, the integration of weather data is key to staying competitive in agriculture.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="text-center bg-gray-100 py-6">
        <p className="text-lg text-gray-700">© 2025 Tailored Weather Insights for Farmers | All Rights Reserved</p>
      </footer>
    </div>
    </Layout>
  );
};

export default FeatureBlog1;
