// src/pages/FeatureBlog1.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'; // CSS file to style the page

const FeatureBlog1 = () => {
  return (
    <Layout>    <div className="container mx-auto px-4 py-8">
    {/* Header Section */}
    <header className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-blue-900">Stay Updated with Real-Time Weather Insights</h1>
      <p className="text-xl text-gray-700 mt-4">
        Access our interactive map for the latest weather updates tailored for farmers. Plan your agricultural activities with confidence using our precise forecasts. Stay ahead of climate conditions, safeguard your crops, and optimize your farming practices.
      </p>
    </header>

    {/* Section 1 - Real-Time Weather Data */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-blue-800 mb-4">Current Conditions: Real-Time Weather Data</h2>
      <p className="text-lg text-gray-700 mb-4">
        Weather plays a critical role in agricultural production. By monitoring the real-time weather data, farmers can adjust their plans, ensuring that their crops thrive in optimal conditions. Our platform offers hourly and daily weather data, including temperature, humidity, precipitation, and wind speed.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        For instance, if you are planting rice or wheat, knowing the exact rainfall forecast can determine the best time for sowing seeds. Too much rain can lead to flooding, while insufficient rain can cause droughts—both scenarios affect crop yields. Our data helps mitigate these risks, making agriculture more predictable.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Real-Time Weather Data"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>

    {/* Section 2 - Tailored Advice for Planning */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-blue-800 mb-4">Planning Tools: Tailored Advice for Planning and Harvesting</h2>
      <p className="text-lg text-gray-700 mb-4">
        Planning your agricultural activities requires careful consideration of weather patterns. With the help of our tailored advice, farmers can receive insights about the best times for planting, irrigation, and harvesting. 
      </p>
      <p className="text-lg text-gray-700 mb-4">
        For example, if a heatwave is forecasted, you may need to adjust irrigation schedules for crops that require regular watering, such as paddy fields. Conversely, if rainfall is expected, your crops may benefit from reduced irrigation, saving water and costs. With our platform, you can receive customized recommendations based on the weather forecast for your region.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Agricultural Planning Tools"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>

    {/* Section 3 - Interactive Weather Map */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-blue-800 mb-4">Interactive Map for Weather Updates</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our interactive weather map allows farmers to visualize the latest weather data for their region in real time. This map provides comprehensive information such as temperature, humidity, and wind speeds, helping farmers make decisions about irrigation, harvesting, and more.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        You can zoom in on your specific location to see detailed forecasts for the next few hours, days, and weeks. By clicking on specific areas of the map, you can view the latest alerts, such as rain warnings, temperature spikes, or frost risks, which are critical for preventing crop damage.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Interactive Map"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>

    {/* Section 4 - Impact of Weather on Crop Yields */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-blue-800 mb-4">How Weather Affects Crop Yields</h2>
      <p className="text-lg text-gray-700 mb-4">
        Understanding the impact of weather on crop yields is essential for every farmer. Seasonal weather changes—whether too much rainfall or prolonged drought—can affect the growth cycle of crops, reducing yields or even killing plants. Farmers need accurate forecasts to avoid crop losses.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        For instance, rice and maize are highly sensitive to the amount of rain they receive. The ideal conditions for rice require consistent rainfall, but excess water or poor drainage can cause root rot. By knowing the weather in advance, farmers can take steps to protect their crops, such as adjusting irrigation or using protective covers.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Similarly, fruit crops such as mangoes or oranges can be heavily impacted by temperature fluctuations. A sudden frost can damage blossoms, leading to a poor harvest. With accurate weather insights, farmers can mitigate such risks by using frost protection techniques or delaying the harvest until more favorable conditions arise.
      </p>
    </section>

    {/* Section 5 - Seasonal Forecasting for Farmers */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-blue-800 mb-4">Seasonal Forecasting: Plan for the Long-Term</h2>
      <p className="text-lg text-gray-700 mb-4">
        Long-term seasonal forecasts are invaluable for farmers who plan crops well in advance. By receiving accurate seasonal predictions, farmers can decide which crops to plant for the upcoming season. For instance, if a particularly dry season is expected, farmers might choose drought-resistant crops that are better suited to those conditions.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Furthermore, knowing the likelihood of extreme weather events, such as floods, storms, or heatwaves, can help farmers take preventive measures to protect their fields. By preparing ahead of time, farmers can save costs and avoid the loss of entire crops due to unforeseen weather changes.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Seasonal Forecasting"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>

    {/* Section 6 - Success Stories from Farmers */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-blue-800 mb-4">Success Stories: Farmers Who Have Benefited from Weather Insights</h2>
      <p className="text-lg text-gray-700 mb-4">
        Many farmers across the globe have benefited from our real-time weather data and planning tools. One example is Farmer John, who used our platform to adjust his irrigation schedule for his wheat farm. By using the forecasts to monitor rainfall patterns, he reduced water waste and saw a 20% increase in his harvest yield.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Another farmer, Sarah, was able to protect her vegetable farm from a surprise frost by using our early warning system. She covered her crops with blankets just in time, preventing any frost damage. With these types of insights, farmers can make informed decisions that lead to increased efficiency and profitability.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Farmer Success Stories"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </section>

  </div>
    </Layout>
  );
};

export default FeatureBlog1;
