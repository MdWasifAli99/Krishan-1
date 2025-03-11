// src/pages/FeatureBlog1.jsx
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'; // CSS file to style the page

const FeatureBlog1 = () => {
  return (
    <Layout><div className="container mx-auto px-4 py-8">
    {/* Header Section */}
    <header className="text-center mb-16">
      <h1 className="text-5xl font-extrabold text-indigo-900">Tailored Weather Forecasts for Your Farming Needs</h1>
      <p className="text-xl text-gray-700 mt-4">
        Get accurate and timely weather forecasts designed specifically for farmers. Our platform provides crucial insights that help you plan your agricultural activities efficiently, ensuring the success of your crops.
      </p>
    </header>

    {/* Section 1 - Farming Weather Forecast */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Farming Weather Forecast</h2>
      <p className="text-lg text-gray-700 mb-4">
        Weather is one of the most critical factors affecting agriculture. A single day of extreme conditions, like frost or heavy rain, can have devastating effects on crop yield. Our weather forecasts provide precise and timely information to help farmers plan better. We offer localized, hyper-accurate forecasts that are essential for informed decision-making.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **What’s in Our Forecasts?**  
        - **Temperature**: Understanding temperature fluctuations is key for deciding when to plant or harvest crops. For instance, crops like tomatoes are sensitive to frost, so farmers can take protective measures during cold weather.
        - **Rainfall Predictions**: Our forecasts help farmers schedule irrigation more efficiently, and avoid over-watering or under-watering crops.
        - **Wind Speed**: High winds can damage delicate crops, so understanding wind patterns can help mitigate this risk.
        - **Humidity**: The right humidity levels are essential for certain crops like paddy, as they influence growth and disease risk.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Farming Weather Forecast"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>

    {/* Section 2 - Weather Alerts */}
    <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Weather Alerts: Immediate Alerts for Extreme Weather Events</h2>
      <p className="text-lg text-gray-700 mb-4">
        Early warning systems can make a significant difference in protecting crops from severe weather events. Our platform provides automated, real-time alerts about extreme weather conditions such as heavy rain, heatwaves, frost, or storms, allowing farmers to act promptly and protect their fields.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **How Weather Alerts Help Farmers**  
        - **Frost Risk**: Farmers can receive alerts ahead of a frost event, which is crucial for protecting sensitive crops like strawberries and beans. You can take action like covering plants, using wind machines, or watering plants to create a protective layer of heat.
        - **Heavy Rain or Floods**: The system warns farmers about impending heavy rainfall, enabling them to manage drainage systems, protect crops from waterlogging, or adjust irrigation schedules.
        - **Storm Warnings**: In case of approaching storms or hurricanes, farmers can secure their equipment, harvest crops early, or deploy protective structures to minimize damage.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **Proactive Measures**: Alerts also allow farmers to prepare in advance, minimizing crop damage, saving costs, and ensuring crop health. With timely information, you can make informed decisions, such as changing watering schedules or harvesting early.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Weather Alerts"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>

    {/* Section 3 - Planning Tools */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Planning Tools: Optimize Planting and Harvesting Schedules</h2>
      <p className="text-lg text-gray-700 mb-4">
        Proper timing is the backbone of successful farming. Planting or harvesting at the wrong time due to inaccurate weather forecasts can lead to reduced yields or crop failure. With our tailored planning tools, farmers can fine-tune their activities to maximize productivity.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **How Our Planning Tools Work**  
        - **Planting Time Optimization**: Based on forecasted temperature and rainfall patterns, our platform helps determine the best time to plant specific crops. For example, crops like wheat perform better when planted during cooler months, while corn requires warmer temperatures to thrive.
        - **Harvest Window**: Forecasting rain and temperature trends also allows farmers to predict the ideal harvesting period. Early harvests can sometimes yield better results, while waiting too long may expose crops to adverse weather conditions.
        - **Irrigation Scheduling**: Our tools integrate weather data to optimize irrigation systems, ensuring that crops receive the right amount of water without over-watering or wasting resources.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **Proven Impact**: Several farmers have reported a 15-20% increase in yield after using our platform to fine-tune their planting and harvesting schedules. By leveraging our planning tools, you can ensure that every step of your farming process is backed by accurate, real-time weather data.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Planning Tools for Farmers"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>

    {/* Section 4 - Farmer Testimonial Section */}
    <section className="mb-16 bg-gradient-to-r from-green-50 to-yellow-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Farmer Testimonials: Real Stories, Real Impact</h2>
      <p className="text-lg text-gray-700 mb-4">
        The best way to understand the value of our platform is to hear from farmers who have benefited from it. Here are a few success stories:
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **Sarah, Vegetable Grower**:  
        “Last year, I was able to protect my crops from a late-season frost by using the weather alerts from this platform. I covered my crops just in time, preventing any frost damage. It saved me from potential losses and increased my overall yield by 18%.”
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **John, Wheat Farmer**:  
        “I’ve been using the planting and irrigation planning tools for the past few seasons, and I’ve seen a significant improvement in my crop health and water usage. The real-time weather data helped me decide when to plant, and I harvested 25% more than last year.”
      </p>
      <p className="text-lg text-gray-700 mb-4">
        These stories highlight the tangible impact that tailored weather forecasts and planning tools can have on farmers. By providing actionable insights, our platform empowers farmers to make informed decisions that lead to increased productivity and reduced risks.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Farmer Success Stories"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>

    {/* Section 5 - Interactive Map */}
    <section className="mb-16">
      <h2 className="text-4xl font-semibold text-indigo-800 mb-4">Interactive Map for Real-Time Weather Insights</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our interactive map allows you to see real-time weather conditions and forecasts for your region. You can zoom in to see hyper-localized data specific to your farm, enabling better decision-making based on the most accurate, up-to-date weather information available.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        **Features of the Interactive Map**  
        - **Hourly and Weekly Forecasts**: See detailed forecasts for the upcoming hours and days. This helps plan immediate actions like irrigation or pest control.
        - **Weather Alerts by Region**: View alerts for your specific location, including flood warnings, frost alerts, or storm advisories.
        - **Zoom-in Capabilities**: You can zoom in to get a closer view of the weather conditions specific to your farm.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This map is the ultimate tool for farmers who need to stay on top of constantly changing weather patterns and conditions, helping you adjust quickly to any environmental challenge.
      </p>
      <div className="mt-8">
        <img
          src="https://via.placeholder.com/1200x500"
          alt="Interactive Weather Map"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </section>

    {/* Footer Section */}
   
  </div>
    </Layout>
  );
};

export default FeatureBlog1;
