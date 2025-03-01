import Layout from '../components/Layout'
import React from 'react'

const Weather = () => {
  return (
   <Layout>
    
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-5 text-center">
        <h1 className="text-4xl font-bold mb-4">Stay Ahead with Real-Time Weather Insights</h1>
        <p className="mb-6">Weather plays a crucial role in farming success. Our Weather Info page provides farmers with essential updates and forecasts tailored specifically for agricultural needs.</p>
        <div className="space-x-4">
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg">Learn More</button>
          <button className="bg-white text-black py-2 px-6 rounded-lg">Get Started</button>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-16 px-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-4">Stay Updated with Real-Time Weather Insights</h2>
    <img src="https://via.placeholder.com/600x400" alt="Real-Time Weather Insights" className="mb-4 rounded-lg" />
    <p className="mb-4">Access our interactive map for the latest weather updates tailored for farmers. Plan your agricultural activities with confidence using our precise forecasts.</p>
    <ul className="list-disc list-inside mb-4">
      <li><strong>Current Conditions:</strong> Real-time weather data to safeguard your crops.</li>
      <li><strong>Planning Tools:</strong> Tailored advice for planning and harvesting.</li>
    </ul>
    <button className="bg-green-600 text-white py-2 px-6 rounded-lg">Learn More</button>
  </div>

      <div className="bg-white p-8 shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold mb-4">Tailored Weather Forecasts for Your Farming Needs</h2>
  <img src="https://via.placeholder.com/600x400" alt="Farming Weather Forecast" className="mb-4 rounded-lg" />
  <p className="mb-4">Our weather forecasts are specifically designed for farmers, providing crucial insights for effective planning.</p>
  <ul className="list-disc list-inside mb-4">
    <li><strong>Weather Alerts:</strong> Immediate alerts for extreme weather events.</li>
    <li><strong>Planning Tools:</strong> Optimize planting and harvesting schedules.</li>
  </ul>
  <button className="bg-green-600 text-white py-2 px-6 rounded-lg">Learn More</button>
</div>

<div className="bg-white p-8 shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold mb-4">Weekly Weather Summary</h2>
  <img src="https://via.placeholder.com/600x400" alt="Weekly Weather Summary" className="mb-4 rounded-lg" />
  <p className="mb-4">Get a detailed weekly weather summary to better plan your farming activities. Know the temperature trends, precipitation forecasts, and wind conditions.</p>
  <ul className="list-disc list-inside mb-4">
    <li><strong>Temperature Trends:</strong> Daily high and low temperatures.</li>
    <li><strong>Precipitation:</strong> Rainfall predictions for the upcoming week.</li>
    <li><strong>Wind Conditions:</strong> Wind speed and direction forecasts.</li>
  </ul>
  <button className="bg-green-600 text-white py-2 px-6 rounded-lg">Explore More</button>
</div>


<div className="bg-white p-8 shadow-lg rounded-lg">
  <h2 className="text-2xl font-bold mb-4">Extreme Weather Warnings</h2>
  <img src="https://via.placeholder.com/600x400" alt="Extreme Weather Warnings" className="mb-4 rounded-lg" />
  <p className="mb-4">Stay prepared for unexpected extreme weather events. Get real-time warnings for storms, floods, and droughts.</p>
  <ul className="list-disc list-inside mb-4">
    <li><strong>Storm Alerts:</strong> Early notifications about upcoming storms.</li>
    <li><strong>Flood Warnings:</strong> Updates on potential flood risks.</li>
    <li><strong>Drought Alerts:</strong> Warnings about prolonged dry spells.</li>
  </ul>
  <button className="bg-green-600 text-white py-2 px-6 rounded-lg">Get Alerts</button>
</div>

      </section>

      {/* Weather Alerts Section */}
      <section className="bg-gray-800 text-white py-20 px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Informed with Weather Alerts</h2>
        <p className="mb-6">Receive timely alerts for extreme weather events like storms and droughts. Protect your crops and make informed decisions to minimize damage.</p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg">Sign Up</button>
      </section>
    </div>
   </Layout>
  )
}

export default Weather
